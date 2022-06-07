const multiArr = [
	[
		'Kunigùnda',
		'Jõnas',
		'Juõzas'
	],
	[
		[
			'Gilvinà',
			'Aigùstas'
		],
		[],
		[],
		[
			'Nóvaldas',
		]
	]
];

// Elìmantas
multiArr[1][2].push('Elìmantas');

// console.log(multiArr);
// console.log(multiArr[1][0][1]);

console.log(multiArr);
console.log(multiArr[1]);
console.log(multiArr[1][2]);
console.log(multiArr[1][2][0]);

// Error
// multiArr[1][2][0].push('Gilvinà');

console.log(multiArr[1][2][0].toLowerCase(), multiArr[1][2])

multiArr[1][2].push('Gilvinà');

console.log(multiArr);