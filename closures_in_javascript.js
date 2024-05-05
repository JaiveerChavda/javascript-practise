//closures in javascript is very powerfull concept which allows inner function to access variables
//of outer scope (or parent function).

// also in other words , the combination of function bundled together with its lexical scope
//bound together forms a closure.

//closures are created every time a function is created, at function creation time.

// example

// function outer(){
//     let a = 33;

//     function inner(){
//         console.log(a);
//     }

//     inner();
// }

function foo(outer_arg) {

    function inner(inner_arg) {
        return outer_arg + inner_arg;
    }
    return inner;
}

