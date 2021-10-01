const btnAdd = document.querySelector( '#add' );
const btnReduce = document.querySelector( '#reduce' ); 
let number = 0; 

const add = function adding() {
  number += 1;
  
  if (number > 0) {
    document.querySelector( '#counter' ).style.color = "#008000";
  }
  else {
    if (number < 0) {
      document.querySelector( '#counter' ).style.color = "#ff0000";
    }
  }
  document.querySelector( '#counter' ).innerHTML = number;
} 

const rest = function resting() {
  number -= 1;
  
  if (number > 0) {
    document.querySelector( '#counter' ).style.color = "#008000";
  }
  else {
    if (number < 0) {
      document.querySelector( '#counter' ).style.color = "#ff0000";
    }
  }
  document.querySelector( '#counter' ).innerHTML = number;
}

btnAdd.addEventListener( 'click', add );
btnReduce.addEventListener( 'click', rest );