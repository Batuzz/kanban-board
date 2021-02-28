<template>
  <div class="text-center">
  <form class="form-signin"
        @submit.prevent="login">
    <b-icon icon="person-circle" variant="secondary" class="h1"/>
    <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>

    <div class="row">
      <label for="inputUsername" class="sr-only">Username</label>
      <input type="text"
             id="inputUsername"
             class="form-control"
             placeholder="Username"
             required=""
             @blur="$v.username.$touch()"
             v-model="username">
      <div v-if="$v.username.$error"
           class="alert text-center alert-danger credential-error">
        Wrong username
      </div>
    </div>

    <div class="row">
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password"
             id="inputPassword"
             class="form-control"
             placeholder="Password"
             required=""
             @blur="$v.password.$touch()"
             v-model="password">
      <div v-if="$v.password.$error"
           class="alert text-center alert-danger credential-error">
        Wrong password
      </div>
    </div>

    <div class="row">
      <button class="btn btn-lg btn-primary btn-block"
              type="submit"
              :disabled="$v.$invalid">
        Sign in
      </button>
    </div>

    <template>
      <div class="text-center alert alert-danger" v-if="error">
        {{ this.error }}
      </div>
    </template>
  </form>


  </div>
</template>

<script>
import {minLength, required} from "vuelidate/lib/validators";

export default {
name: "Register",
  data() {
    return {
      username: '',
      password: '',
      error: '',
    }
  },
  methods: {
    login() {
      const credentials = {
        name: this.username,
        password: this.password
      };

      this.$store.dispatch('user/login', credentials)
          .then(() => {
            this.$router.push({name: 'home'})
          })
          .catch(err => {
            console.log(err.response)
            const {message} = err.response.data;
            this.error = message;
          })
    }
  },
  validations: {
    username: {
      required,
      minLength: minLength(5)
    },
    password: {
      required,
      minLength: minLength(3)
    }
  }
}
</script>

<style scoped>

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

*, ::after, ::before {
  box-sizing: border-box;
}

.row {
  padding: 0.5em 0;
}

</style>
