function skillsMember() {
    return {
        name: 'John Doe',
        age: 30,
        skills: ['HTML', 'CSS', 'JS'],
        greet: function() {
            console.log(`Hi, I'm ${this.name}`);
        }
    }
}