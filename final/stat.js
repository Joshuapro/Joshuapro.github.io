let newCases;
let totalC;
let totalD;
let totalR;
let GetDateUpdate;

$(document).ready(function(){
    //Call API
    setApiData();
    //update comments section from firebase
    retrieveComments();
})

function setApiData(){
    var url = "https://api.covid19api.com/summary";
    $.get(url,function(data){
        //display data on screen
        console.log(data);
        //get data from "data" and parse it to a string with commas
        totalC = data.Global.TotalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        totalD = data.Global.TotalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        totalR = data.Global.TotalRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        newCases = data.Global.NewConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        newRecover = data.Global.NewRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        newDeath = data.Global.NewDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        //get date from api
        GetDateUpdate = data.Global.Date
        
        // update
        $("#totalCases").text(totalC);
        $("#totalRecoveredN").text(totalR);
        $("#totalDeathN").text(totalD);
        $("#totalCasesToday").text(newCases);
        $("#totalRecoveredToday").text(newRecover);
        $("#totalDeathToday").text(newDeath);
        
        //get and parsedate
        var date = (data.Global.Date.slice(0,10));
        var time = (data.Global.Date.slice(11,19));
        $("#date").text(date + " " + time + "  (UTC)");
        
        var currentdate = new Date();
        var datetime = currentdate.getFullYear()  + "-" + (currentdate.getMonth()+1) + "-" + currentdate.getDate() + "  "
        + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds() + " (EDT) ";
        $("#dateUser").text(datetime);
    });
}


//get all comments
function retrieveComments(){
    let ref = firebase.database().ref("User");
    ref.on("value", gotData);
}
function gotData(data){
    let info = data.val();
    let keys = Object.keys(info);
    
    //extract every comment
    for (let i = 0; i < keys.length; i++){
        let j = keys[i];
        let name = info[j].name;
        let comment = info[j].comment;
        let date = info[j].date;

        var commentString = "(" + date + ") " + name + ": "+ comment;
        var text = document.createTextNode(commentString);
        var item = document.createElement("li");
        item.append(text);
        item.className = "list-group-item";
        document.getElementById("list").append(item);
    }
}


//update api button
$("#buttonUpdate").click(function(){
    setApiData();
    $("#dateUsers").fadeOut();
    $("#dateUsers").fadeIn();
});

//submit comments button
$("#bS").click(function(){
    //get user input
    let inputname = document.getElementById("inputName").value;
    let inputComment = document.getElementById("comment").value;
    
    //check input
    if (inputname == "" || inputComment == ""){
        alert("Missing fields");
    }else{
        document.getElementById("inputName").value = "";
        document.getElementById("comment").value = "";
        //get date
        var currentdate = new Date();
        var datetime = currentdate.getFullYear()  + "-" + (currentdate.getMonth()+1) + "-" + currentdate.getDate() + "  "
        + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds()
        
        const database = firebase.database();
        //set in database
        database.ref("User/" + inputname + Math.floor(Math.random() * 220)).set({
            name: inputname,
            comment:inputComment,
            date: datetime,
        })
        //refresh page
        location.reload();
    }
    
    
});
