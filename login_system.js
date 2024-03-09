/* 
You are working on a user authentication module for a web application Implement error handling for the 
login process Create a function login that simulates the user login process The function should take the 
username and password as parameters and throw errors under certain conditions

If the username is not provided, throw an error indicating "Username is required"

If the password is not provided, throw an error indicating "Password is required"
 
If the username and password do not match any valid credentials, throw an error indicating "Invalid 
username or password"
*/


function login(username, password){
  
    const hasUppercase = /[A-Z]/.test(username[0]);

    if(!username || !hasUppercase){
        throw new Error("Username is Invalid");
    }

    const hasNumber = /\d/.test(password);
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasSpecialChar = /[\W_]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);

    if(!hasNumber || !hasLetter || !hasSpecialChar || !hasUpperCase){
        throw new Error("Password must contain at least one number, letter, special character, and uppercase letter");
    }
 
    return "Login Successful";

}

try{
    console.log(login("Username", "Password1@"))
} catch(error){
    console.error(error.message)
}