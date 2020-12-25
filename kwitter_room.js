
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyD1qBtV87eiNHkqjdStCjeut5o3JcZuKSM",
      authDomain: "kwitter-22859.firebaseapp.com",
      projectId: "kwitter-22859",
      storageBucket: "kwitter-22859.appspot.com",
      messagingSenderId: "782247521230",
      appId: "1:782247521230:web:cbd5d86f6cf65526ce999f"
    };
    // Initialize Firebase
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
