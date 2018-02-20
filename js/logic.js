$(document).ready(function(){
var mainContentHtml= ["<div class='col l6'><div class='questionOnebox circle' id='domestic'>Domestic</div></div><div class='col l6'><div class='questionOnebox circle' id='international'>international</div></div>",

"<div id='usaMap'><div class='row'><div class='col l4'><div class='questionTwo' id='usaWest'>West</div></div><div class='col l4'><div class='questionTwo' id='usaMidwest'>Midwest</div></div><div class='col l4'><div class='questionTwo' id='usaNortheast'>Northeast</div></div></div><div class='row'><div class='col l4 offset-l4'><div class='questionTwo' id='usaSouthwest'>Southwest</div></div><div class='col l4'><div class='questionTwo' id='usaSoutheast'>Southeast</div></div></div></div>",

"<div class='col l6'><img class='questionThreeImg' id='Business' src='https://png.icons8.com/metro/1600/business.png' alt='Business'><p class='questionThreeText'>Business</p></div><div class='col l6'><img class='questionThreeImg' id='Leisure' src='https://cdn3.iconfinder.com/data/icons/abstract-1/512/leisure_A-128.png' alt='Leisure'><p class='questionThreeText'>Leisure</p></div>",

"<div class='section'><div class='row'><div class='col m2'><img class='questionFour' id='Spring' src='https://media.giphy.com/media/l4hLSoxh3bZOvrn0c/giphy.gif' alt='String'></div><div class='col m2'><p>Spring</p></div></div></div><div class='divider'></div><div class='section'><div class='row'><div class='col m2'><img class ='questionFour' id='Summer' src='https://media.giphy.com/media/12G7BxUHSMM2TC/giphy.gif' alt='Summer'></div><div class='col m2'><p>Summer</p></div></div></div><div class='divider'></div><div class='section'><div class='row'><div class='col m2'><img class='questionFour' id='Fall' src='https://media.giphy.com/media/UxTZDNv0Zej4s/giphy.gif' alt='Fall'></div><div class='col m2'><p>Fall</p></div></div></div><div class='divider'></div><div class='section' id='winterBackground'><div class='row'><div class='col m2'><img class='questionFour' id='Winter' src='https://media.giphy.com/media/OWxrxRHY6afRu/giphy.gif' alt='Winter'></div><div class='col m2'><p>Winter</p></div></div></div>",

"<form class='col s9 questionFive' id='mainContent'><div class='row-center'><div class='input-field col s6 offset-s3'><input id='daysStaying' type='text' class='validate'><label class='active' for='daysStaying'> Enter number of days</label></div></div><button class='btn waves-effect waves-light' id='questionFiveButton' type='submit' name='action'>Submit</button></form>",

"<form class='col s9 questionSix' id='mainContent'><div class='row-center'><div class='input-field col s6 offset-s3'><input id='userBudget' type='text' class='validate'><label class='active' for='budget'> Enter budget</label></div></div><button class='btn waves-effect waves-light' id='questionSixButton' type='submit' name='action'>Submit</button></form>",

"<div class='col l6'><img class='questionThreeImg' id='male' src='./images/man.png' height={{500px}} width={{500px}} alt='male'><p class='questionThreeText'>Male</p></div><div class='col l6'><img class='questionThreeImg' id='female'  src='./images/woman.png' height={{500px}} width={{500px}} alt='Female'><p class='questionThreeText'>Female</p></div>",

"<div class='col l6'><img class='questionThreeImg' id='kids' src='./images/kids.png' height={{500px}} width={{500px}} alt='kids'><p class='questionThreeText'>Kids</p></div><div class='col l6'><img class='questionThreeImg' id='no-kids'  src='./images/no-kids.png' height={{500px}} width={{500px}} alt='no-kids'><p class='questionThreeText'>No-Kids</p></div>",

"<div class='col l6'><img class='questionThreeImg' id='pets' src='./images/pets.png' height={{500px}} width={{500px}} alt='pets'><p class='questionThreeText'>Pets</p></div><div class='col l6'><img class='questionThreeImg' id='no-pets'  src='./images/no-pets.png' height={{500px}} width={{500px}} alt='no-pets'><p class='questionThreeText'>No-Pets</p></div>",

"<div class='row'><div class='col m12' id='outputMainContent'></div><div class='row center'><h2 class='header col s12' id='regionName'></h2></div></div></div><div class='row center-align' id='weatherType'></div><div class='row center-align'><div class='col m4'><div id='ouputTravelType'></div></div><div class='col m4'><div id='outputSeason'></div></div><div class='col m4'><div class='outputBudget'></div></div></div><div class='divider'></div><div class='row center'><div class='col s4' id='userOutputTip1Photo1'></div><div class='col s8 left-align' id='userOutputTip1'></div></div><div class='row center'><div class='col s4' id='userOutputTip2Photo2'></div><div class='col s8 left-align' id='userOutputTip2'></div></div><div class='row center'><div class='col s4' id='userOutputTip3Photo3'></div><div class='col s8 left-align' id='userOutputTip3'></div></div><div class='divider'></div><ul id='theListOutPut'></ul>"];

var questionPromptArr=["Will you be traveling domestically or internationally?", "Select the region you will be traveling to.", "Are you traveling on business or for leisure?", "When will you be traveling?", "How many days will you be staying?", "What is your budget for this trip? (enter dollar amount)", "Tell us about yourself.", "Do you have Kids or not?", "Do you keep pets or not?"];

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
var iconArr=["flight", "map", "business_center", "wb_sunny", "schedule", "attach_money", "wc", "child_friendly", "pets"];
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

var basicNeeds=["Toothbrush", "Toothpaste", "Chargers", "Travel app", "emergency contact info", "Rental car info", "Hotel infomation", "Cash", "Credit card", "ID", "Sleepwear", "Undergarments"];
var domesticItem=["Passport", "Travel pillow"];
var usaWestItem=["Sunglasses", "Coffee maker"];
var usaMidwestItem=["Cardigan", "Map"];
var usaNortheastItem=["Cardigan"];
var usaSouthwestItem=["Sunglasses"];
var usaSoutheastItem=["Sunglasses", "Mini-fan", "Bug spray"];
var leisureItem=["Camera", "Notebook"];
var businessItem=["Dress shoes", "Suits/suitdresses", "Dress shirts", "Belt", "Wristwatch"];
var springItem=["Light Clothes", "Medication", "Umbrella"];
var summerItem=["Sunglasses", "Cap", "Sunscreen", "T-shirts", "Bathing suit", "Flip flops/sandals"];
var fallItem=["Sweater", "Light Jacket", "Boots", "Umbrella", "Medication", "Beanie"];
var winterItem=["Coat", "Sweater", "Scarf", "Gloves", "Warm Hat", "Snow Boots", "Chapstick", "Cold Medicine"];
var maleItem=["Tie", "Shaving cream", "Razor"];
var femaleItem=["Makeup", "Skincare", "Toiletries"];
var kidsItem=["Children's clothes", "Toys", "Coloring books", "Snacks"];
var petsItem=["Leash", "Pet food", "Toys", "Pet carrier"];
var userItem=[];

var choice1;
var choice2;
var choice3;
var choice4;
var choice7;
var choice8;
var choice9;

var combineUserItem = function(){
  addToUserItem(basicNeeds);
  addToUserItem(choice1);
  addToUserItem(choice2);
  addToUserItem(choice3);
  addToUserItem(choice4);
  addToUserItem(choice7);
  if (userInputTravelType=="leisure") {
    addToUserItem(choice8);
    addToUserItem(choice9);
  }else{
    console.log("business trip");
  }

  console.log(userItem);
}

var addToUserItem= function(arr){
  for (var i = 0; i < arr.length; i++) {
    userItem.push(arr[i]);
  }
  saveUserItem();
}

var saveUserItem = function(){
  localStorage.setItem("userItem", userItem);
}

var makeBackBone = function (){
  $("body").empty()
  $("body").html("<nav><div class='nav-wrapper nav-new-color'><a href=''#!'' class='brand-logo'></a><span id='questionPrompt'>loading</span><ul class='right hide-on-med-and-down'><li><a href=''></a></li></ul></div></nav><div class='container' id='contentSectionId'><div class='row'><div class='col l9' id='mainContent'></div><div class='col l3' id='sideContent'></div></div></div><footer class='page-footer'><div class='container'><div class='row'><div class='col l12'><h5 class='white-text' id='footerContent'>loading</h5></div></div></div></footer>");
}

var goBackBtn = function (){
  $("li").on("click", function(){
    if (this.id == "0ListBar"){
      changeQuestion(0);
    } else if (this. id == "1ListBar"){
      changeQuestion(1);
    }else if (this.id == "2ListBar"){
      changeQuestion(2);
    }
    else if(this.id== "3ListBar"){
      changeQuestion(3);
    }
    else if(this.id== "4ListBar"){
      changeQuestion(4);
    }
    else if(this.id== "5ListBar"){
      changeQuestion(5);
    }else if(this.id== "6ListBar"){
      changeQuestion(6);
    }
    else if(this.id== "7ListBar"){
      changeQuestion(7);
    }else if(this.id== "8ListBar"){
      changeQuestion(8);
    }else{
      return;
    }
  })
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
      var list="<li id='"+i+"ListBar'><div class='collapsible-header'><i class='material-icons'>"+l+"</i>"+userAnswerListArr[i]+"</div><div class='collapsible-body'><span>"+newArr+"</span></div></li>";

      if ($("#theList").html()) {
        list= $("#theList").html()+"<li id='"+i+"ListBar'><div class='collapsible-header'><i class='material-icons'>"+l+"</i>"+userAnswerListArr[i]+"</div><div class='collapsible-body'><span>"+newArr+"</span></div></li>";
        $("#sideContent").empty();
      }
      $("#sideContent").html("<h5>What we know so far</h5><br><ul class='collapsible popout' data-collapsible='accordion' id='theList'>"+list+"</ol>");

    }else{
      console.log("error at ListBar");
    }
  }

}

