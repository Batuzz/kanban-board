<template>
  <div class="media border">
    <UserInfo :user="author"/>
    <div class="container">
      <div>
        <div>
          <span class="title">{{ title }}</span>
        </div>
        <div>
          <span class="title">{{ description }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserInfo from "@/components/UserInfo";
import {authComputed} from "@/store/helpers";
import {updateTask} from "@/services/api-calls/task";

export default {
  name: "Task",
  components: {UserInfo},
  data() {
    const { title, description, status, author } = this.task;

    return {
      enableEdit: false,
      title,
      description,
      status,
      author,
      wasEdited: false
    }
  },
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...authComputed,
    isCreator() {
      const {name} = this.author;
      return name === this.loggedUser;
    }
  },
  methods: {
    callUpdateTask() {
      const { description, title, postID } = this;

      updateTask({ description, title, status, postID }).then(() => {
        this.changeEditFlag();
        this.wasEdited = true;
      })
    },
    changeEditFlag() {
      this.enableEdit = !this.enableEdit;
    }
  }
}
</script>

<style scoped>

.title {
  font-size: 23px;
}

</style>
