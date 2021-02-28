'use strict';

import axiosInstance from '../axios-config';
import { tasks } from '../custom-uris';

export function getTasks() {
    return axiosInstance.get(tasks);
}

export function addTask({ title, description }) {
    return axiosInstance.post(tasks, { title, description });
}

export function updateTask({ title, description, status, taskID }) {
    return axiosInstance.put(`${tasks}/${taskID}`, { title, description, status });
}

export const actions = {
    fetchTasks() {
        return getTasks()
          .then(({ data }) => {
              console.log(data)
          })
          .catch(console.log)
    },
};
