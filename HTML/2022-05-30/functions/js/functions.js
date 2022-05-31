function showMessage(message = null) {
	if (message) {
		console.log((new Date).toISOString(), message);
	} else {
		console.error('No message defined');
	}
}

function sayUserHello(user) {
	showMessage(`Hello, my name is ${getUser().name}; My age is ${getUser().age};`);

	return true;
}

const user = {
	name: 'Kiril',
	age: 30
};

function getUser() {
	return user;
}

function getUserName() {
	//     user.name
	return getUser().name;
}

const userAge = function() {
	//     user.age
	return getUser().age;
}

function setUserName(user, name) {
	user.name = name;

	return true;
}

// function getDefaultPhone() {
// 	return 112;
// }

// function setUserParameter(user, parameterName, parameterValue = getDefaultPhone()) {
function setUserParameter(user, parameterName, parameterValue = null) {
	user[parameterName] = parameterValue;

	return true;
}

showMessage();

showMessage('hello world');
showMessage(`Hello, my name is ${getUser()}`);

showMessage(`Hello, my name is ${getUser().name}`);
showMessage(`Hello, my name is ${getUser().name}; My age is ${getUser().age};`);
showMessage(`Hello, my name is ${getUser().name}; My age is ${userAge()};`);

sayUserHello(getUser());

showMessage(`Hello, my name is ${getUserName()}`);

setUserName(getUser(), 'Tomas');

showMessage(`Hello, my name is ${getUserName()}`);

let randomUser = getUser();

setUserName(randomUser, 'Antanas');

showMessage(`Hello, my name is ${getUserName()}`);

setUserParameter(randomUser, 'city', 'Klaipeda');
setUserParameter(randomUser, 'country', 'Lithuania');
setUserParameter(randomUser, 'phone');
console.log(setUserParameter(randomUser, 'age', 50));

console.log(getUser());

sayUserHello(getUser());