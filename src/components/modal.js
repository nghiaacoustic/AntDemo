import React, { Component } from 'react';
import { Modal, Button, Table } from 'antd'

import { connect } from 'react-redux'

class ModalComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
        }
    }

    showModal = () => {
        this.setState({
            isModalVisible: true
        })
    };

    handleOk = () => {
        this.setState({
            isModalVisible: false
        })
    };
    handleCancel = () => {
        this.setState({
            isModalVisible: false
        })
    };

    renderTable = () => {
        const columns = [
            {
                title: 'ID',
                dataIndex: 'id',
                key: 'id',
            },
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Quantity',
                dataIndex: 'quantity',
                key: 'quantity',
            },
            {
                title: 'Price',
                dataIndex: 'price',
                key: 'price',
            },
            {
                title: 'Total Price',
                dataIndex: 'totalPrice',
                key: 'totalPrice',
            }
        ]
        return (
            <>
                <Table columns={columns} dataSource={this.props.cart} />
            </>
        )
    }

    render() {
        // console.log(this.props.cart)
        const { isModalVisible } = this.state;
        return (
            <div className='modal'>
                <Button type="primary" onClick={this.showModal}>
                    Cart({})
                </Button>
                <Modal title="Basic Modal" visible={isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
                    {this.renderTable()}
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.GioHangReducer.cart
    }
}

export default connect(mapStateToProps, null)(ModalComponent)