var changeQuestion = function(index){
  localStorage.setItem("userAnswerListArr", JSON.stringify(userAnswerListArr));
  userItem=[];
  $("#sideContent").empty();
  listGenerator();
  $("#mainContent").html(mainContentHtml[index]);
  $("#mainContent")
      .velocity("fadeIn", { duration: 1000 });
  goBackBtn();
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
  }else if (index==6){
    questionSeven();
  }else if (index==7){
    questionEight();
  }else if (index==8){
    questionNine();
  }else if (index==9){
    userOutput();
  }else{
    console.log("error at ChangeQuestion");
  }
  htmlIndex=index;
  footerMaker();
  console.log(userAnswerListArr);
}
var listOutput = function() {
  for (var i = 0; i < userItem.length; i++) {
      $("#theListOutPut").append("<li>" + userItem[i].toUpperCase() + "</li>");
  }
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
    userAnswerListArr.splice(0, 1, this.id);

    localStorage.setItem("userInputDomestic", userInputDomestic);
    changeQuestion(1);
  });
}

var questionTwo = function(){
  var region;
  $("#usaWest").hover(function(){
    $("#usaMap").css('background-image', 'url(./images/map/usaRegion1.png)');
    region = usaWestItem;
  })
  $("#usaMidwest").hover(function(){
    $("#usaMap").css('background-image', 'url(./images/map/usaRegion2.png)');
    region = usaMidwestItem;
  })
  $("#usaNortheast").hover(function(){
    $("#usaMap").css('background-image', 'url(./images/map/usaRegion3.png)');
    region = usaNortheastItem;
  })
  $("#usaSouthwest").hover(function(){
    $("#usaMap").css('background-image', 'url(./images/map/usaRegion4.png)');
    region = usaSouthwestItem;
  })
  $("#usaSoutheast").hover(function(){
    $("#usaMap").css('background-image', 'url(./images/map/usaRegion5.png)');
    region = usaSoutheastItem;
  })
  $(".questionTwo").on("click", function(){
    userInputRegion=this.id;
    console.log(userInputRegion);
    userAnswerListArr.splice(1, 1, this.id);
    console.log(userAnswerListArr);
    choice2=region;
    localStorage.setItem("userInputRegion", userInputRegion);
    changeQuestion(2);
  })
}

