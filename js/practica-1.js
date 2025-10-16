

const numbers = [];

for (let i = 1; i <= 49; i++){
    numbers.push(i);
}

console.log("Números de la primitiva: ")

for (let i = 0; i < 50; i++){

    const lotteryGame = new Set();

    while (lotteryGame.size < 6){
        lotteryGame.add(numbers[Math.floor(Math.random() * numbers.length)]);
    }

    console.log(...lotteryGame);

}
