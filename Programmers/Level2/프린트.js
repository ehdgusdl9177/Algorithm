function solution(priorities, location) {
  let cnt = 0;
  let firstEl = 0;
  while (priorities.length) {
    firstEl = priorities.shift();
    if (firstEl < Math.max(...priorities)) {
      priorities.push(firstEl);
      if (location === 0) location = priorities.length - 1;
      else location--;
    } else {
      cnt++;
      if (location === 0) break;
      else location--;
    }
  }
  return cnt;
}
