<!DOCTYPE html>
<html>
<body>

<p>The A.push(A.shift()) methods can be used to cycle array elements right to left.</p>
<button onclick="myFunction()">Try it</button>
<p id="demo"></p>

<script>
var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi","Strawberry"];
document.getElementById("demo").innerHTML = fruits.join(", ");
function shrink(str) {
    if (str.length > 1) {
        str = str.slice(0, -1)
    }
    return str;
}
function myFunction() {
    fruits = fruits.map(shrink)
    fruits.push(fruits.shift());
    document.getElementById("demo").innerHTML = fruits.join(", ");
}
</script>

</body>
</html>
