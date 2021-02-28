<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">Kanban board</li>
      </ol>
    </nav>
    <AddBar v-if="loggedIn" resource="task"/>

    <div id="headers">
      <h3>TODO</h3>
      <h3>IN PROGRESS</h3>
      <h3>DONE</h3>
    </div>
    <div id="tasks-container">
      <div>
        <Task v-for="task in task.todoTasks" :key="task.id" :task="task"/>
      </div>
      <div>
        <Task v-for="task in task.inProgressTasks" :key="task.id" :task="task"/>
      </div>
      <div>
        <Task v-for="task in task.doneTasks" :key="task.id" :task="task"/>
      </div>
    </div>
  </div>
</template>

<script>
import Task from "@/components/Task";
import store from "@/store/index";
import {mapState} from "vuex";
import AddBar from "@/components/AddBar";
import {authComputed} from "@/store/helpers";

function getTasks(next) {
  store.dispatch('task/fetchTasks')
      .then(() => {
        next();
      });
}

export default {
  name: "Home",
  components: { AddBar, Task },
  beforeRouteEnter(routeTo, routeFrom, next) {
    getTasks(next);
  },
  computed: {
    ...mapState([
      'task'
    ]),
    ...authComputed,
  }
}
</script>

<style scoped>

.breadcrumb {
  margin-top: 5px;
}

#tasks-container,
#headers {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

</style>
