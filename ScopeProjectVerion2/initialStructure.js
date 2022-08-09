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
