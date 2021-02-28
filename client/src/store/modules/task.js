'use strict';

import {getTasks} from "@/services/api-calls/task";

export const namespaced = true;

export const state = {
  todoTasks: [],
  inProgressTasks: [],
  doneTasks: [],
};

export const mutations = {
  SET_TODO_TASKS(state, tasks) {
    state.todoTasks = tasks;
  },
  SET_IN_PROGRESS_TASKS(state, tasks) {
    state.inProgressTasks = tasks;
  },
  SET_DONE_TASKS(state, tasks) {
    state.doneTasks = tasks;
  },
};

export const actions = {
    fetchTasks({commit}, threadID) {
        return getTasks(threadID)
            .then(({ data: tasks }) => {
              const tasksMap = {
                TODO: [],
                IN_PROGRESS: [],
                DONE: [],
              };

              tasks.forEach(task => tasksMap[task.status].push(task));

              commit('SET_TODO_TASKS', tasksMap.TODO);
              commit('SET_IN_PROGRESS_TASKS', tasksMap.IN_PROGRESS);
              commit('SET_DONE_TASKS', tasksMap.DONE);
            })
    }
};
