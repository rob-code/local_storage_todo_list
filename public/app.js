var init = function(){
  var state = JSON.parse(localStorage.getItem('todoList')) || {};
  var list = document.querySelector('#todo-list');
  var button = document.querySelector('button');
  var dropDown = document.querySelector('select');


  button.onclick = handleClick;
  dropDown.onchange = handleSelection;


  populate(list, state);
}


var handleSelection = function(){
  var name = this.value;

   //populate()

   return name

}

var populate = function(list, state){
  //for each item in the state, invoke addItem

  state.forEach(function(item){
    addItem(list, item);
  })


}

var addItem = function(list, item){

  var li = document.createElement("li");
  li.innerText = item;
  list.appendChild(li);


  //add an item to the list
}

var handleClick = function(){
  var newItem = document.querySelector("#new-item")
  var list = document.querySelector('#todo-list');

  var name = handleSelection();
  console.log(name)
  addItem(list, newItem.value)
  save(newItem.value, name)
  newItem.value = "";


  //get the value of the input box
  //get the "todo-list" element from the DOM
  //invoke addItem
  //invoke save
}

var save = function(item, name){
  var temp = JSON.parse(localStorage.getItem('todoList'));
  console.log(temp)
  temp[name].push(item)
  console.log(temp)
  var data = JSON.stringify(temp)
  console.log(data)
  localStorage.setItem("todoList", data)
}

window.onload = init;

//ADVANCED: create a drop-down of many to-do lists that are stored in localStorage
//HINT: you'll have to use a different data structure (an array of objects maybe?)
