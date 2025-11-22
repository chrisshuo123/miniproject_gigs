const buyFlightTicket = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const error = false; // << NOTE: Pay attention to this
            // Change it to true to test error case, and false to test success.

            if(error) {
                reject("Sorry your payment was not successfull");
            } else {
                resolve("Thank you, your payment was successfull");
            }
        }, 3000)
    });
}

// buyFlightTicket
// .then((success) => "Catch successfull")
// .catch((error) => "failed to return due to error");

buyFlightTicket()
.then( (success) => console.log(success) )
.catch( (error) => console.log(error) );

