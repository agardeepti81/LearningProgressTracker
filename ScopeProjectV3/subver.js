/*
const usersubject = {
    "userid":
    {
        "Email" : "deepti7206@gmail.com", 
        "Subject": 
        {
            "JAVA" : 
                ["Version 1", "Version 2"],
            "PYTHON" : 
                ["Version 1", "Version 2"],
            "REACT" : 
                ["Version 1", "Version 2","Version 3"]
        }
        
    }
}*/
var dbs = {};
var allSubjectData = {};
allSubjectData.Items = [];
var score = {};

var callSubjectAPI = ()=>{

    let url = "https://rb3d58q373.execute-api.us-east-2.amazonaws.com/getInformation";
    $.get( url, function( data ) {
    dbs = data;
    changeSubjectState();
    //callAPIget();
    alert( JSON.stringify(dbs) );
    });

}

function changeSubjectState()
{
    allSubjectData.Items = dbs.body.Items;
    document.getElementById("test").innerHTML += `
    <h3 id="chooseSub"> 
    Pick one subject <br></h3>
    ${allSubjectData.Items.map(subject_template).join('')}     
    <button onclick="print_scope(this)">Submit</button>
    `        
}

function subject_template(tname)
{
        var selectedValue
        return `
        <div class="radio">
        <input type="radio" name="selectedsubject" value='${tname.subject}' >${tname.subject}
        </div>
        `
        //onchange="print_scope(this,'${tname.subject}','${tname.topics}')"
        
}

function print_scope(i,sub,topics)
{
    selectedValue = $('input[name=selectedsubject]:checked').val();
    document.getElementById("newelement").innerHTML = `
    <h1 class="course-name" id="MySubject"> 
    ${selectedValue}</h1>
    `   
}

function print()
{
    return `
    <h2 class="topic-name" id='${topics.name}'>${topics.name}</h2>
    <h4 class="question">
        ${topics.questions ? display_question(topics.name, topics.questions) : ''}   
    </h4>
    `
}
function display_question(topic, qcount)
{
    let findElement   
    return `
    <ul class="qlist">
        ${qcount.map(function(qlist){
           
            return ` 
            <li><input type="checkbox" id='${topic+qlist.code}' onclick="validate(this,'${topic}','${qlist.code}')">${qlist.text}</li>
            ` 
        }).join('')}
    </ul>    
    
    `
}

function display_button(topic)
{
 
    topic.map(function(slist){
        return `
        <button class="Version" id="${topic+slist}">${slist}</button>
    `
    })
}


document.addEventListener("DOMContentLoaded", function(){
    callSubjectAPI();   
});