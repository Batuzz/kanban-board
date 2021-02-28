<template>
  <div class="d-flex justify-content-end">
    <template v-if="loggedIn">
      <router-link :to="{ name: `create-${ resource }` }">
        <b-button variant="primary" class="mb-2">
          <b-icon icon="plus-square" aria-hidden="true"/>
          Add {{ resource }}
        </b-button>
      </router-link>
    </template>
    <template v-else>
      <router-link :to="{ name: 'login' }">
        <b-button variant="primary" class="mb-2">
          Sign in to add new {{ resource }}
        </b-button>
      </router-link>
    </template>
  </div>
</template>

<script>
import {authComputed} from "@/store/helpers";

export default {
  name: "AddBar",
  computed: {
    ...authComputed
  },
  props: {
    resource: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>