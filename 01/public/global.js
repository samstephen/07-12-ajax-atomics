var req = new XMLHttpRequest();

// For 'Exercise 2', you will modify this line:
req.open("get", "/info2");

req.addEventListener("loadstart", function(){
  console.log("loadstart");
});

req.addEventListener("load", function(){
  // Your code for Exercise 1 goes here.

  // If the response received is "yes", then alert("Yay!").
  if (this.response == "yes") {
    alert("Yay!");
  }
  // Otherwise alert("Aw, shucks!").
  else {
    alert("Aw, shucks!");
  }

});

req.send();