var questionThree = function() {
  $("#Business").on("click", function () {
      // function to add items to list
        userInputTravelType="business";
        console.log(userInputTravelType);
        userAnswerListArr.splice(2, 1, this.id);
        userAnswerListArr.splice(7, 2);
        changeQuestion(3);
        console.log(userAnswerListArr);
        choice3=businessItem;
        localStorage.setItem("userInputTravelType", userInputTravelType);
  })
  $("#Leisure").on("click", function () {
      // function to add items to list
        userInputTravelType="leisure";
        console.log(userInputTravelType);
        userAnswerListArr.splice(2, 1, this.id);
        changeQuestion(3);
        console.log(userAnswerListArr);
        choice3=leisureItem;
        localStorage.setItem("userInputTravelType", userInputTravelType);
  })
}

var questionFour = function(){
    $("#Spring").hover(
      function() {$("body").css({'background-image': 'url(https://media.giphy.com/media/l4hLSoxh3bZOvrn0c/giphy.gif)','background-size': 'cover','background-repeat': 'no-repeat'});},
      function() {$("body").css('background-image', '');
    })
    $("#Summer").hover(
      function() {$("body").css({'background-image': 'url(https://media.giphy.com/media/12G7BxUHSMM2TC/giphy.gif)','background-size': 'cover','background-repeat': 'no-repeat'});},
      function() {$("body").css('background-image', '');
    })
    $("#Fall").hover(
      function() {$("body").css({'background-image': 'url(https://media.giphy.com/media/UxTZDNv0Zej4s/giphy.gif)','background-size': 'cover','background-repeat': 'no-repeat'});},
      function() {$("body").css('background-image', '');
    })
    $("#Winter").hover(
      function() {$("body").css({'background-image': 'url(https://media.giphy.com/media/OWxrxRHY6afRu/giphy.gif)','background-size': 'cover','background-repeat': 'no-repeat'});},
      function() {$("body").css('background-image', '');
    })
    $("#Spring").on("click", function() {
        // function to add items to list
        userInputSeason="spring";

        userAnswerListArr.splice(3, 1, this.id);

        console.log(userInputSeason);

        changeQuestion(4);
        console.log(userAnswerListArr);
        $("body").css('background-image', '');
        choice4=springItem;
        localStorage.setItem("userInputSeason", userInputSeason);
        changeQuestion(4);
    })
    $("#Summer").on("click", function() {
        // function to add items to list
        userInputSeason="summer";

        userAnswerListArr.splice(3, 1, this.id);

        console.log(userInputSeason);

        changeQuestion(4);
        console.log(userAnswerListArr);
        $("body").css('background-image', '');
        choice4=summerItem;
        localStorage.setItem("userInputSeason", userInputSeason);
        changeQuestion(4);
    })
    $("#Fall").on("click", function() {
        // function to add items to list
        userInputSeason="fall";

        userAnswerListArr.splice(3, 1, this.id);

        console.log(userInputSeason);
        changeQuestion(4);
        console.log(userAnswerListArr);
        $("body").css('background-image', '');
        choice4=fallItem;
        localStorage.setItem("userInputSeason", userInputSeason);
        changeQuestion(4);
    })
    $("#Winter").on("click", function() {
        // function to add items to list
        userInputSeason="winter";

        userAnswerListArr.splice(3, 1, this.id);
        console.log(userInputSeason);

        changeQuestion(4);
        console.log(userAnswerListArr);
        $("body").css('background-image', '');
        choice4=winterItem;
        localStorage.setItem("userInputSeason", userInputSeason);
        changeQuestion(4);
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
      userAnswerListArr.splice(4, 1, userInputDays);
      localStorage.setItem("userInputDays", userInputDays);
      $("#mainContent").empty();
      changeQuestion(5);
      return true;
      } else{
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
      localStorage.setItem("userInputBudget", userInputBudget);
      userAnswerListArr.splice(5, 1, userInputBudget);
      $("#mainContent").empty();
      changeQuestion(6);
      return true;
      } else{
      alert('Please input numeric characters only');
      return false;
      }
      console.log(budget);
  })
}

