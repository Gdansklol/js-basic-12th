let number = 1 ;

while(number <= 10){
    console.log(number);
    number += 1;
}


// cancel and confirm, window.confirm method
// differnens with return with true? or false?
// window. confirm("Message to be written in the alert window!")

// clicks to cancel returns false, clicks to confirm returns true
console.log(confirm("Message!"));



while(confirm("message")){
    console.log("You are holding down the OK button..")
}

    console.log("cansled button! ")