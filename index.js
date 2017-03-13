(function(){
  var formulaire = document.getElementById("mon-formulaire");

  formulaire.addEventListener('submit', function(event){
    event.preventDefault();
    var task = document.getElementById("task");
  });

  listenNode("items");

  function listenNode(node){
      var itemList = firebase.database().ref(node);
      itemList.on('child_added', function(data){ // à l'ajout d'un child
      displayList(data.val().content);
    });
  }

  function displayList(data){
    var list = document.getElementById("my-list").appendChild(document.createElement('li'));
    list.innerHTML = data;
  }

})();
