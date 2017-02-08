<!DOCTYPE html>
<html>
<body>

<p>Click the button to return the highest number of 5 and 10.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>

function unixTimeStampFromMilliseconds(timeMs) {
    return Math.floor(timeMs / 1000);
}

function unixTimeStampFromDate(date) {
    return unixTimeStampFromMilliseconds(date.getTime());
}

function dateFromTimeStamp(tsString) {
    tsLength = tsString.length;
    if (tsLength >= 13) {
        return new Date(parseInt(tsString.substring(0,13)))
    } else if (tsLength == 10) {
        return new Date(parseInt(tsString) * 1000)
    }
    throw new Error("bad timestamp string: " + tsString);
}

function myFunction() {

    let dtj = new Date(2016, 0, 1);
    let tsc = unixTimeStampFromDate(dtj);
    let tss = tsc.toString();
    let dtc = dateFromTimeStamp(tss);

    document.getElementById("demo").innerHTML = [
    dtj, '<br>',
    tsc, '<br>',
    dtc, '<br>',
    ];
}
</script>

</body>
</html>
