//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC6bfdjFWg6iOa8b1wKTmTQTEHhi680yDM",
    authDomain: "gujrati-bc365.firebaseapp.com",
    databaseURL: "https://gujrati-bc365-default-rtdb.firebaseio.com",
    projectId: "gujrati-bc365",
    storageBucket: "gujrati-bc365.appspot.com",
    messagingSenderId: "618017454850",
    appId: "1:618017454850:web:4470713529d3e65acb201b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addroom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "gujrati_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            row = "<div class='room_name' id=" + Room_names + " onclick='redirect(this.id)'>#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
            //End code
        });
    });
}
getData();

function redirect(name) {
    localStorage.setItem("room_name", name);
    window.location = "gujrati_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}