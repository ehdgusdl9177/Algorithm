function fibonacci(n) {
  let fibo = [0, 1];
  const fiboF = (n) => {
    if (fibo[n] !== undefined) return fibo[n];
    fibo[n] = fiboF(n - 1) + fiboF(n - 2);
    return fibo[n];
  };
  return fiboF(n);
}
