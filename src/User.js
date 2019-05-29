class User {
  constructor(){
    this.users = [];
  }

  addUser = (user) => {
    console.log("newUser",user);
    console.log("users", this.users)

    return this.users.push(user);
  }


  getUser = () => {
    return this.users;
  }

}
export default User;





