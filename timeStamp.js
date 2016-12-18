
<!DOCTYPE html>
<html>
<body>

<p>Click the button to create an array, then display its length.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function unixTimeStamp(date) {
    return Math.floor(date.getTime() / 1000);
}

function myFunction() {
    var timeInMs = Date.now();
    var timeUnix = Math.floor(timeInMs / 1000);
    var dateNow = new Date();
    var utcHour = dateNow.getUTCHours();
    var utcYear = dateNow.getUTCFullYear();
    var utcMonth = dateNow.getUTCMonth();
    var dateOne = new Date(utcYear, utcMonth);
    var dateTwo = new Date(utcYear, utcMonth - 1);
    var dateThr = new Date(utcYear, utcMonth - 24);
    var arr = [utcYear, utcMonth, utcHour, timeInMs, timeUnix, dateNow, 
        dateOne, dateTwo, dateThr, 
        unixTimeStamp(dateOne), unixTimeStamp(dateTwo), unixTimeStamp(dateThr)];
    var str = arr.join("<BR>");
    document.getElementById("demo").innerHTML = str;
}
</script>
</body>
</html>

