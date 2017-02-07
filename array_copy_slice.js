<!DOCTYPE html>
<html>
<body>

<p>Click the button to return the highest number of 5 and 10.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
	let row = [0, 6, 6, 4];
    let last = row.length - 1;
    if (last > 0 && row[0] == 0 && row[1] > 0) {
       for (let j = 0; j < last; j++) {
         row[j] = row[j+1];
       }
    }
    row[last] = 0;
    doh = row.slice(0);
    tot = 0;
    for (let j = 0; j < last; j++) {
        doh[j] -= doh[j+1];
        tot += doh[j];
    }
    let ss = row.slice(0);
    ss = ss.slice(1);
    document.getElementById("demo").innerHTML = [row, '<BR>', doh, '<p>', tot, '<BR>', ss, '<p>', Math.max(2,5)];
}
</script>

</body>
</html>
