function someFunction(arg1, arg2) {
    let result = (arg1 + arg2);
    console.log(result);
}

function slower(func, seconds) {
    return function(arg1, arg2) {
        console.log(`Please wait ${seconds} seconds`);
        setTimeout(() => {
        func(arg1, arg2);
        }, seconds * 1000);
    };
}

let slowedSomeFunction = slower(someFunction, 5); 

slowedSomeFunction(8, 15)

