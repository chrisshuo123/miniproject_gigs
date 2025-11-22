fetch('https://jsonplaceholder.typicode.com/comments', {
    method: "POST",
    body: JSON.stringify({})
})
.then(response => response.json())
.then(data => console.log(data))