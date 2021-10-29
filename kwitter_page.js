var firebaseConfig = {
      apiKey: "AIzaSyAp-XWasqJfWLNjNZ2iFgPq2fti42m6YMc",
      authDomain: "class94-69c3a.firebaseapp.com",
      databaseURL: "https://class94-69c3a-default-rtdb.firebaseio.com",
      projectId: "class94-69c3a",
      storageBucket: "class94-69c3a.appspot.com",
      messagingSenderId: "147723291656",
      appId: "1:147723291656:web:233daf242bfef64d3555bd",
      measurementId: "G-Z67X4RL7BR"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name"); 
room_name = localStorage.getItem("room_name");
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
 name = message_data['name'];
 message = message_data['message'];
 like = message_data['like'];
 name_with_tag = "<h4>"+ name + "<img class='user_tick' src='tick.png'></h4>";
 message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
 like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick'updateLike(this.id)'>";
 span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
 row = name_with_tag + message_with_tag + like_button + span_with_tag;
 document.getElementById("output").innerHTML += row;  
//End code 
      } });  }); }
getData();
function updateLike(message_id) 
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}