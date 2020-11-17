function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function() {
    this.online = true;
    console.log(this.email, 'has logged in');
}

User.prototype.logout = function() {
    this.online = false;
    console.log(this.email, 'has logged out');
}

function Admin(...args) {

    //inherits from User constructor
    User.apply(this, args)
    
    //extra prop for Admin
    this.role = 'super admin'
}

//inherits User's prototypes
Admin.prototype = Object.create(User.prototype)

Admin.prototype.deleteUser = function(user) {
    users = users.filter(u => u.email != user.email)
}

const userOne = new User('hello@world.com', 'Ryu');
const userTwo = new User('jim@world.com', 'Jim');
const admin = new Admin('shaun@ninja.com', 'Shaun');

let users = [userOne, userTwo]


