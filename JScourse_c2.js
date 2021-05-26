// CLASE 2

/*
Aprendizajes
------------

1= 'use strict' para escribir codigo JS seguro para evitar bugs y errores del programador
    hace visibles errores de logica o sintaxis en la consola



*/

'use strict';


// dynamic arrays
function dynamicArray(){
  let array = []
  for(let i=0;i<10;i++){
    array.push(i);
  }
  console.log(array);
  let text = document.getElementById('array');
  text.innerHTML = "<h4>Dynamic array:</h4>" + array;

  for(let i=0;i<10;i++){
    array.pop(i);
  }
  console.log(array);


}

// sets
function sets(){
  let set = new Set();
  for(let i=0;i<10;i++){
    set.add(i);
  }
  console.log(set);
  let text = document.getElementById("set");
  text.innerHTML = "<h4>Set:</h4>" + JSON.stringify(set, null, 4);

  for(let i=0;i<10;i++){
    if(set.has(i)){
      set.delete(i);
    }
  }
  console.log(set);
}

// dictionaries
function dictionaries(){
  let dictionary = {}
  for(let i = 0;i<10;i++){
    if(i in dictionary){
      dictionary[i] = "ya existia";
    }else{
      dictionary[i] = "nuevo";
    }
  }
  console.log(dictionary);

  for(let i = 0;i<10;i+=2){
    if(i in dictionary){
      dictionary[i] = "ya existia";
    }else{
      dictionary[i] = "nuevo";
    }
  }

  console.log(dictionary);

  let text = document.getElementById("dictionary");
  text.innerHTML = "<h4>Dictionary:</h4>" + JSON.stringify(dictionary, null, 4);

}

dynamicArray();
sets();
dictionaries();
