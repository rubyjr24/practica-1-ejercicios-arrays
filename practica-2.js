

const results = new Map();

for (let i = 0; i < 10_000; i++){
    const n = Math.floor(Math.random() * 10) + 1;
    results.set(n, results.has(n) ? results.get(n) + 1 : 1);
}

const keys = [...results.keys()].sort((n1, n2) => {
    return n1 - n2;
});

for (const number of keys) {
    console.log(`El número ${number} se ha repetido ${results.get(number)} veces`);
}