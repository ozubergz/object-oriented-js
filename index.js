//////////////////////// Object //////////////////////////////////

const user = {
    email: 'hello@world.com',
    name: 'Ryu',
    login() {
        console.log(this.email, 'has logged in.')
    },
    logout() {
        console.log(this.email, 'has logged out.')
    }
}

console.log(user.email)
console.log(user.name)
console.log(user.login())
console.log(user.logout())