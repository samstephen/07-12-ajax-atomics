var req = new XMLHttpRequest();

// For 'Exercise 2', you will modify this line:
req.open("get", "/info2");

req.addEventListener("loadstart", function(){
  console.log("loadstart");
});

req.addEventListener("load", function(){
  // Your code for Exercise 1 goes here.
  alert(this.response)
});

req.send();