var questionSeven = function() {
  $("#male").on("click", function () {
      // function to add items to list
        userInputGender="male";
        console.log(userInputGender);
        userAnswerListArr.splice(6, 1, this.id);
        choice7=maleItem;
        localStorage.setItem("userInputGender", userInputGender);
        if (userInputTravelType=="business") {
          userInputChild="";
          userInputPets="";
          changeQuestion(9);
        }else if (userInputTravelType=="leisure") {
          changeQuestion(7);
        }else{
          console.log("error on question seven");
        }

  })
  $("#female").on("click", function () {
      // function to add items to list
        userInputGender="female";
        console.log(userInputGender);
        userAnswerListArr.splice(6, 1, this.id);
        choice7=femaleItem;
        localStorage.setItem("userInputGender", userInputGender);
        if (userInputTravelType=="business") {
          userInputChild="";
          userInputPets="";
          changeQuestion(9);
        }else if (userInputTravelType=="leisure") {
          changeQuestion(7);
        }else{
          console.log("error on question seven");
        }
  })
}

var questionEight = function() {
  $("#kids").on("click", function () {
      // function to add items to list
        userInputChild="kids";
        console.log(userInputChild);
        userAnswerListArr.splice(7, 1, this.id);
        choice8=kidsItem;
        localStorage.setItem("userInputChild", userInputChild);
        changeQuestion(8);
        console.log(userAnswerListArr);
  })
  $("#no-kids").on("click", function () {
      // function to add items to list
        userInputChild="no-kids";
        console.log(userInputChild);
        userAnswerListArr.splice(7, 1, this.id);
        choice8=[];
        localStorage.setItem("userInputChild", userInputChild);
        changeQuestion(8);
        console.log(userAnswerListArr);
  })
}

