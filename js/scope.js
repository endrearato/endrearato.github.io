// Global scope.
const globalName = "Joe";

function something () {
    const globalName ="Jack";
    console.log(globalName);
}
something();

console.log(globalName);