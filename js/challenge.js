const timerDisplay = document.getElementById("counter");

const minusButton = document.getElementById("minus");

const plusButton = document.getElementById("plus");

const  likes = document.querySelector("ul.likes");

const  heart = document.querySelector("button#heart");

const pause = document.querySelector("#pause");

let newLikes = {

}

let isPaused = false; 

// function increment() {
//   timerDisplay.innerText = parseInt(timerDisplay.innerText) + 1
// }

// function decrement() {
//   timerDisplay.innerText = parseInt(timerDisplay.innerText) - 1
// }


document.addEventListener("DOMContentLoaded", (event) => {

    // need to increase the counter and display it 
    let counter = 0 

    
    setInterval(function () { 
      if(!isPaused) {
        timerDisplay.innerText = counter.toString();
        counter = counter + 1; 
      }

      }, 1000);



//--------------------------step 2--------------------------------------------
  
  let currentCount = document.querySelector("#counter")
  
  // add event listener to lisent to click events for subtrack button
  minusButton.addEventListener("click", () => {
    // get the current count did this in the global scope so I do not have to do it twice
      
    // remove one from the current count and update the counter varialbe
      counter = parseInt(timerDisplay.innerText) - 1;
      timerDisplay.innerText = counter
  });
  
  
  
  
  // add event listener to lisent to click events for add button
  plusButton.addEventListener("click", () => {
    // get the current count did this in the global scope so I do not have to do it twice
    
    // add one from the current count 
    counter = parseInt(timerDisplay.innerText) + 1;
    timerDisplay.innerText = counter
  });





  //-----------------step 3 -------------------------------

  //  On click on the heart buttom does something 
  heart.addEventListener( "click", () => {
   
    const key = parseInt(timerDisplay.innerText);
    

    
    // if the key already exist add one to its value. No need to create a Li element or appended to parent Lu since 
    // that was already done when the key did not exist. Only reassigning the Inner test that will appear on the DOM
    if (newLikes[key]) {
      newLikes[key] +=1
      document.getElementById(`like-${key}`).innerText =  `${key} has been liked ${newLikes[key]} times`
    // since there li element, one is created the parameter id is added to it and appended to parent lu.  
    } else  {
    
      newLikes[key] = 1
      const likesLi = document.createElement("li");
      likesLi.setAttribute("id", `like-${key}`)
      likes.appendChild(likesLi)
      document.getElementById(`like-${key}`).innerText =  `${key} has been liked ${newLikes[key]} time`
    }

    
  });
    
  //--------------step 4-----------------------

  // As a user, I can pause the counter, which should
  // pause the counter
  // disable all buttons except the pause button
  // the pause button should then show the text "resume."
  // When 'resume' is clicked, it should restart the counter and re-enable the buttons.
  
  // create a variable to store the pause element 
  
  // create an event that acts on a click of the puase buttom 
  pause.addEventListener("click", () => {
    // we want to disable the buttons on click if they are ename 
    if (minusButton.disabled != true) {
      minusButton.disabled = true; 
      plusButton.disabled = true;
      heart.disabled = true; 
      pause.innerText = "resume";
      isPaused = true; 
    } else {
      minusButton.disabled = false; 
      plusButton.disabled = false;
      heart.disabled = false; 
      pause.innerText = "pause"
      isPaused = false; 
    }

  });

  // -----------------------Step 5 ------------------------------------
  // create submit button element.
  const submit = document.querySelector("#submit");
  // create a commentUser element to collect the value pass by the user. 
  const commentUser = document.querySelector("#comment-form input"); 
  // create an element to point to the comments h3 tag
  const comments = document.querySelector("div#list ul"); 

  // create an event listener on the submit buttom on click 
    submit.addEventListener("click", (event) => {
    // prevent default behavior since we do not want this do be sending an http post request. 
    event.preventDefault()
    // create a new li element
    let liElement = document.createElement("li")
    

    // update p element inner text to contain value pass by the form 
    liElement.innerText = commentUser.value
    // append the li element to the h3
    comments.appendChild(liElement);
    });


  












});
  
  

