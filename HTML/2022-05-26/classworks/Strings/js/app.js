// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
let userInfoOutput = document.getElementById('main');

let user = {
	name: 'Kiril',
	surname: 'Clk'
};

// https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
userInfoOutput.innerHTML = `<h2>User Information</h2>
<p>Vartotojo vardas yra ${user.name}, o pavardė ${user.surname}.</p>`;