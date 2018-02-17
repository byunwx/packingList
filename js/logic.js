$(document).ready(function(){
var mainContentHtml= ["<div class='col l6'><div class='questionOnebox circle' id='domestic'>Domestic</div></div><div class='col l6'><div class='questionOnebox circle' id='international'>international</div></div>",

"<div id='usaMap'><div class='row'><div class='col l4'><div class='questionTwo' id='usaWest'>West</div></div><div class='col l4'><div class='questionTwo' id='usaMidwest'>Midwest</div></div><div class='col l4'><div class='questionTwo' id='usaNortheast'>Northeast</div></div></div><div class='row'><div class='col l4 offset-l4'><div class='questionTwo' id='usaSouthwest'>Southwest</div></div><div class='col l4'><div class='questionTwo' id='usaSoutheast'>Southeast</div></div></div></div>",

 "<div class='col l6'><img class='questionThreeImg' id='Business' src='https://png.icons8.com/metro/1600/business.png' alt='Business'><p class='questionThreeText'>Business</p></div><div class='col l6'><img class='questionThreeImg' id='Leisure' src='https://cdn3.iconfinder.com/data/icons/abstract-1/512/leisure_A-128.png' alt='Leisure'><p class='questionThreeText'>Leisure</p></div>",

"<div class='section'><div class='row'><div class='col m2'><img class='questionFour' id='Spring' src='http://icons.iconarchive.com/icons/icons8/windows-8/256/Astrology-Spring-icon.png' alt='String'></div><div class='col m2'><p>Spring</p></div></div></div><div class='divider'></div><div class='section'><div class='row'><div class='col m2'><img class ='questionFour' id='Summer' src='http://icons.iconarchive.com/icons/icons8/windows-8/256/Astrology-Summer-icon.png' alt='Summer'></div><div class='col m2'><p>Summer</p></div></div></div><div class='divider'></div><div class='section'><div class='row'><div class='col m2'><img class='questionFour' id='Fall' src='http://icons.iconarchive.com/icons/icons8/windows-8/256/Astrology-Autumn-icon.png' alt='Fall'></div><div class='col m2'><p>Fall</p></div></div></div><div class='divider'></div><div class='section'><div class='row'><div class='col m2'><img class='questionFour' id='Winter' src='http://icons.iconarchive.com/icons/icons8/windows-8/256/Astrology-Winter-icon.png' alt='Winter'></div><div class='col m2'><p>Winter</p></div></div></div>",

"<form class='col s9 questionFive' id='mainContent'><div class='row-center'><div class='input-field col s6 offset-s3'><input id='daysStaying' type='text' class='validate'><label class='active' for='daysStaying'> Enter number of days</label></div></div><button class='btn waves-effect waves-light' id='questionFiveButton' type='submit' name='action'>Submit</button></form>",

"<form class='col s9 questionSix' id='mainContent'><div class='row-center'><div class='input-field col s6 offset-s3'><input id='userBudget' type='text' class='validate'><label class='active' for='budget'> Enter budget</label></div></div><button class='btn waves-effect waves-light' id='questionSixButton' type='submit' name='action'>Submit</button></form>"];

var questionPromptArr=["Will you be traveling domestically or internationally?", "Select the region you will be traveling to.", "Are you traveling on business or for leisure?", "When will you be traveling?", "How many days will you be staying?", "What is your budget for this trip?", "Tell us about yourself."];

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
var userAnswerListArr=[];
var iconArr=["flight", "map", "business_center", "wb_sunny", "schedule", "attach_money", "wc"];
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

var listGenerator = function(){

  for (var i = 0; i < userAnswerListArr.length; i++) {
    var newArr=[];
    // if(input[i]=="inputZer"){
    //   newArr=inputZero;
    // }else if(input[i]=="inputOn"){
    //   newArr=inputOne;
    // }else if(input[i]=="inputTw"){
    //   newArr=inputTwo;
    // }else if(input[i]=="inputThr"){
    //   newArr=inputThree;
    // }else{
    //   console.log("no arr in list Bar")
    // }
    var l=iconArr[i];

    console.log("listGenerator")
    if (userAnswerListArr.length >0) {
      var list="<li id='"+userAnswerListArr[i]+"ListBar'><div class='collapsible-header'><i class='material-icons'>"+l+"</i>"+userAnswerListArr[i]+"</div><div class='collapsible-body'><span>"+newArr+"</span></div></li>";
      if ($("#theList").html()) {
        list= $("#theList").html()+"<li id='"+userAnswerListArr[i]+"ListBar'><div class='collapsible-header'><i class='material-icons'>"+l+"</i>"+userAnswerListArr[i]+"</div><div class='collapsible-body'><span>"+newArr+"</span></div></li>";
        $("#sideContent").empty();
      }
      $("#sideContent").html("<h5>What we know so far</h5><br><ul class='collapsible popout' data-collapsible='accordion' id='theList'>"+list+"</ol>");
    }else{
      console.log("error at ListBar");
    }
  }

}


var changeQuestion = function(index){
  footerMaker();
  $("#sideContent").empty();
  listGenerator();
  console.log(mainContentHtml[index]);
  $("#mainContent").html(mainContentHtml[index]);
  $("#mainContent")
      .velocity("fadeIn", { duration: 1000 });

  questionPromptGenerator(index);
  if (index==0){
    questionOne();
  }else if (index==1){
    questionTwo();
  }else if (index==2){
    questionThree();
  }else if (index==3){
    questionFour();
  }else if (index==4){
    questionFive();
  }else if (index==5){
    questionSix();
  }else{
    console.log("error at ChangeQuestion");
  }
  htmlIndex+=1;
  console.log(userAnswerListArr);
}


var questionPromptGenerator = function (index){
  $("#questionPrompt").text(questionPromptArr[index]);
}

var questionOne = function(){

  $(".questionOnebox").hover(function(){
    $("#"+this.id).velocity(
      { scale: 1.1}, {
        duration: 200
      });
  },function(){
    $("#"+this.id).velocity(
      { scale: 1.0}, {
        duration: 200
      });
  });

  $("#international").on("click", function(){
    userInputDomestic="international";
    $("#mainContent").empty();
    alert("Sorry this option is coming soon!")
    changeQuestion(0);
  });

  $("#domestic").on("click", function(){
    userInputDomestic=this.id;
    console.log(userInputDomestic);
    $("#mainContent").empty();
    userAnswerListArr.push(this.id);
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
    userAnswerListArr.push(this.id);
    changeQuestion(2);
    console.log(userAnswerListArr);
  })
}

var questionThree = function() {
  $("#Business").on("click", function () {
      // function to add items to list
        userInputTravelType="business";
        console.log(userInputTravelType);
        userAnswerListArr.push(this.id);
        changeQuestion(3);
        console.log(userAnswerListArr);
  })
  $("#Leisure").on("click", function () {
      // function to add items to list
        userInputTravelType="leisure";
        console.log(userInputTravelType);
        userAnswerListArr.push(this.id);
        changeQuestion(3);
        console.log(userAnswerListArr);
  })
}

var questionFour = function(){
    $("#Winter").hover(function() {
        $("#winterBackground").css('background-color', 'blue');
    })
    $("#Spring").on("click", function() {
        // function to add items to list
        userInputTravelType="spring";
        console.log(userInputTravelType);
        userAnswerListArr.push(this.id);
        changeQuestion(4);
        console.log(userAnswerListArr);
    })
    $("#Summer").on("click", function() {
        // function to add items to list
        userInputTravelType="summer";
        console.log(userInputTravelType);
        userAnswerListArr.push(this.id);
        changeQuestion(4);
        console.log(userAnswerListArr);
    })
    $("#Fall").on("click", function() {
        // function to add items to list
        userInputTravelType="fall";
        console.log(userInputTravelType);
        userAnswerListArr.push(this.id);
        changeQuestion(4);
        console.log(userAnswerListArr);
    })
    $("#Winter").on("click", function() {
        // function to add items to list
        userInputTravelType="winter";
        console.log(userInputTravelType);
        userAnswerListArr.push(this.id);
        changeQuestion(4);
        console.log(userAnswerListArr);
    })
}

var questionFive = function(){
  $("#questionFiveButton").on("click", function(){
      event.preventDefault();
      var numbers = /^[0-9]+$/;
      var days = $("#daysStaying").val();
      if(days.match(numbers))
      {
      userInputDays = days;
      userAnswerListArr.push(userInputDays);
      $("#mainContent").empty();
      changeQuestion(5);
      return true;
      } else
      {
      alert('Please input numeric characters only');
      return false;
      }
      console.log(days);
  });
}

var questionSix = function(){
  $("#questionSixButton").on("click", function(){
      event.preventDefault();
      var numbers = /^[0-9]+$/;
      var budget = $("#userBudget").val();

      if(budget.match(numbers))
      {
      userInputBudget = budget;
      userAnswerListArr.push(userInputBudget);
      $("#mainContent").empty();
      changeQuestion(6);
      return true;
      } else
      {
      alert('Please input numeric characters only');
      return false;
      }
      console.log(budget);
  })
}
var footerMaker= function (){
  $("#footerContent").empty();
  for (var i = 0; i < iconArr.length; i++) {
    var l= iconArr[i];
    var newSpan=document.createElement("span");

    if (i==htmlIndex) {
      newSpan.innerHTML="<i class='material-icons' id='blackIcon'>"+l+"</i>";
      $("#footerContent").append(newSpan);
    }else{
      newSpan.innerHTML="<i class='material-icons'>"+l+"</i>";
      $("#footerContent").append(newSpan);
    }
  }
}

setTimeout(makeBackBone, 1000);
setTimeout(changeQuestion, 1200, htmlIndex);




});
