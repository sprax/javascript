
<!DOCTYPE html>
<html>
<body>

<p>This slice() example slices out a part of an array starting from array element 2 ("Lemon"):</p>

<p id="demo"></p>

<script>
ary = new Array(5);
ary.fill(14,0,5);
ary[-1] = 23;

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(2);
document.getElementById("demo").innerHTML = fruits + "<br>" + citrus +" " +ary[4]+ " " + ary[3] + " " + ary[-1] + " " +
ary[5] ;
</script>

</body>
</html>
