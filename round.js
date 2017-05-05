
// This is an old topic but still top-ranked Google results and the solutions offered share the same floating point decimals issue. Here is the (very generic) function I use, thanks to MDN:

function round(value, exp) {
if (typeof exp === 'undefined' || +exp === 0)
  return Math.round(value);

value = +value;
exp = +exp;

if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0))
  return NaN;

// Shift
value = value.toString().split('e');
value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));

// Shift back
value = value.toString().split('e');
return +(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp));
}
// As we can see, we don't get these issues:

round(1.275, 2);   // Returns 1.28
round(1.27499, 2); // Returns 1.27
// This genericity also provides some cool stuff:

round(1234.5678, -2);   // Returns 1200
round(1.2345678e+2, 2); // Returns 123.46
round("123.45");        // Returns 123
// Now, to answer the OP's question, one has to type:

round(10.8034, 2).toFixed(2); // Returns "10.80"
round(10.8, 2).toFixed(2);    // Returns "10.80"
// Or, for a more concise, less generic function:

function round2Fixed(value) {
value = +value;

if (isNaN(value))
  return NaN;

// Shift
value = value.toString().split('e');
value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + 2) : 2)));

// Shift back
value = value.toString().split('e');
return (+(value[0] + 'e' + (value[1] ? (+value[1] - 2) : -2))).toFixed(2);
}
You can call it with:

round2Fixed(10.8034); // Returns "10.80"
round2Fixed(10.8);    // Returns "10.80"
