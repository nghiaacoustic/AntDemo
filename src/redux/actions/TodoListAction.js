import { ADD_TASK, CHANGE_THEME, DELETE_TASK, DONE_TASK, UPDATE_TASK } from "../types/ToDoListType";

export const actAddTask = (newTask) => ({
    type: ADD_TASK,
    newTask
});

export const actChangeTheme = (themeId) => ({
    type: CHANGE_THEME,
    themeId
})
export const actDoneTask = (taskId) => ({
    type: DONE_TASK,
    taskId,
})

export const actDeleteTask = (taskId) => ({
    type: DELETE_TASK,
    taskId,
})
export const actupdateTask = (taskId, taskName) => ({
    type: UPDATE_TASK,
    taskId,
    taskName,
})



