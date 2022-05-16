function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  friends.forEach(friend => {
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(friend.firstName + ' ' + friend.lastName));
    ul.appendChild(item);
  });
  return ul;
}
