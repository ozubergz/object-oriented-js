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

let users = [userOne, userTwo];

class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => u.email !== user.email)
    }
}

const admin = new Admin('shaun@ninja.com', 'Shaun');

admin.deleteUser(userOne)
// userTwo.deleteUser(userOne) //user does cannot deleteUser method


console.log(admin)
console.log(users)