var questionNine = function() {
  $("#pets").on("click", function () {
      // function to add items to list
        userInputPets="pets";
        console.log(userInputPets);
        userAnswerListArr.splice(8, 1,this.id);
        choice9=petsItem;
        localStorage.clear();
        changeQuestion(9);
        console.log(userAnswerListArr);
        combineUserItem();
  })
  $("#no-pets").on("click", function () {
      // function to add items to list
        userInputPets="no-pets";
        console.log(userInputPets);
        userAnswerListArr.splice(8, 1,this.id);
        choice9=[];
        localStorage.clear();
        changeQuestion(9);
        console.log(userAnswerListArr);
        combineUserItem();
  })
}

//USER OUTPUT FUNCTION
var userOutput = function(){
  localStorage.clear();
  choice1=domesticItem;
  $("#questionPrompt").empty();
  $("#questionPrompt").text("Here's what we have for you");
  // $("#mainContent").velocity("scroll", { container: $("#container") }); this is wrong u have to fix it
  if (userInputRegion=="usaSoutheast") {
    $("#regionName").prepend("<h2>Southeast</h2>");
    choice2=usaSoutheastItem;
  }else
  if (userInputRegion=="usaSouthwest") {
    $("#regionName").prepend("<h2>SouthWest</h2>");
    choice2=usaSouthwestItem;
  }else
  if (userInputRegion=="usaMidwest") {
    $("#regionName").prepend("<h2>Midwest</h2>");
    choice2=usaMidwestItem;
  }else
  if (userInputRegion=="usaWest") {
    $("#regionName").prepend("<h2>West</h2>");
    choice2=usaWestItem;
  }else
  if (userInputRegion=="usaNortheast") {
    $("#regionName").prepend("<h2>Northeast</h2>");
    choice2=usaNortheastItem;
  }else{
    console.log("error on userOutput title")
  }

  if (userInputTravelType =='business'){
      $('#ouputTravelType').prepend("<img src='./images/output-business.png'/>");
      choice3= businessItem;
  } else {
      $("#ouputTravelType").prepend("<img src='./images/output-leisure.png'/>");
      choice3=leisureItem;
    }
    if (userInputGender=="male") {
      choice7=maleItem;
    }else if (userInputGender=="female"){
      choice7=femaleItem;
    }
    if(userInputChild=="kids"){
      choice8=kidsItem;
    }
    if(userInputPets=="pets"){
      choice9=petsItem;
    }
    if (userInputSeason=="spring") {
    $("#outputSeason").prepend("<img src='images/output-spring.png'/>");
    choice4=springItem;
    }else
    if (userInputSeason=="summer") {
    $("#outputSeason").prepend("<img src='images/output-summer.png'/>");
    choice4=summerItem;
    }else
    if (userInputSeason=="fall") {
    $("#outputSeason").prepend("<img src='images/output-fall.png'/>");
    choice4=fallItem;
    }else
    if (userInputSeason=="winter") {
    $("#outputSeason").prepend("<img src='images/output-winter.png'/>");
    choice4=winterItem;
    }


  var budgetOutPutSection = function (){
  var budgetPerDay= (Math.round(100*userInputBudget/userInputDays)/100)+" per day";
  var titlebudget = "<h3>Budget</h3>";
  var totalbudget = $("<p></p>").text("Total: $"+userInputBudget);
  var budgetperdaysection = $("<p></p>").text("$"+budgetPerDay);
  $(".outputBudget").append(titlebudget, totalbudget, budgetperdaysection);
  }

  var tipsOutputSection = function(tip1, tip2, tip3) {
  $("#userOutputTip1Photo1").html('<i class="large material-icons">lightbulb_outline</i>');
  $("#userOutputTip2Photo2").html('<i class="large material-icons">lightbulb_outline</i>');
  $("#userOutputTip3Photo3").html('<i class="large material-icons">lightbulb_outline</i>');
  if (userInputRegion=="usaSoutheast"){
    $("#userOutputTip1").html("<p>The Southeast region of the United States is home to about 2 million wild boars, also called feral pigs</p>");
    $("#userOutputTip2").html("<p>Swamps cover one-fifth of Florida. Here you can see manatees, alligators and the Florida panther.</p>");
    $("#userOutputTip3").html("<p>Washington DC falls into the southeast region </p>");
  }else
  if (userInputRegion=="usaSouthwest"){
    $("#userOutputTip1").html("<p>The Southwest Region has only 4 States and the smallest region,but has the largest states, they four states are Arizona,New Mexico,Oklahoma,and Texas.</p>");
    $("#userOutputTip2").html("<p>Over 26 Native American tribes inhabited the southwest region.</p>");
    $("#userOutputTip3").html("<p>The climate in this region of the US is basically semi-arid to arid; however areas in this region with a high elevation can get very cold and receive significant snowfall.</p>");
  }else
  if (userInputRegion=="usaMidwest"){
    $("#userOutputTip1").html("<p>The area around Kansas, Missouri, Nebraska and Oklahoma is known as tornado alley because this area has more tornadoes than anywhere else in the country.</p>");
    $("#userOutputTip2").html("<p>Many people still live in small towns in the Midwest. The largest cities in the Midwest includes Chicago, Minneapolis, Oklahoma City, Des Moines and Cincinnati.</p>");
    $("#userOutputTip3").html("<p>The Midwest is still cowboy country. One hundred years ago, cowboys drove cattle from Texas to states throughout the Midwest.</p>");
  }else
  if (userInputRegion=="usaWest"){
    $("#userOutputTip1").html("<p>The West has some of the best skiing in the United States. Sun Valley, Idaho, and Vail and Aspen, Colorado are three famous ski resorts in the West.</p>");
    $("#userOutputTip2").html("<p>Death Valley, an area of the Mojave Desert, located in California is the hottest and driest place in North America. Temperatures there often top 120 degrees Fahrenheit</p>");
    $("#userOutputTip3").html("<p>The Rocky Mountains are the longest and highest mountain range in North America. They stretch from Canada to Mexico.</p>");
  }else
  if (userInputRegion=="usaNortheast"){
    $("#userOutputTip1").html("<p>There is an amazing amount of National Historic Landmarks in this region of the US. In fact approximately half of these US landmarks are found in this region.</p>");
    $("#userOutputTip2").html("<p>New York City, which is located in the Northeast, has the highest population of any city in the US; its population exceeds that of most states.</p>");
    $("#userOutputTip3").html("<p>All 11 states in this region were part of original thirteen British colonies before the US won it's independence in the American Revolution.</p>");
  }else {
    console.log("error on tips in output slide");
  }
  // $("#userOutputTip1").text(tip1);
  // $("#userOutputTip2").text(tip2);
  // $("#userOutputTip3").text(tip3);
  }

  tipsOutputSection();
  budgetOutPutSection();
  combineUserItem();
  listOutput();
  btnPrintGenerator();

  console.log(userItem);
//end user output function
};

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

