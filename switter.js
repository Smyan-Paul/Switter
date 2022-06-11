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
room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name : user_name , 
            message : msg ,
            like : 0 
      });
      document.getElementById("msg").value = "";
}

function back()
{
    window.location = "let'schat.html"
}