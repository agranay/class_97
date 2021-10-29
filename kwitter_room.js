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
//ADD YOUR FIREBASE LINKS HERE
function addRoom(){
      room_name = document.getElementById("room_name").value;
  
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    console.log("Room Name - " + room_name);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName (name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";    
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}