<p>Date and timestamp conversion.</p>

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
    let dat = dateFromTimeStamp('1486000024803000000');
    let arr = [0,1,2,3,4];

    document.getElementById("demo").innerHTML = [
    dtj, '<br>',
    tsc, '<br>',
    dtc, '<br>',
    dat, '<br>',
    arr[arr.length-3], '<br>',
    (3 in arr), '<br>',
    (arr.includes(3)), '<br>',
    ];
}

myFunction();
</script>

</body>
</html>