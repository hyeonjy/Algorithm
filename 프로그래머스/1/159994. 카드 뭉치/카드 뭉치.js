function solution(cards1, cards2, goal) {
  let checked = Array(goal.length).fill(false);

  let idx = -1;
  for (let index = 0; index < cards1.length; index++) {
    const card1 = cards1[index];

    if (goal.includes(card1) && idx < goal.indexOf(card1)) {
      idx = goal.indexOf(card1);
      checked[goal.indexOf(card1)] = true;
    } else if (!goal.includes(card1)) {
      break;
    }
  }

  idx = -1;

  for (let index = 0; index < cards2.length; index++) {
    const card2 = cards2[index];

    if (goal.includes(card2) && idx < goal.indexOf(card2)) {
      idx = goal.indexOf(card2);
      checked[goal.indexOf(card2)] = true;
    } else if (!goal.includes(card2)) {
      break;
    }
  }

  return checked.every((value) => value === true) ? "Yes" : "No";
}
