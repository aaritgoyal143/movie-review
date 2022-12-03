var firebaseConfig = {
    apiKey: "AIzaSyBPBYWp9HzY3RHdZi5PUvrPD3zpzTNAk6E",
    authDomain: "kwitter-d1ae0.firebaseapp.com",
    databaseURL: "https://kwitter-d1ae0-default-rtdb.firebaseio.com",
    projectId: "kwitter-d1ae0",
    storageBucket: "kwitter-d1ae0.appspot.com",
    messagingSenderId: "54458317450",
    appId: "1:54458317450:web:aaab2a9d5754f3a552cb73"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS
function adduser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}