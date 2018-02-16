$(document).ready(function(){
var mainContentHtml= ["<div class='col l6'><div class='questionOnebox circle' id='domestic'>Domestic</div></div><div class='col l6'><div class='questionOnebox circle' id='international'>international</div></div>", "<div id='usaMap'><div class='row'><div class='col l4'><div class='questionTwo' id='usaWest'>West</div></div><div class='col l4'><div class='questionTwo' id='usaMidwest'>Midwest</div></div><div class='col l4'><div class='questionTwo' id='usaNortheast'>Northeast</div></div></div><div class='row'><div class='col l4 offset-l4'><div class='questionTwo' id='usaSouthwest'>Southwest</div></div><div class='col l4'><div class='questionTwo' id='usaSoutheast'>Southeast</div></div></div></div>"];

var htmlIndex=0;
var userInputDomestic
var userInputRegion
var userInputTravelType
var userInputSeason
var userInputDays
var userInputBudget
var userInputGender
var userInputChild
var userInputPets

// var userItem=[];
//
// var addToUserItem= function(arr)={
//   for (var i = 0; i < arr.length; i++) {
//     userItem.push(arr[i]);
//   }
// }
//
// var saveUserItem = function(){
//   localStorage.setItem("userItem", userItem);
// }
var makeBackBone = function (){
  $("body").empty()
  $("body").html("<nav><div class='nav-wrapper'><a href=''#!'' class='brand-logo'>Logo</a><span id='questionPrompt'>center mecenter mecenter mecenter mecenter mecenter mecenter me</span><ul class='right hide-on-med-and-down'><li><a href=''></a></li></ul></div></nav><div class='container' id='contentSectionId'><div class='row'><div class='col l9' id='mainContent'></div><div class='col l3' id='sideContent'></div></div></div><footer class='page-footer'><div class='container'><div class='row'><div class='col l12'><h5 class='white-text' id='footerContent'>Footer Content</h5></div></div></div></footer>");
}
var changeQuestion = function(index){
  $("#mainContent").html(mainContentHtml[index]);
  if (index==0){
    questionOne();
  }else if (index==1){
    questionTwo();
  }else{
    console.log("error at ChangeQuestion");
  }
  htmlIndex+=1;

}

var questionOne = function(){
  $("#international").on("click", function(){
    userInputDomestic="international";
    $("#mainContent").empty();
    alert("Sorry this option is coming soon!")
    changeQuestion(0);
  });

  $("#domestic").on("click", function(){
    userInputDomestic="domestic";
    console.log(userInputDomestic);
    $("#mainContent").empty();
    changeQuestion(1);
  });
}

var questionTwo = function(){
  $("#usaWest").hover(function(){
    $("#usaMap").css('background-image', 'url(./images/map/usaRegion1.png)');
  })
  $("#usaMidwest").hover(function(){
    $("#usaMap").css('background-image', 'url(./images/map/usaRegion2.png)');
  })
  $("#usaNortheast").hover(function(){
    $("#usaMap").css('background-image', 'url(./images/map/usaRegion3.png)');
  })
  $("#usaSouthwest").hover(function(){
    $("#usaMap").css('background-image', 'url(./images/map/usaRegion4.png)');
  })
  $("#usaSoutheast").hover(function(){
    $("#usaMap").css('background-image', 'url(./images/map/usaRegion5.png)');
  })
  $(".questionTwo").on("click", function(){
    userInputRegion=this.id;
    console.log(userInputRegion);
    // changeQuestion(2);
  })
}


setTimeout(makeBackBone, 3000);
setTimeout(changeQuestion, 3500, htmlIndex);




});
