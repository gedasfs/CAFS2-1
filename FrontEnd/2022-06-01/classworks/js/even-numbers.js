const start = 0,
	end = 10;

let i = start;

while (i <= end) {
	if (i % 2 == 0) {
		console.log('while-if', i);
	}

	i++;
}

i = start;

do {
	if (i % 2 == 0) {
		console.log('do-while-if', i);
	}

	i++;
} while (i <= end);

i = start;

// ======================= //

while (i <= end) {
	console.log('while', i);

	i += 2;
}

i = start;

do {
	console.log('do-while', i);

	i += 2;
} while (i <= end);

// ======================= //

for (let i = start; i <= end; i++) {
	if (i % 2 == 0) {
		console.log('for-if', i);
	}
}

for (let i = start; i <= end; i += 2) {
	console.log('for', i);
}