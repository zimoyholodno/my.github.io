// var animateButton = function(e) {

//     e.preventDefault;
//     //reset animation
//     e.target.classList.remove('animate');
    
//     e.target.classList.add('animate');
//     setTimeout(function(){
//       e.target.classList.remove('animate');
//     },700);
//   };
  
//   var bubblyButtons = document.getElementsByClassName("main__button");
  
//   for (var i = 0; i < bubblyButtons.length; i++) {
//     bubblyButtons[i].addEventListener('click', animateButton, false);
//   }

// var open = document.getElementsByClassName("main__button");

// function Click__main () {
//     document.getElementsByClassName('authorization').style.display = 'block';
// }

function Click_main() {
    var authorizationElements = document.getElementsByClassName('authorization'); 
    // Если есть хотя бы один элемент
    if (authorizationElements.length > 0) {
    // Выбираем первый элемент из коллекции
      authorizationElements[0].style.display = "block"; 
      console.log("jfhkgughvgdrstyu");
    }
}

function closed() {
    // var authorizationElements = document.getElementsByClassName('authorization'); 
    // if (authorizationElements.length > 0) {
    //   authorizationElements[0].style.display = "none"; 
    //   console.log("jfhkgughvgdrstyu");
    // }

    var e = document.getElementsByClassName('authorization');
    if(e.style.display == 'block')
       e.style.display = 'none';
    else
       e.style.display = 'block';

   
}


function closed_reg(){
    var d = document.getElementsByClassName('registration');
    if(d.style.display == 'block')
        d.style.display = 'none';
    else
        d.style.display = 'block';
}

function open_reg() {
    var registrationElements = document.getElementsByClassName('registration'); 
    if (registrationElements.length > 0) {
        registrationElements[0].style.display = "block"; 
    }
    var e = document.getElementsByClassName('authorization');
    if(e.style.display == 'block')
       e.style.display = 'none';
    else
       e.style.display = 'block';
}

function open_main() {
    
}