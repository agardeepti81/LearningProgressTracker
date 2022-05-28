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
        data: null,
        selcted: null
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

    selectSubject(index)
    {
        this.setState({selcted: index});
    }

    renderSelectedSubject() 
    {
        { !this.state.selcted ?  console.log("no selection") : console.log("paint the right panel")
        return <div>completed</div>
        
    }     
    }
    render() { 
        return (
        <React.Fragment>
        <div>
        {this.state.loading || !this.state.data ?
        <div>loading... </div> : this.state.data.map((element) => <div><SubjectCard subject={element.subject} /></div>)
           
        }          
        </div>   
        {this.renderSelectedSubject()}
        </React.Fragment>
        )
    }
}

export default FetchData;