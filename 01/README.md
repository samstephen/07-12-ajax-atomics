You are given:

1. A Sinatra application with a homepage.
2. Two files in **/public**.
  - A file called "info1" that has `yes` in it.
  - A file called "info2" that has `no` in it.
3. A JavaScript file that runs when the homepage is viewed.
  - The JS file creates and sends a request to "/info1" using XHR.
  - When the response is received, nothing happens [yet].

For this atomic, you will need to modify only the JavaScript file.

# Exercise 1

When the response is received, show an alert containing the response.

If you succeed, the alert should show `yes`.

# Exercise 2

Change the path of the request so that the alert shows `no` instead.

# Exercise 3

If the response received is `"yes"`, then `alert("Yay!")`.

Otherwise `alert("Aw, shucks!")`.

Now you can change the path of the request whenever you want, and the alert will accommodate either response.

---

# Questions

Write answers to these questions in the **home.erb** file - sort of like how you did it for the JavaScript Atomics earlier this week.

####Why are you able to make requests to **/info1** and **/info2** even though there are no route handlers for those paths defined in **app.rb**?

```javascript
var req = new XMLHttpRequest();
```

First, we declare a variable with a XMLHttpRequest object.

```javascript
req.open("get", "/info2");
```

Using the open() method of the XHR object, you can send a request to a server. `open(method,url)` - Specifies the type of request, and the location of the file on the server.

Because the JavaScript method handles the request, Sinatra won't handle the request. open() will go to the public folder to `get` the url of the request `/info1` or `/info2`



####Why is the XHR object's request path **/info1** instead of **/public/info1**?

The location of the info2 on the server is in the public directory - which sinatra specifies as the "root". This means we can get files by just doing a "/info2" and not "/public/info2"



####Within the `addEventListener` function, what does `this` represent?

```javascript
req.addEventListener("load", function(){
  if (this.response == "yes") {
    alert("Yay!");
  } else {
    alert("Aw, shucks!");
  }
});
```

The value of `this` is an element object that the Event is being added to. The XHR object is what `this` is referring to.


