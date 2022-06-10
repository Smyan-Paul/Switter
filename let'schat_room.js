var firebaseConfig = {
      apiKey: "AIzaSyAoFzX0vBh1Z2Xff8gW72IJ4KU3d8zSD5M",
      authDomain: "switter-c3659.firebaseapp.com",
      databaseURL: "https://switter-c3659-default-rtdb.firebaseio.com",
      projectId: "switter-c3659",
      storageBucket: "switter-c3659.appspot.com",
      messagingSenderId: "241608588508",
      appId: "1:241608588508:web:2f69703e9a6d0de47e0819"
    };
    
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name + " !";
    
    function addRoom()
    {
          room_name = document.getElementById('room_name').value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
          localStorage.setItem("room_name" , room_name);
          window.location = "switter_page.html";
    }
    
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
           Room_names = childKey;
          
           console.log("room name - " + Room_names);
           row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
           document.getElementById("output").innerHTML += row;
          });});}
    getData();
    
    function redirectToRoomName(name)
    {
          console.log(name);
          localStorage.setItem("room_name", name);
          window.location = "switter_page.html";
    }
