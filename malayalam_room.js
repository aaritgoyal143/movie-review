//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD1Dz6ma7PyGr2EFaY1q-6Yr-INK2xpY8c",
    authDomain: "malayalam-c69f5.firebaseapp.com",
    databaseURL:"https://malayalam-c69f5-default-rtdb.firebaseio.com",
    projectId: "malayalam-c69f5",
    storageBucket: "malayalam-c69f5.appspot.com",
    messagingSenderId: "667390358823",
    appId: "1:667390358823:web:4aeb1f08cc15cdac96e502"
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
    window.location = "malayalam_page.html";
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
    window.location = "malayalam_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name"); 
    window.location ="index.html";
}