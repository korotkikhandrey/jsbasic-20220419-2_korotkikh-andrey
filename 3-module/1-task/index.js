function namify(users) {
  return users.map(getName);
}

function getName(user) {
  return user.name;
}
