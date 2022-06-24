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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         Name = message_data['name'];
         Message = message_data['message'];
         Likes = message_data['like'];
         name_with_tag = "<h4>" + Name + "<img class= 'user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>"+ Message + "</h4>";
         like_button  = "<button class = 'btn btn-warning' id =" + firebase_message_id + "value = " +Like+ "onclick = 'updateLike(this.id)'>";
         span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up' >Like : "+Likes+"</span> </button> <hr>";
         row = name_with_tag + message_with_tag + like_button + span_with_tag;
         document.getElementById("output").innerHTML += row; 
      } });  }); }
getData();

function updateLike(message_id)
{
      console.log("clicked on the like button - " + message_id);
      button_id = message_id;
      Likes = document.getElementById(button_id).value;
      updated_likes = Number(Likes) + 1;
      console.log(updated_likes);
      firebase.database().ref(room_nam).child(message_id).update({
            like : updated_likes
      });
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
