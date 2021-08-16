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
import { actAddTask, actChangeTheme, actDeleteTask, actDoneTask, actupdateTask } from '../../redux/actions/TodoListAction';
import { themes } from '../../components/Themes';
import Swal from 'sweetalert2'

class StyledComponent extends Component {

    state = {
        taskName: ''
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
                        <Button onClick={async () => {
                            const { value: text } = await Swal.fire({
                                title: 'Input your task',
                                input: 'text',
                                inputLabel: 'Your new task',
                                inputPlaceholder: 'Input here'
                            })

                            if (text) {
                                this.props.updateTask(task.id, text);
                            }
                        }}>
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

    render() {
        return (
            <ThemeProvider theme={this.props.theme}>
                <Container style={{ width: '50%' }}>
                    <Dropdown
                        onChange={(e) => {
                            let { value } = e.target;
                            this.props.changeTheme(value)
                        }}
                        style={{ margin: '3% 0' }}>

                        {this.renderTheme()}
                    </Dropdown>
                    <Heading3>To do list</Heading3>
                        <TextField
                            onChange={(e) => { this.setState({ taskName: e.target.value }) }}
                            label='Task name'
                            name='taskName'
                        />
                        <Button onClick={() => {
                            let { taskName } = this.state;
                            let newTask = {
                                id: Date.now(),
                                taskName,
                                done: false
                            }
                            this.props.addTask(newTask)
                        }} style={{margin:'0 5%'}}>
                            <AiOutlinePlusCircle />
                            Add task
                        </Button>
                        <Button><BsUpload />Update task</Button>

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
}


const mapStateToProps = state => {
    return {
        theme: state.todoListReducer.themeToDoList,
        taskList: state.todoListReducer.taskList
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
        updateTask: (taskId, taskName) => {
            dispatch(actupdateTask(taskId, taskName))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StyledComponent)
