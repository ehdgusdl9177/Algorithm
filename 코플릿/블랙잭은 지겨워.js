function boringBlackjack(cards) {
  let count = 0;
  let length = cards.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      for (let k = j + 1; k < length; k++) {
        const number = cards[i] + cards[j] + cards[k];
        if (isPrime(number)) count++;
      }
    }
  }

  function isPrime(number) {
    for (let i = 2; i < number / 2; i++) {
      if (number % i === 0) return false;
    }
    return true;
  }

  return count;
}
