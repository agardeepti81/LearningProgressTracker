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