var localStorageSave = function(){
  if (localStorage.getItem("userInputDomestic")) {
    var questionGoBack = confirm("There is unfinished work do you want to go back to where you left off?");
    if (questionGoBack) {
      makeBackBone();
      var retrievedData= localStorage.getItem("userAnswerListArr");
      userAnswerListArr = JSON.parse(retrievedData);
      if (localStorage.getItem("userInputChild")) {
        userInputDomestic = localStorage.getItem("userInputDomestic");
        userInputRegion = localStorage.getItem("userInputRegion");
        userInputTravelType = localStorage.getItem("userInputTravelType");
        userInputSeason = localStorage.getItem("userInputSeason");
        userInputDays = localStorage.getItem("userInputDays");
        userInputBudget = localStorage.getItem("userInputBudget");
        userInputGender = localStorage.getItem("userInputGender");
        changeQuestion(7);
      }else if (localStorage.getItem("userInputGender")) {
        userInputDomestic = localStorage.getItem("userInputDomestic");
        userInputRegion = localStorage.getItem("userInputRegion");
        userInputTravelType = localStorage.getItem("userInputTravelType");
        userInputSeason = localStorage.getItem("userInputSeason");
        userInputDays = localStorage.getItem("userInputDays");
        userInputBudget = localStorage.getItem("userInputBudget");
        changeQuestion(6);
      }else if (localStorage.getItem("userInputBudget")) {
        userInputDomestic = localStorage.getItem("userInputDomestic");
        userInputRegion = localStorage.getItem("userInputRegion");
        userInputTravelType = localStorage.getItem("userInputTravelType");
        userInputSeason = localStorage.getItem("userInputSeason");
        userInputDays = localStorage.getItem("userInputDays");
        changeQuestion(5);
      }else if (localStorage.getItem("userInputDays")) {
        userInputDomestic = localStorage.getItem("userInputDomestic");
        userInputRegion = localStorage.getItem("userInputRegion");
        userInputTravelType = localStorage.getItem("userInputTravelType");
        userInputSeason = localStorage.getItem("userInputSeason");
        changeQuestion(4);
      }else if (localStorage.getItem("userInputSeason")) {
        userInputDomestic = localStorage.getItem("userInputDomestic");
        userInputRegion = localStorage.getItem("userInputRegion");
        userInputTravelType = localStorage.getItem("userInputTravelType");
        changeQuestion(3);
      }else if (localStorage.getItem("userInputTravelType")) {
        userInputDomestic = localStorage.getItem("userInputDomestic");
        userInputRegion = localStorage.getItem("userInputRegion");

        changeQuestion(2);
      }else if (localStorage.getItem("userInputRegion")) {
        userInputDomestic = localStorage.getItem("userInputDomestic");
        changeQuestion(1);
      }else{
        changeQuestion(0);
        console.log("error in localStorageSave function")
      }

    }else{
      localStorage.clear();
      setTimeout(makeBackBone, 2500);
      setTimeout(changeQuestion, 2600, htmlIndex);
    }
  }else{
    setTimeout(makeBackBone, 2500);
    setTimeout(changeQuestion, 2600, htmlIndex);
  }
}
var btnPrintGenerator =function (){
  $("#theListOutPut").append("<br><a class='waves-effect waves-light btn' id='printBtn'>Print the List</a>")
  $("#printBtn").on("click", function(){
    var printContents = document.getElementById("mainContent").innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
  })
}
localStorageSave();

});
