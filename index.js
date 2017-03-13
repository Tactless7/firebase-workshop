(function(){
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDBIDtszA7lTAuMdvlJBWtuyDkBKlChL1o",
      authDomain: "todo-list-59e4a.firebaseapp.com",
      databaseURL: "https://todo-list-59e4a.firebaseio.com",
      storageBucket: "todo-list-59e4a.appspot.com",
      messagingSenderId: "916435756004"
    };
    firebase.initializeApp(config);



  var formulaire = document.getElementById("mon-formulaire");
  formulaire.addEventListener('submit', function(event){
    event.preventDefault();
    var task = document.getElementById("task");
    var addTask = task.value;
    console.log(addTask);
    addToDB(addTask);
  });

function addToDB(data){
  firebase.database().ref('/items').push().set({
    id : 4000,
    createdAt : Date.now(),
    content : data,
    status : "fait"
  });
}


})();
