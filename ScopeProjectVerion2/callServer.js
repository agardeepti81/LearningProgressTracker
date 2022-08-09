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

var callAPIget = ()=>{

    let url = "https://obm591xrag.execute-api.us-east-2.amazonaws.com/Progress";
    $.get( url, function( data ) {
    initScore = data;
    paintScreen();
    changeScoreState();
    alert( JSON.stringify(initScore) );
    });
}

function changeScoreState()
{
    score.progress = initScore.body.Item.Progress;
}