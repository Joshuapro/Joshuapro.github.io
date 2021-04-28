let virusCount = 6;
//home page
$(document).ready(function(){
    //a delay start
    setTimeout("animateDiv()",1500);
    //initializations
    var newpos = makeNewPosition();
    $("#image_2").css({top: newpos[0], left: newpos[1]});
    newpos = makeNewPosition();
    $("#image_3").css({top: newpos[0], left: newpos[1]});
    newpos = makeNewPosition();
    $("#image_4").css({top: newpos[0], left: newpos[1]});
    newpos = makeNewPosition();
    $("#image_5").css({top: newpos[0], left: newpos[1]});
    newpos = makeNewPosition();
    $("#image_6").css({top: newpos[0], left: newpos[1]});
    newpos = makeNewPosition();
    $("#image_7").css({top: newpos[0], left: newpos[1]});
    
    
    //onclick functions for different images and checking if the game is done
    //repetative code
    $('#image_2').on("click", function()
    {
        virusCount -= 1;
        $('#image_2').hide();
        if (!virusCount) deleteV();
    });
    $('#image_3').on("click", function()
    {
        virusCount -= 1;
        $('#image_3').hide();
        if (!virusCount) deleteV();
    });
    $('#image_4').on("click", function()
    {
        virusCount -= 1;
        $('#image_4').hide();
        if (!virusCount) deleteV();
    });
    $('#image_5').on("click", function()
    {
        virusCount -= 1;
        $('#image_5').hide();
        if (!virusCount) deleteV();
    });
    $('#image_6').on("click", function()
    {
        virusCount -= 1;
        $('#image_6').hide();
        if (!virusCount) deleteV();
    });
    $('#image_7').on("click", function()
    {
        $('#image_7').hide();
        virusCount -= 1;
        if (!virusCount) deleteV();
    });
});
//deleteV function called when game is over
function deleteV(){
    $('#face2').fadeIn(1000);
    $('#image_1').hide();
    $('.bubble').fadeIn(5000);
    $('.btn').fadeOut(1000);
}

//generate new position
function makeNewPosition(){
    // Get viewport dimensions
    var height = $(window).height() - 50;
    var width = $(window).width() - 50;
    var nheight = Math.floor(Math.random() * height);
    var nweight = Math.floor(Math.random() * width);
    return [nheight,nweight];
}

function animateDiv(){
    var newpos = makeNewPosition();
    var newpos2 = makeNewPosition();
    var newpos3 = makeNewPosition();
    var newpos4 = makeNewPosition();
    var newpos5 = makeNewPosition();
    var newpos6 = makeNewPosition();
    var newpos7 = makeNewPosition();
    if (virusCount>0){
        $('#image_1').animate({ top: newpos[0], left: newpos[1] }, 1200, function(){
          animateDiv();
        },);
        $('#image_2').animate({ top: newpos2[0], left: newpos2[1] }, 2500,function(){
          animateDiv();
        });
        $('#image_3').animate({ top: newpos3[0], left: newpos3[1] }, 2000,function(){
          animateDiv();
        });
        $('#image_4').animate({ top: newpos4[0], left: newpos4[1] }, 4000,function(){
          animateDiv();
        });
        $('#image_5').animate({ top: newpos5[0], left: newpos5[1] }, 3000,function(){
          animateDiv();
        });
        $('#image_6').animate({ top: newpos6[0], left: newpos6[1] }, 2000,function(){
          animateDiv();
        });
        $('#image_7').animate({ top: newpos7[0], left: newpos7[1] }, 2000,function(){
          animateDiv();
        });
    }
};
