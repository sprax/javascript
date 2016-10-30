<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
// From: http://recurial.com/programming/understanding-callback-functions-in-javascript/

function some_function2(url, callback) {
  var httpRequest; // create our XMLHttpRequest object
  if (window.XMLHttpRequest) {
    httpRequest = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    // Internet Explorer is whatever
    httpRequest = new
    ActiveXObject("Microsoft.XMLHTTP");
  }
 
  httpRequest.onreadystatechange = function() {
    // inline function to check the status
    // of our request
    // this is called on every state change
    if (httpRequest.readyState === 4 &&
      httpRequest.status === 200) {
      callback.call(httpRequest.responseXML);
      // call the callback function
    }
  };
  httpRequest.open('GET', url);
  httpRequest.send();
}
// call the function
some_function2("text.xml", function() {
  console.log(this);
});
console.log("this will run before the above callback");
</script>
</body>
</html>
