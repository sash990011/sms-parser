import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import SmsHandler from './SmsHandler'
import ApiHandler from "./ApiHandler";
import Tabs from "react-responsive-tabs";
import 'react-responsive-tabs/styles.css';


class Dashboard extends Component{

    render() {


        const tabItems = [
            {
                key :1,
                title : 'API Details',
                getContent : () => <ApiHandler/>,
            },
            {
                key :2,
                title : 'SMS',
                getContent : () => <SmsHandler/>,
            },

        ]

        return (
            <div>

                <div>
                   <h1> Welcome to the SMS handler</h1>
                </div>

                <div>
                    <Tabs items={tabItems}

                    />

                </div>


                <div>

                </div>



            </div>
        )
    }
}

export default Dashboard;