//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD4m7n7oAP8rP9sl6_Ht_jYoIBlJRKi-vM",
  authDomain: "telugu-4575b.firebaseapp.com",
  databaseURL:"https://telugu-4575b-default-rtdb.firebaseio.com",
  projectId: "telugu-4575b",
  storageBucket: "telugu-4575b.appspot.com",
  messagingSenderId: "776015890123",
  appId: "1:776015890123:web:2eb4e08fb20727295cbd4e"
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
    window.location = "telugu_page.html";
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
    window.location = "telugu_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name"); 
    window.location ="index.html";
}