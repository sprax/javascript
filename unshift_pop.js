<!DOCTYPE html>
<html>
<body>

<p>The splice() methods can be used to remove array elements.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;
function myFunction() {
    fruits.unshift(fruits.pop());
    document.getElementById("demo").innerHTML = fruits.join(", ");
}
</script>

</body>
</html>
