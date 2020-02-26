import React, { Component } from 'react';
import { Table } from "react-bootstrap";


class ListApiData extends Component {

    deleteAPIdata = () => {
        localStorage.removeItem('smsAPI');
    }

    render() {

        const smsApi =JSON.parse(localStorage.getItem('smsAPI'));

        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>API Name</th>
                        <th>API Key</th>
                        <th>Secret Key</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{smsApi ? smsApi.name : ''}</td>
                        <td>{smsApi ? smsApi.apiKey: ''}</td>
                        <td>{smsApi ? smsApi.secretKey : ''}</td>
                    </tr>


                    </tbody>
                </Table>
            </div>
        )
    }

}

export default ListApiData;