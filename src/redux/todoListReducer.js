import { DarkTheme } from "../components/Themes/DarkTheme";
import { ADD_TASK, CHANGE_THEME, DELETE_TASK, DONE_TASK, UPDATE_TASK } from "./types/ToDoListType";
import Swal from "sweetalert2";
import { themes } from "../components/Themes";



const initialState = {
    themeToDoList: DarkTheme,
    taskList: [
        { id: 'task-1', taskName: 'task 1', done: true },
        { id: 'task-2', taskName: 'task 2', done: false },
        { id: 'task-3', taskName: 'task 3', done: true },
        { id: 'task-4', taskName: 'task 4', done: false }
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
                })
                return { ...state }
            }
            let taskListUpdate = [...state.taskList];
            let index = taskListUpdate.findIndex(task => task.taskName === action.newTask.taskName)
            if (index !== -1) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href="">Task name already exits!</a>'
                })
                return { ...state }
            }
            taskListUpdate.push(action.newTask);
            state.taskList = taskListUpdate;
            return { ...state }
        case CHANGE_THEME:
            // console.log(action)
            let theme = themes.find(theme => theme.id == action.themeId);
            if (theme) {
                state.themeToDoList = { ...theme.theme }
                console.log(theme.theme)
            }
            return { ...state };
        case DONE_TASK:
            let taskListUpdate1 = [...state.taskList]
            let taskIndex = taskListUpdate1.findIndex(task => task.id === action.taskId);
            if (taskIndex !== -1) {
                taskListUpdate1[taskIndex].done = true;
            }
            return { ...state, taskList: taskListUpdate1 }
        case DELETE_TASK:
            return { ...state, taskList: state.taskList.filter(task => task.id !== action.taskId) }
        case UPDATE_TASK:
            const taskListUpdate2 = [...state.taskList];
            let i = taskListUpdate2.findIndex(task => task.id === action.taskId);
            if (i) {
                let check = taskListUpdate2.find(task => task.taskName === action.taskName)
                if (check) {
                    alert('Task name already exits!');
                    return { ...state }
                }
                taskListUpdate2[i].taskName = action.taskName;
            }
            return { ...state, taskList: taskListUpdate2 }
        default:
            return { ...state }
    }
}
