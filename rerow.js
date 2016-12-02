<!DOCTYPE html>
<html>
<body>

<p>The A.push(A.shift()) methods can be used to cycle array elements right to left.</p>
<button onclick="myFunction()">Try it</button>
<p id="demo"></p>
<p id="rows"></p>

<script>
var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi","Strawberry"];

var rows = [
    ["workflows", "50 Poll: What's for lunch?", "completed step 1 of 2", "5"],
    ["workflows", "50 Poll: What's for lunch?", "completed step 2 of 2", "2"],

    ["workflows", "60 Instruction: Teaching Broadcast", "completed step 1 of 3", "9"],
    ["workflows", "60 Instruction: Teaching Broadcast", "completed step 2 of 3", "6"],
    ["workflows", "60 Instruction: Teaching Broadcast", "completed step 3 of 3", "3"],

    ["workflows", "70 Collect: Feedback Campaign", "completed step 1 of 4", "34"],
    ["workflows", "70 Collect: Feedback Campaign", "completed step 4 of 4", "11"],
    ["workflows", "70 Collect: Feedback Campaign", "completed step 3 of 4", "19"],
    ["workflows", "70 Collect: Feedback Campaign", "completed step 2 of 4", "24"],

    ["workflows", "80 Collect: Retrospective", "completed step 1 of 2", "44"],
    ["workflows", "80 Collect: Retrospective", "completed step 2 of 2", "31"],

    ["workflows", "90 Message: This is only a test", "completed step 1 of 1", "63"],
    ]


var stacks = []

function listRows() {
    stacks = []
    for (var j = 0; j < rows.length; j++) {
        var wrk = parseInt(rows[j][1].split(" ")[0]);
        var arr = rows[j][2].split(" ");
        var cmp = parseInt(arr[2]);
        var tot = parseInt(arr[4]);
        stacks.push([wrk, cmp, tot, 'dog'])
    }
}

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
    listRows()
    document.getElementById("rows").innerHTML = stacks[5][2];
}
</script>

</body>
</html>
