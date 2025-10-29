// src/main.js
import HeaderComponent from "./view/header-component.js";
import FormAddTaskComponent from "./view/form-add-task-component.js";
import TasksBoardPresenter from "./presenter/tasks-board-presenter.js";
import { render, RenderPosition } from "./framework/render.js";
import TasksModel from "./model/tasks-model.js";
import TasksApiService from "./tasks-api-service.js"; 

const END_POINT = 'https://6901e50cb208b24affe42580.mockapi.io';

// Привязываем к реальным контейнерам из index.html
const bodyContainer = document.querySelector('.app');         
const formContainer = document.querySelector('.add-task-form');
const tasksBoardContainer = document.querySelector('.task-board'); 

const tasksModel = new TasksModel({
  tasksApiService: new TasksApiService(END_POINT)
});

const tasksBoardPresenter = new TasksBoardPresenter({
  boardContainer: tasksBoardContainer, 
  tasksModel,
});

function handleNewTaskButtonClick() {
  tasksBoardPresenter.createTask();
}

render(new HeaderComponent(), bodyContainer, RenderPosition.AFTERBEGIN);
render(
  new FormAddTaskComponent({ onClick: handleNewTaskButtonClick }),
  formContainer,
  RenderPosition.AFTERBEGIN
);

tasksBoardPresenter.init();
