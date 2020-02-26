import React, { Component } from 'react';
import {Button, Form, Modal} from 'react-bootstrap';
import ListApiData from "./ListApiData"

class ApiHandler extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            name: '',
            apiKey: '',
            secretKey: ''
        };
    }

    showAPIForm = () => {

        this.setState({showModal : true});
    }


    handleClose = () => {

        this.setState({showModal : false});
    }

    onInputChange = (event) => {

        if(event.target.id === 'apiName') {
            this.setState({name : event.target.value})
        }
        if(event.target.id === 'apiKey') {
            this.setState({apiKey : event.target.value})
        }
        if(event.target.id === 'secretKey') {
            this.setState({secretKey : event.target.value})
        }

    }

    saveAPIData = () => {

        const smsAPI = {
            name: this.state.name,
            apiKey: this.state.apiKey,
            secretKey: this.state.secretKey,

        }

        localStorage.setItem('smsAPI', JSON.stringify(smsAPI));
        this.setState({showModal : false});

    }


    render() {
        return (
            <div>
                <div>
                    <div><Button onClick={() => this.showAPIForm()}>Add New API Data</Button></div>
                </div>

                <ListApiData/>

                <Modal show={this.state.showModal}  onHide={() => this.handleClose()}>
                    <Modal.Header closeButton>
                        <Modal.Title>Please fill API  details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form>
                            <Form.Group controlId="apiName">
                                <Form.Label>Name : </Form.Label>
                                <Form.Control type="text"  onChange={this.onInputChange} />
                            </Form.Group>


                            <Form.Group controlId="apiKey">
                                <Form.Label>apiKey Key</Form.Label>
                                <Form.Control type="text"  onChange={this.onInputChange} />
                            </Form.Group>


                            <Form.Group controlId="secretKey">
                                <Form.Label>Secret Key</Form.Label>
                                <Form.Control type="text"  onChange={this.onInputChange} />
                            </Form.Group>

                        </Form>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.handleClose()}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => this.saveAPIData()}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        );
    }


}

export default ApiHandler;