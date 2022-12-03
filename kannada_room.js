//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBxfvtyBM_2m90AL9lFwM5eyyky7de9Ezw",
    authDomain: "kannada-b0007.firebaseapp.com",
    databaseURL: "https://kannada-b0007-default-rtdb.firebaseio.com/",
    projectId: "kannada-b0007",
    storageBucket: "kannada-b0007.appspot.com",
    messagingSenderId: "252391687427",
    appId: "1:252391687427:web:38d52a0a8bcda469575536"
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
    window.location = "kannada_page.html";
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
    window.location = "kannada_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name"); 
    window.location ="index.html";
}