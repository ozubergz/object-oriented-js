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
        this.score = 0;
    }

    login() {
        console.log(this.email, 'just logged in')
        return this
    }

    logout() {
        console.log(this.email, 'just logged out')
        return this
    }

    updateScore() {
        this.score++
        console.log(this.email, 'score is now', this.score)
        return this
    }
}

const userOne = new User('hello@world.com', 'Ryu');
const userTwo = new User('jim@world.com', 'Jim');

//the 'new' keyword
// - creates a new empty object {}
// - sets the value of 'this' to be the new object
// - calls the constructor method

userOne.login().updateScore().updateScore().updateScore()


