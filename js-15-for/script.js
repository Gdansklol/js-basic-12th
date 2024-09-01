// Loop that runs 5 times, logging the progress and the current value of i
for (let i = 1; i <= 5; i += 1) {
    console.log("It's in progress.");
    console.log(`i: ${i}`);
}

// Loop that runs 8 times, logging even numbers and a message for odd numbers
for (let i = 1; i <= 8; i += 1) {
    if (i % 2 == 0) {
        console.log(i); // Logs even numbers
    } else {
        console.log(`The remainder is not 0: ${i}`); // Logs a message for odd numbers
    }
}

// Loop that logs numbers from 1 to 10, incrementing by 2 each time
for (let i = 1; i <= 10; i += 2) {
    console.log("It shows the i list.");
    console.log(i);
}
