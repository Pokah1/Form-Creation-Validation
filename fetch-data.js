const fetchUserData = async () => {
    const apiUrl =  'https://jsonplaceholder.typicode.com/users'
    

const dataContainer = document.getElementById("api-data");


try {
   const response = await fetch(apiUrl) 
   const users = await response.json()
//    console.log(users)
   dataContainer.innerHTML = ''

   const usersList = document.createElement("ul");

   users.forEach(user => {
    const li = document.createElement("li");
    li.textContent = user.name;
    usersList.appendChild(li);
   });

   dataContainer.appendChild(usersList);
} catch (error) {
    console.error('Error fetching data:', error);
    dataContainer.textContent = 'Failed to load user data.'
}
}

document.addEventListener("DOMContentLoaded", () => {
    fetchUserData();
})