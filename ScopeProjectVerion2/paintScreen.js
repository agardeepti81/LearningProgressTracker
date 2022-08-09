function paintScreen()
{
    let c, topic, id;
    let i,j,k,z;
    let x = initScore.body.Item.Progress.length;
    //initScore.body.Item.Progress[i].selected.length
    for(i=0; i<x; i++)
    {
        topic = initScore.body.Item.Progress[i].name;
        z = initScore.body.Item.Progress[i].selected.length;
        for(j=0, k=i; j<z; j++)
        {
            c = initScore.body.Item.Progress[k].selected[j].code;
            id = topic+c;
            document. getElementById(id). disabled = true;
            document. getElementById(id). checked = true;
            let pr =0;
            pr = initScore.body.Item.Progress[k].selected.length/initScore.body.Item.Progress[k].count*100;
            display(pr,topic);
        }
    }
    allQuestions = text.topics.map(getTotal);
    x = sumobject(allQuestions);
    allSelected = initScore.body.Item.Progress.map(getTotalSel);
    y = sumobject(allSelected);
    let allPer = 0;
    allPer = (y/x)*100;
    display(allPer, "MySubject");
}
