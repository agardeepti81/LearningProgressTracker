const text = {
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
score.subject = text.subject;
score.progress = [];
var initScore = {};

document.addEventListener("DOMContentLoaded", function(){

    //dom is fully loaded, but maybe waiting on images & css files
    callAPIget();
    document.getElementById("scope").innerHTML += `
    <h1 class="course-name" id="MySubject"> 
    ${text.subject} </h1>
    ${text.topics.map(scope_template).join('')} 
    `     
});