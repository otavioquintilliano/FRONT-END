function isPrime(num) {
    let n = 0;

    for (let i = 0; i <= n; i++) {
        if ((n % 1 === 0) && (n % n === 0)) {
            return (isPrime(i));
        }
    }
}
