let newCases;
let totalC;
let totalD;
let totalR;
$(document).ready(function(){
    setApiData();
})

function setApiData(){
    var url = "https://api.covid19api.com/summary";
    $.get(url,function(data){
        totalC = data.Global.TotalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        totalD = data.Global.TotalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        totalR = data.Global.TotalRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        newCases = data.Global.NewConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        newRecover = data.Global.NewRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        newDeath = data.Global.NewDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        $("#totalCases").text(totalC);
        $("#totalRecoveredN").text(totalR);
        $("#totalDeathN").text(totalD);
        $("#totalCasesToday").text(newCases);
        $("#totalRecoveredToday").text(newRecover);
        $("#totalDeathToday").text(newDeath)
    })
}

