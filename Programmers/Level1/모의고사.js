function solution(answers) {
  let answer = [];
  let one = [];
  let two = [];
  let three = [];
  let oneFor = [1, 2, 3, 4, 5];
  let twoFor = [2, 1, 2, 3, 2, 4, 2, 5];
  let threeFor = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  for (let i = 0; i < answers.length; i++) {
    if (i < 5) {
      one.push(oneFor[i]);
    } else {
      one.push(oneFor[i % 5]);
    }
  }

  for (let j = 0; j < answers.length; j++) {
    if (j < 8) {
      two.push(twoFor[j]);
    } else {
      two.push(twoFor[j % 8]);
    }
  }

  for (let k = 0; k < answers.length; k++) {
    if (k < 10) {
      three.push(threeFor[k]);
    } else {
      three.push(threeFor[k % 10]);
    }
  }

  let oneCount = 0;
  let twoCount = 0;
  let threeCount = 0;
  for (let u = 0; u < answers.length; u++) {
    if (answers[u] === one[u]) {
      oneCount++;
    }
    if (answers[u] === two[u]) {
      twoCount++;
    }
    if (answers[u] === three[u]) {
      threeCount++;
    }
  }

  let max = Math.max(oneCount, twoCount, threeCount);
  if (max === oneCount) {
    answer.push(1);
  }
  if (max === twoCount) {
    answer.push(2);
  }
  if (max === threeCount) {
    answer.push(3);
  }

  return answer;
}
