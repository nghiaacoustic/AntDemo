import React, { Component } from 'react'
import { Container } from '../../components/Container/container';
import { ThemeProvider } from 'styled-components';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import { Heading3 } from '../../components/Heading/Heading';
import { TextField, Label, Input } from '../../components/TextField/TextField';
import { AiOutlineCheckSquare, AiOutlineDelete, AiOutlineEdit, AiOutlinePlusCircle } from 'react-icons/ai';
import { BsUpload } from 'react-icons/bs'
import { Button } from '../../components/Button/Button';
import { Table, Tbody, Thead, Tr, Td, Th } from '../../components/Table/Table';
import { connect } from 'react-redux'
import { actAddTask, actChangeTheme, actDeleteTask, actDoneTask, actEditTask, actUpdateTask, actupdateTask } from '../../redux/actions/TodoListAction';
import { themes } from '../../components/Themes';
import Swal from 'sweetalert2'

class StyledComponent extends Component {

    state = {
        taskName: '',
        disabled: true,
    }

    renderTaskTodo = () => {
        const { taskList } = this.props;
        return taskList.filter(task => !task.done).map((task, index) => {
            return (
                <Tr key={index}>
                    <Th style={{ verticalAlign: 'middle' }}>{task.taskName}</Th>
                    <Th style={{ textAlign: 'right' }}>
                        <Button onClick={() => { this.props.doneTask(task.id) }}>
                            <AiOutlineCheckSquare />
                        </Button>
                        <Button
                            onClick={() => this.setState({
                                disabled: false
                            }, () => this.props.editTask(task))}>
                            <AiOutlineEdit />
                        </Button>
                        <Button onClick={() => { this.props.deleteTask(task.id) }}>
                            <AiOutlineDelete />
                        </Button>
                    </Th>
                </Tr>
            )
        })
    }
    renderTaskDone = () => {
        return this.props.taskList.filter(task => task.done).map((task, index) => {
            return (
                <Tr key={index}>
                    <Th style={{ verticalAlign: 'middle' }}>{task.taskName}</Th>
                    <Th style={{ textAlign: 'right' }}>
                        <Button onClick={() => { this.props.deleteTask(task.id) }}>
                            <AiOutlineDelete />
                        </Button>
                    </Th>
                </Tr>
            )
        })
    }

    renderTheme = () => {
        let themess = [...themes]
        return themess.map((item, index) => {
            return <option value={item.id} key={index}>{item.name}</option>
        })
    }

    renderBtnAddTask = () => {
        let { taskName } = this.state;
        return <Button
            onClick={() => {
                let newTask = {
                    id: Date.now(),
                    taskName,
                    done: false
                }
                this.props.addTask(newTask)
            }}
            style={{ margin: '0 5%' }}>
            <AiOutlinePlusCircle />
            Add task
        </Button>
    }

    renderBtnUpdateTask = () => {
        const { disabled } = this.state;
        return disabled === true
            ? <Button disabled>
                <BsUpload />
                Update task
            </Button>
            :
            <Button
                onClick={() => {
                    let { taskName } = this.state;
                    this.setState({
                        disabled: true,
                        taskName: ''
                    },
                        () => this.props.updateTask(taskName))
                }}>
                <BsUpload />
                Update task
            </Button>

    }

    // componentWillReceiveProps(newProps) {
    //     this.setState({
    //         taskName: newProps.taskEdit.taskName
    //     })
    // }

    // static getDerivedStateFromProps(newProps, currentState) {
    //     let newState = { ...currentState, taskName: newProps.taskEdit.taskName };
    //     return newState;
    // }

    render() {
        return (
            <ThemeProvider theme={this.props.theme}>
                <Container style={{ width: '50%' }}>
                    <Dropdown
                        onChange={(e) => {
                            let { value } = e.target;
                            this.props.changeTheme(value);
                        }}
                        style={{ margin: '3% 0' }}>

                        {this.renderTheme()}
                    </Dropdown>
                    <Heading3>To do list</Heading3>
                    <TextField
                        onChange={(e) => { this.setState({ taskName: e.target.value }) }}
                        label='Task name'
                        name='taskName'
                        value={this.state.taskName}
                    />

                    {this.renderBtnAddTask()}

                    {this.renderBtnUpdateTask()}

                    <hr />

                    <Heading3>Task To do</Heading3>
                    <Table>
                        <Thead>
                            {this.renderTaskTodo()}
                        </Thead>
                    </Table>
                    <hr />
                    <Heading3>Task Done</Heading3>
                    <Table>
                        <Thead>
                            {this.renderTaskDone()}
                        </Thead>
                    </Table>
                </Container>
            </ThemeProvider>
        )
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.taskEdit.id !== this.props.taskEdit.id) {
            this.setState({ taskName: this.props.taskEdit.taskName })
        }
    }

}


const mapStateToProps = state => {
    return {
        theme: state.todoListReducer.themeToDoList,
        taskList: state.todoListReducer.taskList,
        taskEdit: state.todoListReducer.taskEdit
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (newTask) => {
            dispatch(actAddTask(newTask))
        },
        changeTheme: (themeId) => {
            dispatch(actChangeTheme(themeId))
        },
        doneTask: (taskId) => {
            dispatch(actDoneTask(taskId))
        },
        deleteTask: (taskId) => {
            dispatch(actDeleteTask(taskId))
        },
        editTask: (task) => {
            dispatch(actEditTask(task))
        },
        updateTask: (taskName) => {
            dispatch(actUpdateTask(taskName))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StyledComponent)
