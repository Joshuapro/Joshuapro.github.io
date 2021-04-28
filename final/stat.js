let newCases;
let totalC;
let totalD;
let totalR;
let GetDateUpdate;
$(document).ready(function(){
    setApiData();
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
        console.log(datetime);
    });
}


$("#buttonUpdate").click(function(){
    setApiData();
    $("#dateUsers").fadeOut();
    $("#dateUsers").fadeIn();

});
