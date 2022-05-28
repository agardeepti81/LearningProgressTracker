import React, { Component } from 'react'
import SubjectCard from './SubjectCard';
import { Card, Button, SplitButton } from "react-bootstrap";

var subject = [];
subject.topics = [];

class FetchData extends Component {

    state = { 
        loading: true,
        count: null,
        subject: null,
        data: null
     } 

    showSubject = () => {
        let sum = " ";
        for(let i=0; i<this.state.count; i++)
        {
           let x = this.state.data[i].subject;
           sum += x+'\n';
        } 
        return sum;
    }
    async componentDidMount() {
        const url = "https://rb3d58q373.execute-api.us-east-2.amazonaws.com/getInformation";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ count: data.body.Count,
                        data: data.body.Items,
                        loading: false,})
        console.log(data)
    }
    render() { 
        return (
        <React.Fragment>
        <div>
        {this.state.loading || !this.state.data ?
        <div>loading... </div> : <h4>{this.showSubject()}</h4>
           
        }          
        </div>   
        </React.Fragment>
        )
    }
}

export default FetchData;