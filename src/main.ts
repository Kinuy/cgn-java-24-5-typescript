/*
TASKS
    Step 1: Declare a variable named 'age' of type 'number' and assign a value to it.

    Step 2: Write a 'for' loop that outputs the numbers from 1 to 'age'.

    Step 3: Use an 'if-else' statement to check if 'age' is greater than 18.
    Display appropriate messages depending on whether the condition is met or not.

    Step 4: Declare a variable named 'score' of type 'number' and assign it the value 0.

    Step 5: Use an 'if' statement to check if 'score' has a value.
    Display 'Score is available.' if 'score' has a value other than 0.

    Step 6: Use an 'if-else' statement to check if 'score' is evaluated as a 'truthy' value.
    Display 'Score is evaluated as truthy.' if 'score' is considered 'truthy'.

    Step 7: Declare a variable named 'username' of type 'string' and assign it the value '' (empty string).

    Step 8: Use an 'if' statement to check if 'username' has a value.
    Display 'Username is available.' if 'username' has a value.

    Step 9: Use an 'if-else' statement to check if 'username' is evaluated as a 'falsy' value.
    Display 'Username is evaluated as falsy.' if 'username' is considered 'falsy'.

    Step 10: Declare a variable named 'isAdmin' of type 'boolean' and assign it the value 'false'.

    Step 11: Use an 'if-else' statement to check if 'isAdmin' is evaluated as a 'truthy' value.
    Display 'isAdmin is evaluated as truthy.' if 'isAdmin' is considered 'truthy'.

    Step 12: Use an 'if' statement to check if 'isAdmin' is 'false'.
    Display 'isAdmin is false.' if 'isAdmin' has the value 'false'.

* */

//Task1:
let age: number = 15;

//Task2
for(let i: number = 0; i< age;i++){
    console.log(i);
}

//Task3
if(age>18){
    console.log("You are old!");
}else{
    console.log("Your are young!");
}

//Task4
let score: number = 0;

//Task5
if(score !== 0){
    console.log("Score is available.");
}

//Task6
if(score){
    console.log('Score is evaluated as truthy.');
}

//Task7
let username: string = "";

//Task8
if(username !== ""){
    console.log('Username is available.');
}

//Task9
if(username){
    console.log('username is evaluated as falsy.');
}

//Task10
let isAdmin: boolean = false;

//Task11
if(isAdmin){
    console.log('isAdmin is evaluated as truthy.');
}

//Task12
if(isAdmin === false){
    console.log('isAdmin is false.');
}



