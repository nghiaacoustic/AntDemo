import React, { Component } from 'react';
import { Modal, Button, Table, Space } from 'antd'

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
                // render: () => (
                //     <Space size="small">
                //         <Button>+</Button>
                //         {this.props.cart.quantity}
                //         <Button>-</Button>
                //     </Space>
                // ),
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
            },
            {
                title: 'Action',
                key: 'action',
                render: () => (
                    <Space size="middle">
                        <a onClick={() => this.props.deleteCartItem()}>Delete</a>
                        <Button onClick={()=>this.props.changeQuantity(true)}>+</Button>
                        <Button onClick={() => this.props.changeQuantity(false)}>-</Button>
                    </Space>
                ),
            },

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
                    Cart({ })
                </Button>
                <Modal width={800} title="Cart Items" visible={isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
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

const mapDispatchToProps = dispatch => {
    return {
        deleteCartItem: () => {
            dispatch({
                type: 'DELETE_CART',
            })
        },
        changeQuantity: (status) => {
            dispatch({
                type: 'CHANGE_QUANTITY',
                status
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalComponent)