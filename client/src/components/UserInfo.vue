<template>
  <div class="side-border py-3">
    <b-icon icon="person-circle" variant="secondary" class="h1"/>
    <p>{{ user.name }}</p>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  .side-border {
    border-right: 1px solid #e5e5e5;
    width: 180px;
  }

</style>
