function solution(nums) {
  // 소수일 때 카운트 해주는 변수
  let count = 0;
  let num = nums.length;

  // 3중 반복문으로 3개의 수를 더해주는 로직
  for (let i = 0; i < num; i++) {
    for (let j = i + 1; j < num; j++) {
      for (let k = j + 1; k < num; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) {
          count++;
        }
      }
    }
  }
  return count;
}

// 소수 판별하는 함수
function isPrime(num) {
  if (num === 2) {
    return true;
  }
  for (let i = 0; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
