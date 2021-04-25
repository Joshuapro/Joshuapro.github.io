let newCases;
let totalC;
let totalD;
let totalR;
$(document).ready(function(){
    var url = "https://api.covid19api.com/summary";
    $.get(url,function(data){
        totalC = data.Global.TotalConfirmed
        totalD = data.Global.TotalDeaths
        totalR = data.Global.TotalRecovered
//        console.log(totalC)
//        console.log(totalD)
//        console.log(totalR)
        
        //As of today
        newCases = data.Global.NewConfirmed
    })
})
