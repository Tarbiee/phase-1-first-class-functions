function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    function namedFunction(){
        console.log=("Hello.");
    };
    return namedFunction;
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log=("This is an anonymous function");

    };
}