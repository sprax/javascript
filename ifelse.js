<!DOCTYPE html>
<html>
<body>

<p>Click the button to get a time-based greeting:</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
    var greeting;
    var time = new Date().getSeconds();
    var empty = "";
    var nulld = null;
    if (empty) {
        greeting = "Good morning";
    } else if (nulld) {
        greeting = "Good day";
    } else {
        greeting = "Good evening ";
    }
document.getElementById("demo").innerHTML = greeting;
}
</script>

</body>
</html>

