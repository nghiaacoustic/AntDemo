import { DarkTheme } from "../components/Themes/DarkTheme";
import { ADD_TASK, CHANGE_THEME, DELETE_TASK, DONE_TASK, EDIT_TASK, UPDATE_TASK } from "./types/ToDoListType";
import Swal from "sweetalert2";
import { themes } from "../components/Themes";



const initialState = {
    themeToDoList: DarkTheme,
    taskList: [
        { id: 'task-1', taskName: 'task 1', done: true },
        { id: 'task-2', taskName: 'task 2', done: false },
        { id: 'task-3', taskName: 'task 3', done: true },
        { id: 'task-4', taskName: 'task 4', done: false }
    ],
    taskEdit: [
        { id: '-1', taskName: '', done: false },
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            if (action.newTask.taskName.trim() === '') {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href="">Please Iput the Task name?</a>'
                });
                return { ...state }
            }
            let taskListUpdate = [...state.taskList];
            let index = taskListUpdate.findIndex(task => task.taskName === action.newTask.taskName);
            if (index !== -1) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href="">Task name already exits!</a>'
                });
                return { ...state };
            }
            taskListUpdate.push(action.newTask);
            state.taskList = taskListUpdate;
            return { ...state }
        case CHANGE_THEME:
            // console.log(action)
            let theme = themes.find(theme => theme.id == action.themeId);
            if (theme) {
                state.themeToDoList = { ...theme.theme };
                console.log(theme.theme);
            }
            return { ...state };
        case DONE_TASK:
            let taskListUpdate1 = [...state.taskList];
            let taskIndex = taskListUpdate1.findIndex(task => task.id === action.taskId);
            if (taskIndex !== -1) {
                taskListUpdate1[taskIndex].done = true;
            }
            return { ...state, taskList: taskListUpdate1 };
        case DELETE_TASK:
            return { ...state, taskList: state.taskList.filter(task => task.id !== action.taskId) };
        case EDIT_TASK:
            return { ...state, taskEdit: action.task };
        case UPDATE_TASK:
            state.taskEdit = { ...state.taskEdit, taskName: action.taskName };

            let taskListUpdate2 = [...state.taskList];

            let i = taskListUpdate2.findIndex(task => task.id === state.taskEdit.id);

            if (i !== -1) {
                taskListUpdate2[i] = state.taskEdit;
            }

            return { ...state, taskList: taskListUpdate2, taskEdit: { id: '-1', taskName: '', done: 'false' } }
        default:
            return { ...state }
    }
}
