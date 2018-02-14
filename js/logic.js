$(document).ready(function(){

var userItem=[];

var addToUserItem= function(arr)={
  for (var i = 0; i < arr.length; i++) {
    userItem.push(arr[i]);
  }
}

var saveUserItem = function(){
  localStorage.setItem("userItem", userItem);
}


});
