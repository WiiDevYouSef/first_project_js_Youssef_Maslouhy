





let myData = [
    {
        name: "Youssef Maslouhy",
        email: "youssefMaslouhy@gmail.com",
        age: 24, 
        password: '0000000000',
    }
];

class User {
    constructor(name, email, age, password) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.password = password;
    }
}

//& SIGN UP
function signUp() {

}


//& SIGN UP
function signup() {
    let name = prompt("Enter your full name.").trim();

    if (name === "exit") {
        return;
    }

    function verifName() {
        while (name.replace(/\s/g, '').length < 5 || /[0-9@#\-+*/$!%^&*_()?]/.test(name)) {
            name = prompt("Enter a valid name!").trim();
        }
        return name.split(' ').map(something => something.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join(' ');
    };

    name = verifName();

    let email = prompt("Enter your email.").trim().toLowerCase();

    if (email === "exit") {
        return;
    }

    function verifEmail() {
       
    };

    email = verifEmail();

    let age = prompt("Enter your age.").trim();

    if (age === "exit") {
        return;
    }


    let password = prompt("Enter a strong password!");
    let passwordConfirmed = prompt("Confirm your password.");

    if (password === "exit" || passwordConfirmed === "exit") {
        return;
    }

    function verifPassword() {
        while (password.length < 7 || !/[@#\-+*/]/.test(password) || /\s/.test(password) || password !== passwordConfirmed) {
            if (password !== passwordConfirmed) {
                alert("Password does not match!")
            } else {
                alert("Enter a strong password with atleast 1 special character.")
            }
            password = prompt("Enter a strong password!")
            passwordConfirmed = prompt("Confirm your password.")

            if (password === "exit" || passwordConfirmed === "exit") {
            }
            return;
        }
        return password;
    };

    password = verifPassword();

    let user = new User(name, email, age, password);
    myData.push(user);

    console.table(myData);
}