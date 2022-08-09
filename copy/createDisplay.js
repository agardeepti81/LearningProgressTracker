/***
 * score = {
 * [
 *      {
 *          "subject" : "JAVA",
 *          "progress" :
                    * [ {"name": "topic1", "count": 4, "selected": [{"code": "q1"}, {"code": "q3"}]},
                    *   {"name": "topic 2", "count": 2, "selected": [{"code": "q1"}, {"code": "q3"}]},
                    * ]
        }
    ]   
} 
 */


const text = {
    "user": "Deepti",
    "subject": "JAVA",
    "topics" : 
    [
        {
            "name" : "Topic1",
            "questions" : 
            [
                {"code": "q1" , "text": "Question 1"},
                {"code": "q2" , "text": "Question 2"},
                {"code": "q3" , "text": "Question 3"},
                {"code": "q4" , "text": "Question 4"},
                {"code": "q5" , "text": "Question 5"},
                {"code": "q6" , "text": "Question 6"},
            ] 
        },
        {
            "name" : "Topic2",
            "questions" : 
            [
                {"code": "q1" , "text": "Question 1"},
                {"code": "q2" , "text": "Question 2"},
                {"code": "q3" , "text": "Question 3"},
                {"code": "q4" , "text": "Question 4"},
            ] 
        },
        {
            "name" : "Topic3",
            "questions" : 
            [
                {"code": "q1" , "text": "Question 1"},
                {"code": "q2" , "text": "Question 2"},
                {"code": "q3" , "text": "Question 3"},
                {"code": "q4" , "text": "Question 4"},
                {"code": "q5" , "text": "Question 5"},
                {"code": "q6" , "text": "Question 6"},
                {"code": "q7" , "text": "Question 7"},
                {"code": "q8" , "text": "Question 8"},
            ] 
        }
    ]
}

var score = {};
score.user = text.user;
score.subject = text.subject;
score.progress = [];

var callAPI = (progress)=>{
    // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable
      var raw = JSON.stringify(score);
      //var raw = 'score';
    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    // make API call with parameters and use promises to get response

    fetch("https://obm591xrag.execute-api.us-east-2.amazonaws.com/Progress", requestOptions)
    .then(response => response.text())
    .then(result => alert(JSON.parse(result).body))
    .catch(error => console.log('error', error));
}


function scope_template(tname)
{
    let topicProgress = {};
    topicProgress.name = tname.name;
    topicProgress.count = tname.questions.length;
    topicProgress.selected = [];
    score.progress.push(topicProgress);
    totalq = tname.questions.length;
        return `
        <h2 class="topic-name" id='${tname.name}'>${tname.name}</h2>
        <h4 class="question">
            ${tname.questions ? display_question(tname.name, tname.questions) : ''}   
        </h4>
        `
}

function display_question(topic, qcount)
{
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

function validate(count, topic, c)
{
    let choice= {};
    // identify the elment which has the same topic name
    for(let i=0; i<score.progress.length; i++)
    {
        if(count.checked ==1 && topic == score.progress[i].name)
        {   
                choice.code =c;
                score.progress[i].selected.push(choice);
                document. getElementById(topic+c). disabled = true; 
                let pr =0;
                pr = score.progress[i].selected.length/text.topics[i].questions.length*100;
                display(pr,topic);
        }
    }
    callAPI();
    allQuestions = text.topics.map(getTotal);
    x = sumobject(allQuestions);
    allSelected = score.progress.map(getTotalSel);
    y = sumobject(allSelected);
    let allPer = 0;
    allPer = (y/x)*100;
    display(allPer, "MySubject");
}


function getTotal(tname)
{
    return tname.questions.length;
}

function getTotalSel(sname)
{
    return sname.selected.length;
}

function sumobject(myobj)
{
    var sum = 0;
    for(let i=0; i<myobj.length; i++)
        sum += myobj[i];
    return sum;
}

function display(percentdone,topic)
{
    if(percentdone>0 && percentdone<=25)
    document.getElementById(topic).style.background = "pink";
    else if(percentdone>25 && percentdone<=50)
    document.getElementById(topic).style.background = "yellow";
    else if(percentdone>50 && percentdone<=75)
    document.getElementById(topic).style.background = "orange";
    else if(percentdone>75 && percentdone<=100)
    document.getElementById(topic).style.background = "lightgreen";

}

document.addEventListener("DOMContentLoaded", function(){
    //dom is fully loaded, but maybe waiting on images & css files
    //callAPI();
    document.getElementById("scope").innerHTML += `
    <h1 class="course-name" id="MySubject"> 
    ${text.subject} </h1>
    
    ${text.topics.map(scope_template).join('')} 
    `  
});




