// ## First Project JavaScript:

// ## 1 - Instructions:
// - Create a folder named: first_project_js_firstName_lastName
// - Create a repository with the same name as the folder
// - Adhere to the folder structure
// - Individual work
// - Minimum of 10 commits
// - Deadline: One day
// - Use of object classes, arrays, functions, prompts, etc.

// ## 2 - Project Objective:
// - Create a JavaScript program that simulates logging into a bank account using only the console to interact with the user.

// ## 3 - Instructions:
// - Account Creation and Management:
//     + Allow the user, via prompts, to choose between signing up, logging in, or changing the password.
//     + If the user only writes "exit," they exit the current process, and the choice question is asked again.
//         * If the user chooses to sign up, here are the details they must enter:
//             # Name (Full):
//             - Check for leading or trailing spaces.
//             - The first letter should be capitalized.
//             - After each space, the first letter should remain capitalized.
//             - Check that all other characters are in lowercase.
//             - Do not save the Name if it has less than 5 characters (excluding spaces).
//             - Do not save the Name if it contains numbers, "@", or similar special characters.

//             # Email:
//             - Check for leading or trailing spaces.
//             - Convert all letters to lowercase.
//             - Do not save the Email if it has spaces in the middle.
//             - Do not save the Email if it has fewer than 10 characters (excluding spaces).
//             - Do not save the Email if it does not contain exactly one "@" symbol.
//             - Ensure the email is unique.

//             # Age:
//             - Check for leading, trailing, or middle spaces.
//             - Verify that only digits are entered.
//             - Do not save the Age if it has 0 characters, or if it has 3 characters or more.

//             # Password:
//             - Check for leading or trailing spaces.
//             - Do not save the Password if it has spaces in the middle.
//             - Require at least one special character from the set: ["@", "#", "-", "+", "*", "/"].
//             - Require at least 7 characters to confirm the password.

//             # Password_confirmed:
//             - The user must re-enter their exact password; otherwise, they are blocked.

//         * If the user chooses to log in, here are the details they must enter:
//             # Email:
//             - Check if the email exists in our Database.
            
//             # Password:
//             - Check if the entered password is associated with the previously entered email.

//         * If the user chooses to change the password:
//             - They must enter their existing Email in the Database.

//         * After the user logs in, display the amount they have in their bank (user's choice) and offer them services:
//             # Logout:
//             - If the user chooses this option, they are logged out and offered the option, as at the beginning, to sign up, log in, or change the password.
            
//             # Withdraw Money:
//             - If the user chooses this option, they can withdraw an amount from their bank (not exceeding the available amount).
            
//             # Deposit Money:
//             - If the user chooses this option, they can deposit the desired amount (not exceeding 1000 dirhams).
            
//             # Take a Loan:
//             - If the user chooses this option, they can take a loan up to 20% of what they already have.
//             - They receive an additional 20%, but lose 10% with each login until reaching the amount of their loan.
            
//             # Invest:
//             - If the user chooses this option, they can invest any amount in the bank.
//             - Upon the next login, they will receive 20% of their investment each time until reaching 120% (earning 20% on each investment).
            
//             # History:
//             - Ability to view the entire transaction history.





let myData = [
    {
        name: "Youssef Maslouhy",
        email: "youssef@gmail.com",
        age: 24, 
        password: '123456789#',
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