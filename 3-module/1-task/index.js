function namify(users) {
  //gets non-empty-name users first
  let usersWithNonEmptyNames = [];
  for (let i in users) {
    if (users[i].name != null && users[i].name != undefined) {
      usersWithNonEmptyNames.push(users[i]);
    }
  }
  return usersWithNonEmptyNames.map(getName);
}

function getName(user) {
  return user.name;
}

/*function namify(users) {
  return users.map(user => user.name);
}*/
