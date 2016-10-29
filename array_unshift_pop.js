<!DOCTYPE html>
<html>
<body>

<p>The A.unshift(A.pop()) methods can be used to cycle array elements left to right.</p>

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
