<template>
  <header class="blog-header py-3">
    <div class="row flex-nowrap justify-content-between align-items-center">
      <div class="col-4 text-center">
        <router-link :to="{ name: 'home' }"
                     class="blog-header-logo text-dark">
          Home
        </router-link>
      </div>

      <div class="col-4 d-flex justify-content-end align-items-center">
        <template v-if="!loggedIn">
          <router-link :to="{ name: 'register' }"
                       class="btn btn-sm btn-outline-secondary">
            Sign up
          </router-link>
          <router-link :to="{ name: 'login' }"
                       class="btn btn-sm btn-outline-secondary">
            Sign in
          </router-link>
        </template>
        <template v-else>
          <div class="mx-2">
            Hello, {{ loggedUser }}
          </div>
          <router-link :to="{ name: 'home' }"
                       class="btn btn-sm btn-outline-secondary"
                       @click.native="signOut">
            Sign out
          </router-link>
        </template>
      </div>
    </div>
  </header>
</template>

<script>
import {authComputed} from "@/store/helpers";

export default {
  name: "Topbar",
  computed: {
    ...authComputed
  },
  methods: {
    signOut() {
      this.$store.dispatch('user/logout')
    }
  }
}
</script>

<style scoped>

.blog-header {
  line-height: 1;
  border-bottom: 1px solid #e5e5e5;
}

.py-3 {
  padding-bottom: 1rem !important;
}

.blog-header-logo {
  font-size: 2.25rem;
}

.text-dark {
  color: #343a40 !important;
}

.col-4 {
  margin-right: 35px;
}

</style>