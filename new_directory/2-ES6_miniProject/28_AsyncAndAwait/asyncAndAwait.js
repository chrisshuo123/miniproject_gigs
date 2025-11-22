const photos = [];

async function photoUpload() {
    let uploadStatus = new Promise( (resolve, reject) => {
        setTimeout(() => {
            const error = false;
            if(error) {
                reject("Sorry, there's no photos Uploaded")
            } else {
                photos.push("Profile Pic 1");
                photos.push("Profile Pic 2");
                photos.push("Profile Pic 3");
                resolve("Your photo has been Uploaded!")
            }
        }, 3000)
    })
    let result = await uploadStatus;

    console.log(result);
    console.log(photos.length);
}

photoUpload();