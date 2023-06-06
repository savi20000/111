function displayInfo(res) {
    let users = res.data;
    let list = document.querySelector('ul');
    if (list != null) list.remove();
    const ul = document.createElement('ul');
    for (let user of users) {
        let li = document.createElement('li');
        li.textContent = "@" + user.name + " : " + user.text;
        ul.appendChild(li);
        document.body.appendChild(ul);
    }
    console.log(users);
}
const url = "http://localhost:5005/users";
// axios.get(url).then(function(response) {
//     // Get the status code from the response object
//     const statusCode = response.status;
//     // Display the status code on the webpage
//     const statusCodeElement = document.querySelector(statusCode);
//     statusCodeElement.textContent = statusCode;
//     displayInfo(response)
// })
// .catch(function(error) {
//     // Handle any errors that occurred during the request
//     console.error('Error:', error);
// });
function addText() {
    const text = document.querySelector('#text').value;
    // if (!text) {
    //     console.log('Invalid text input :400');
    //     return;
    // }
    let user = {name: "unknown", text: text};
    // TODO : handle POST return status code
    axios.post(url, user).then(function(response){
        if (response.status == 200) {
            console.log("Valid response status- 200")+
            displayInfo(response);
        } else {
            console.log('Unexpected response status- 400:', response.status);
        }
    })
    .catch(function(error){
        console.log('Error ocurred while making the POST request :',error);
    });
}
// const url = "http://localhost:5005/users";
// axios.get(url).then(displayInfo);
const btnAdd = document.querySelector('button');
btnAdd.addEventListener('click', addText);