<template>
  <div class="container">
    <h4 class="mb-3 d-flex flex-column align-items-start my-2">
      Create new task
    </h4>
    <form @submit.prevent="createTask">
      <div class="mb-3">
        <label for="title">Task title:</label>
        <input type="text"
               class="form-control"
               id="title"
               placeholder=""
               value=""
               @blur="$v.title.$touch()"
               v-model="title"
               required="">
        <div v-if="$v.title.$error"
             class="alert text-center alert-danger my-1">
          Wrong title name
        </div>
      </div>
      <div class="mb-3">
        <label for="description">Description</label>
        <input type="text"
               class="form-control"
               id="description"
               placeholder=""
               value=""
               @blur="$v.description.$touch()"
               v-model="description"
               required="">
        <div v-if="$v.description.$error"
             class="alert text-center alert-danger my-1">
          Wrong post content
        </div>
      </div>

      <button class="btn btn-lg btn-primary btn-block"
              type="submit"
              :disabled="$v.$invalid">
        Create
      </button>
    </form>
  </div>
</template>

<script>
import {minLength, maxLength, required} from "vuelidate/lib/validators";
import {addTask} from "@/services/api-calls/task";

export default {
  name: "CreateTask",
  data() {
    return {
      description: '',
      title: '',
      status: '',
    }
  },
  methods: {
    createTask() {
      const { title, description, status } = this;

      addTask({ title, description, status });
    }
  },
  validations: {
    title: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(80),
    },
    description: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(255),
    }
  }
}
</script>

<style scoped>

.container {
  width: 50%;
}
</style>
