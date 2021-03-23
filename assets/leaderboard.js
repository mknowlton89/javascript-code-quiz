let userArray = JSON.parse(localStorage.getItem("userList"));

let listEl = document.getElementById("list");

for (let i = 0; i < userArray.length; i++) {
    let initials = userArray[i].initials;
    let score = userArray[i].score;

    let entry = document.createElement('li');

    entry.appendChild(document.createTextNode(initials + " " + score));

    listEl.appendChild(entry);
}