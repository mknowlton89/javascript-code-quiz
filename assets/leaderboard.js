// let userArray = JSON.parse(localStorage.getItem("userList"));

// console.log(userArray);

// // userArray.sort((b, a) => a.score > b.score);

// console.log(userArray);

let listEl = document.getElementById("list");

function printWinners(){

    userArray.sort(compare);
    
    for (let i = 0; i < userArray.length; i++) {
        let initials = userArray[i].initials;
        let score = userArray[i].score;

        let entry = document.createElement('li');

        entry.appendChild(document.createTextNode(initials + " " + score));

        listEl.appendChild(entry);
    }
}

function compare(b, a) {
    const userA = a.score;
    const userB = b.score;

    let comparison = 0;
    if (userA > userB) {
        comparison = 1;
    } else if (userA < userB) {
        comparison = -1;
    }
    return comparison;
}

printWinners();

