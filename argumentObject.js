function add() {
    if (arguments.length == 0) {
        console.log("No Arguments Passed !");

    } else {

        let sum = 0;
        for (i = 0; i<arguments.length; i++) {
            sum = sum + arguments[i]  
        }
        console.log(sum);
    }
}

add(2,5,10);