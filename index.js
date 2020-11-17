function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
    // this.login = function() {
    //     console.log(this.email, 'has logged in')
    // }
}

User.prototype.login = function() {
    this.online = true;
    console.log(this.email, 'has logged in')
}

User.prototype.logout = function() {
    this.online = false;
    console.log(this.email, 'has logged out')
}

const userOne = new User('hello@world.com', 'Ryu');
const userTwo = new User('jim@world.com', 'Jim');

console.log(userOne);
