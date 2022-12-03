//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCcsazcO_uUMbvlC7EqNhrE8zhCHpFwGLo",
    authDomain: "punjabi-b4a79.firebaseapp.com",
    databaseURL:"https://punjabi-b4a79-default-rtdb.firebaseio.com",
    projectId: "punjabi-b4a79",
    storageBucket: "punjabi-b4a79.appspot.com",
    messagingSenderId: "72159604252",
    appId: "1:72159604252:web:1feaf2a028e2fa9e1079d9"
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
    window.location = "punjabi_page.html";
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
    window.location = "punjabi_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name"); 
    window.location ="index.html";
}