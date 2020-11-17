//////////////////////// Object //////////////////////////////////

// const user = {
//     email: 'hello@world.com',
//     name: 'Ryu',
//     login() {
//         console.log(this.email, 'has logged in.')
//     },
//     logout() {
//         console.log(this.email, 'has logged out.')
//     }
// }

// console.log(user.email)
// console.log(user.name)
// console.log(user.login())
// console.log(user.logout())

//////////////////////// Class //////////////////////////////////

class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }

    login() {
        console.log(this.email, 'just logged in')
    }

    logout() {
        console.log(this.email, 'just logged out')
    }
}

const userOne = new User('hello@world.com', 'Ryu');
const userTwo = new User('jim@world.com', 'Jim');

//the 'new' keyword
// - creates a new empty object {}
// - sets the value of 'this' to be the new object
// - calls the constructor method

console.log(userOne)
console.log(userTwo)

userOne.login()
userTwo.logout()
