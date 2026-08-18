// interfaces

interface User {
  name: string;
  email: string;
  password: string;
}

//if we do
//function getDataofUser(obj){}, typescript would want to know what values will be in obj!
// defining the interface will help us with that!
// obj will have name, email and password
function getDataofUser(obj: User) {
  // this way typescript knows obj needs to be a certain way
}

//if we call the function as,
getDataofUser({}); // this will show an error, look at it, you'll understand it.
getDataofUser({ name: "ram", email: "haha@haha.com", password: "123asd" }); // this is fine!

// What do I do if I want some values to be optional like say gender!
interface User_ {
  name: string;
  email: string;
  password: string;
  gender?: string;
}

function getUserData(obj: User_) {}

getUserData({ name: "ram", email: "haha@haha.com", password: "123asd" }); // this works as well because we made gender optional
getUserData({
  name: "ram",
  email: "haha@haha.com",
  password: "123asd",
  gender: "male",
}); // this works obviously!
