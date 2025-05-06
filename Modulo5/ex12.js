function fullName(firstName, lastName) {
    let pessoa1 ={
        firstName : "nome1",
        lastName : "lastnome1",
    }
    let pessoa2 ={
        firstName: "nome2",
        lastName: "lastnome2",
    }
    let pessoa3 = {
        firstName:"nome3",
        lastName: "lastnome3",
    }
    function fullName() {
        this.firstName + '' + this.lastName;
    };
    console.log(pessoa1.fullName);
    console.log(pessoa2.fullName);
    console.log(pessoa3.fullName);
}