function showSalary(users, age) {
  let resultBalanceInfo = '';
  for (i in users) {
    if (users[i].age <= age) {
      resultBalanceInfo += users[i].name + ', ' + users[i].balance + '\n';
    }
  }
  resultBalanceInfo = resultBalanceInfo.slice(0, resultBalanceInfo.length - 1);
  return resultBalanceInfo;
}
