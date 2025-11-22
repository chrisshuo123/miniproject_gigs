/**
 * Promises - Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
 * 
 * Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/

const userDataVerification = () => {
    return new Promise((userData, reject) => {
        setTimeout(() => {
            const error = false;
            // let firstName;
            // let lastName;
            // let age;
            // let email;

            if(error) {
                reject('Sorry, your User Data was not found');
            } else {
                userData = {
                    firstName: 'Chris', lastName: 'Shuo', age: 30, email: 'acs@email.com'
                };
                console.log(userData);
            }
        }, 3000)
    });
}

userDataVerification()
.then((success) => console.log(success))
.catch((error) => console.log(error));