let users_get = [
    {
        "id": "SbBGk",
        " name": "....",
    }, {
        "id": "SbBGfez",
        " name": "....",
    }
]

const user_post = {
    name: "...."
}

const messages_get = [
    {
        "id": "SbBGk",
        "text": "....",
    }, {
        "id": "SbBGfez",
        "text": "....",
    }
]

const message_post = {
    "id": "SbBGk",
    "text": "....",
}


const content = document.querySelector('#rightSide');
// query selector the id rightSide

//pulls the user info based on users_get, their id, & their name
function getUserInfo(users_get, id, name) {
    //returns the current user's information
    let currentUser = users_get.forEach(user => {
        if(user.id === id && user.name === name) {
            return user;
        }        
    });
        
    //creates Unordered List for User Info
    const userInfoArea = document.createElement('ul');
    
    //creates li element for first name and populates it with current user's first name 
    const firstNameArea = document.createElement('li');
    firstNameArea.setAttribute('id', 'firstName');
    firstNameArea.innerText = `First Name: ${currentUser.firstName}`;
    
    //creates li element for last name and populates it with current user's last name
    const lastNameArea = document.createElement('li');
    lastNameArea.setAttribute('id', 'lastName');
    lastNameArea.innerText = `Last Name: ${currentUser.lastName}`;
    
    //creates li element for username and populates it with current user's username
    const usernameArea = document.createElement('li');
    usernameArea.setAttribute('id', 'username');
    usernameArea.innerText = `Username: ${currentUser.username}`;
    
    //creates li element for email and populates it with current user's email
    const emailArea = document.createElement('li');
    emailArea.setAttribute('id', 'email');
    emailArea.innerText = `Email: ${currentUser.email}`;
    
    //creates li element for bio and populates it with current user's bio
    const bioArea = document.createElement('li');
    bioArea.setAttribute('id', 'bio');
    bioArea.innerText = `Bio: ${currentUser.bio}`;

    //appends each li to the ul
    firstNameArea.appendChild(userInfoArea);
    lastNameArea.appendChild(userInfoArea);
    usernameArea.appendChild(userInfoArea);
    emailArea.appendChild(userInfoArea);
    bioArea.appendChild(userInfoArea);

    //query selector for the id leftSide
    const userInfo = document.querySelector('#leftSide');
    
    //appends user info to left div
    userInfoArea.appendChild(userInfo)
}
