var firebaseConfig = {
      apiKey: "AIzaSyAMGS4rk4XFCLWkSFgG1GbI-nxRytCkCFc",
      authDomain: "kwitter-bc622.firebaseapp.com",
      projectId: "kwitter-bc622",
      storageBucket: "kwitter-bc622.appspot.com",
      messagingSenderId: "81355538959",
      appId: "1:81355538959:web:514a83bf8248c17ae8597a"
    };
    
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
