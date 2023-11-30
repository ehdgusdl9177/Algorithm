const fibonacciGenaration = (n) => {
  let fibo = [0, 1];
  if (n === 0) return [0];
  else if (n === 1) return [0, 1];
  else {
    for (let i = 2; i < n; i++) {
      fibo.push(fibo[i - 2] + fibo[i - 1]);
    }
    return fibo;
  }
};
