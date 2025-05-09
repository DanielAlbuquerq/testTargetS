function fibonnaci(n){
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    fib.includes(n) ? console.log(`O número ${n} pertence à sequência de Fibonacci.`) : console.log(`O número ${n} não pertence à sequência de Fibonacci.`);
    return fib;

}

console.log(fibonnaci(10));