let name = 'Jared'; // block-scoped (only within curly brackets); can't be redeclared
console.log(name);

const PI = 3.14;    // const = constant, cannot be redeclared
console.log(PI);

var count = 0;      // function-scoped (within whole function); can be redeclared

if(count < 5) {
    count = 1;
    console.log(count);
}
