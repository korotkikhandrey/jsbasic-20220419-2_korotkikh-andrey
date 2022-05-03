function namify(users) {
  let namesArr = [];
  for (let i in users) {
    namesArr.push(users[i].name);
  }
  return namesArr;
}
