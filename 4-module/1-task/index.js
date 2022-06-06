function makeFriendsList(friends) {
  let friendsList = document.createElement("ul");

  friends.forEach((friend) => {
    let friendsListItem = document.createElement("li");

    friendsListItem.innerText = friend.firstName + friend.lastName;
    friendsList.appendChild(friendsListItem);
  });
  return friendsList;
}
