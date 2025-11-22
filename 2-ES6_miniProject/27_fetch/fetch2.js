const newComment = {
    postId: 1,
    name: 'Dylan',
    email: 'dylanemail301@gmail.com',
    body: 'That was Dope!'
};

fetch('https://jsonplaceholder.typicode.com/comments', {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({newComment})
})
.then(response => response.json())
.then(data => console.log(data))