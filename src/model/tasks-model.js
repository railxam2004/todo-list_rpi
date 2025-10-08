import { tasks } from "../mock/task.js";

export default class TasksModel {
  #boardtasks = tasks;

  get tasks() {
    return this.#boardtasks;
  }
}
