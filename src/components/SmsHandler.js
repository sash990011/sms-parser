import React, { Component } from 'react';
import {Button, Modal, Form} from "react-bootstrap";
import PhoneInput from 'react-phone-input-2'
import ListSms from "./ListSms";
import { generateHeaders } from "../utils/SMSGlobalAPI"

import 'react-phone-input-2/lib/style.css'
import {getHashcode} from "../utils/helper";

const messageLength = process.env.REACT_APP_TEXT_LENGTH ? process.env.REACT_APP_TEXT_LENGTH : 140;

class SmsHandler extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            senderNumber: '',
            receiverNumber: '',
            message:'',
            showMultipleWaring: false
        };
    }

    showSmsForm () {
        this.setState({showModal : true});
    }

    handleClose (){
        this.setState({showModal : false});
    }

    onMessageInputChange = (event) => {

        this.setState({message  : event.target.value})

        if(event.target.value.length > messageLength) {
            this.setState({showMultipleWaring : true});
        } else {
            this.setState({showMultipleWaring : false});
        }

       console.log(event.target.value, event.target.value.length)
    }

    handleSubmit = () => {

        const auth = generateHeaders();
        const data = {
            "message" : JSON.stringify(this.state.message),
            "origin" : '0410947507',
            "destination" : "0424537911"
        };

        fetch('https://api.smsglobal.com/v2/sms/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'MAC '+auth


            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    this.setState({
                        error: false,
                        submitting: false,
                        message: {
                            to: '',
                            body: ''
                        }
                    });
                } else {
                    this.setState({
                        error: true,
                        submitting: false
                    });
                }
            });





        // fetch('/api/messages', {
        //     method: 'POST',
        //     headers: {
        //         'Authorization' :  `MAC ${generateHeaders()}`
        //     },
        //     body: JSON.stringify(this.state.message)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         if (data.success) {
        //             this.setState({
        //                 error: false,
        //                 submitting: false,
        //                 message: {
        //                     to: '',
        //                     body: ''
        //                 }
        //             });
        //         } else {
        //             this.setState({
        //                 error: true,
        //                 submitting: false
        //             });
        //         }
        //     });
    }



    render() {
        return (
            <div>
                <div><Button onClick={() => this.showSmsForm()}>Send SMS</Button></div>
                <div>
                    <ListSms/>
                </div>

                <Modal show={this.state.showModal}  onHide={() => this.handleClose()}>
                    <Modal.Header closeButton>
                        <Modal.Title>Please fill details to send SMS</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form>
                            <Form.Group controlId="fromNumber">
                                <Form.Label>From : </Form.Label>
                                <PhoneInput
                                    country={'au'}
                                    value={this.state.senderNumber}
                                    onChange={senderNumber => this.setState({ senderNumber })}
                                />
                            </Form.Group>

                            <Form.Group controlId="toNumber">
                                <Form.Label>To : </Form.Label>
                                <PhoneInput
                                    country={'au'}
                                    value={this.state.receiverNumber}
                                    onChange={receiverNumber => this.setState({ receiverNumber })}
                                />
                            </Form.Group>


                            <Form.Group controlId="message">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows="3" onChange={this.onMessageInputChange} value={this.state.message} />

                                <Form.Text className="text-muted">
                                    {this.state.showMultipleWaring ? 'Your message will send in multiple texts' : ''}
                                </Form.Text>
                            </Form.Group>

                        </Form>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.handleClose()}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => this.handleSubmit()}>
                            Send
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }


}

export default SmsHandler;