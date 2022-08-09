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
