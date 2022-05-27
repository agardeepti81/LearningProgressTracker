import React, { Component } from 'react'

var subject = [];
subject.topics = [];

class FetchData extends Component {

    state = { 
        loading: true,
        count: null,
        subject: null,
     } 

async componentDidMount() {
    const url = "https://rb3d58q373.execute-api.us-east-2.amazonaws.com/getInformation";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ count: data.body.Count,
                    loading: false})
    for(let i=0; i<this.state.count; i++)
    {
       subject[i] =  data.body.Items[i].subject;
       this.setState({ subject: subject,})
    }
    console.log(data.body.Items[0].topics[0].questions[1].code)
    console.log(data)
}
    render() { 
        return (
        <React.Fragment>
            <div>
                {this.state.loading || !this.state.count ?
                <div>loading... </div> : <div>{this.state.count}</div>
                }
                <span>{this.state.subject+" "}</span>
            </div>   
        </React.Fragment>
        )
    }
}
 
export default FetchData;