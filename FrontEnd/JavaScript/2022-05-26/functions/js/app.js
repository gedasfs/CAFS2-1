function showMessage(msg) {
    console.log(new Date, msg);
}

showMessage('Hello everyone!');
showMessage('Hi');
showMessage('Hello');
showMessage('Hey');

function showMessageScoped() {
    let message = 'Hello, I\'m JavaScript!'; // local variable
    console.log(message);
}

showMessageScoped();

// console.log( message ); // <-- Error! The variable is local to the function

let userName = 'John';

function showMessageWihName() {
    let message = 'Hello, ' + userName;
    
    console.log(message);
}

showMessageWihName();