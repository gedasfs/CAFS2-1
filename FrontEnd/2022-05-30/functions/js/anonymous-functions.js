const showMessage = function(message = null) {
	if (message) {
		console.log((new Date).toISOString(), message);
	} else {
		console.error('No message defined');
	}
};

const sayUserHello = function(printMessage, user) {
	if (!user) {
		user = getUser();
	}

	// return printMessage(user);

	printMessage(user);

	return true;
};

const user = {
	name: 'Kiril',
	age: 30
};

const getUser = function() {
	return user;
};

const getUserName = function() {
	//     user.name
	return getUser().name;
};

const userAge = function() {
	//     user.age
	return getUser().age;
};

const setUserName = function(user, name) {
	user.name = name;

	return true;
};

// function getDefaultPhone() {
// 	return 112;
// }

// function setUserParameter(user, parameterName, parameterValue = getDefaultPhone()) {
const setUserParameter = function(user, parameterName, parameterValue = null) {
	user[parameterName] = parameterValue;

	return true;
};

showMessage();

showMessage('hello world');
showMessage(`Hello, my name is ${getUser()}`);

showMessage(`Hello, my name is ${getUser().name}`);
showMessage(`Hello, my name is ${getUser().name}; My age is ${getUser().age};`);
showMessage(`Hello, my name is ${getUser().name}; My age is ${userAge()};`);

sayUserHello(function(user) {
	showMessage(`Hello, my name is ${user.name}; My age is ${user.age};`);
}, user);

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

sayUserHello(function(user) {
	showMessage(`Hello, my name is ${user.name}; My age is ${user.age};`);
});