<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Math.random()</h1>

<p>Math.random() returns a random number between 0 (included) and 1 (excluded):</p>

<p id="demo">text to be replaced</p>

<script>
function rand() {
    document.getElementById("demo").innerHTML = Math.random();
}
</script>

<button type="button" onclick="rand()">Click Me!</button>

</body>
</html>
