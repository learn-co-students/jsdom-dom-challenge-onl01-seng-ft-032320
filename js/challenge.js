document.addEventListener("DOMContentLoaded", () => {
    //
    // 1. the timer increment every second once the page has loaded.
    let counter = document.getElementById('counter');
    let intervalId = setInterval(count, 1000);

    function count() {
        ++counter.innerText;
    }
    // 2. manually increment and decrement the counter using the plus and minus buttons.
    let minus = document.getElementById('minus');
    minus.addEventListener('click', function(event) { 
        --counter.innerText;
      }, 
      false);

    let plus = document.getElementById('plus');
    plus.addEventListener('click', function(event) { 
        ++counter.innerText;
      }, 
      false);
    
    // 3. 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.


    // dataset


    let heart = document.getElementById('heart');
    heart.addEventListener('click', function(event) { 
        event.preventDefault();
        let likes = document.querySelector('.likes');

       let el = document.getElementById(counter.innerText)

        if (el){
            el.dataset.like++
            
        }
        else { 
            el = document.createElement('li');
            el.id = counter.innerText
            el.dataset.like = "1"
            likes.appendChild(el);
            
        }

        el.innerText = `${counter.innerText} has been liked ${el.dataset.like} times`;
    }, 
    false);



    // 4. pause the counter, which should
    //      4a. pause the counter

    let pauseButton = document.getElementById('pause');
    let pause = document.getElementById('pause');
    pause.addEventListener('click', function(event) { 
          if (pauseButton.innerHTML === ' pause '){
              clearInterval(intervalId)
              pauseButton.innerHTML = ' resume ';
              minus.disabled = true;
              plus.disabled = true;
              heart.disabled = true;
              submit.disabled = true;
          }
          else {
              intervalId = setInterval(count, 1000);
              pauseButton.innerHTML = ' pause ';
              minus.disabled = false;
              plus.disabled = false;
              heart.disabled = false;
              submit.disabled = false;
          }
  
          
        }, 
        false);
    //      4b. disable all buttons except the pause button
    //      4c. the pause button should then show the text "resume."
    //      4d. When 'resume' is clicked, it should restart the counter and re-enable the buttons.

    // 5. A user can leave comments on my gameplay
    let submit = document.getElementById('submit');
    let commentsList = document.getElementById('list');
    submit.addEventListener('click', function(event) { 
      let newComment = document.getElementById('comment-input').value;
      event.preventDefault();
      let pTag = document.createElement('p');
      commentsList.appendChild(pTag);
      pTag.innerHTML = newComment;
      document.getElementById('comment-input').value = ""
    }, 
    false);
  
  
  
  
  });