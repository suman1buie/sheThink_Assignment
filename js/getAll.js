//get the data from local storage
let Name = localStorage.getItem("name");
let phone = localStorage.getItem("phoneNumber");
let email = localStorage.getItem("email");
let hoby = localStorage.getItem("hoby");
let message = localStorage.getItem("message");

//create all html tag regarding there details
let mainDiv = document.getElementById("main");
let nameItem = document.createElement("h2");
let phoneItem = document.createElement("h4");
let emailItem = document.createElement("h4");
let hobyItem = document.createElement("h6");
let messageItem = document.createElement("p");

//put data into that html
nameItem.innerHTML = "Name is :" + "  " + Name;
phoneItem.innerHTML = "Phone number :" + "  " + phone;
emailItem.innerHTML = "Email is :  " + email;
hobyItem.innerHTML = "Hoby is: " + hoby;
messageItem.innerHTML = "<p>Question is : </p>" + message;

//style the div
mainDiv.style.textAlign = "center";
mainDiv.style.width = "100%";
mainDiv.style.height = "600px";
mainDiv.style.backgroundColor = "lightgreen";

//add on html div
mainDiv.appendChild(nameItem);
mainDiv.appendChild(phoneItem);
mainDiv.appendChild(emailItem);
mainDiv.appendChild(hobyItem);
mainDiv.appendChild(messageItem);
