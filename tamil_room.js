//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBbu-7AFx1-3TE9OAEiBwRb0syYaugx5QA",
    authDomain: "tamil-68e98.firebaseapp.com",
    databaseURL: "https://tamil-68e98-default-rtdb.firebaseio.com",
    projectId: "tamil-68e98",
    storageBucket: "tamil-68e98.appspot.com",
    messagingSenderId: "528160330025",
    appId: "1:528160330025:web:3d0655ae1d458761e7e738"
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
    window.location = "tamil_page.html";
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
    window.location = "tamil_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name"); 
    window.location ="index.html";
}