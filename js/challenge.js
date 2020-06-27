document.addEventListener ("DOMContentLoaded", () => { 
  const plus = document.getElementById('plus');
  const minus = document.getElementById('minus');
  const pause = document.getElementById('pause');
  const heart = document.getElementById('heart');
  const commentForm = document.getElementById('comment-form');
  let paused;
  const counter = document.getElementById('counter');
  const counting = setInterval(incrementSeconds, 1000);

 
  loadEvents();
  
  function loadEvents() {
    plus.addEventListener("click", addCounter);
    minus.addEventListener("click", subtractCounter);
    pause.addEventListener("click", pauseOrResume);
    heart.addEventListener("click", likeNumber);
    commentForm.addEventListener("submit", submit)
  }

  let seconds = 0;

  function incrementSeconds() {
    seconds++;
    counter.innerText = seconds;
  }

  function addCounter() {
    let value = parseInt(counter.innerHTML);
    ++value;
    counter.innerHTML = value;
    console.log("the plus button was clicked.")
  }
  
  function subtractCounter() {
    let value = parseInt(counter.innerHTML);
    --value;
    counter.innerHTML = value;
    console.log("the minus button was clicked.")
  }

  function pauseOrResume() {
    if (!paused) {
      clearInterval(counting)
      paused = true;
      plus.disabled = true;
      minus.disabled = true;
      heart.disabled = true;
      pause.innerText = 'resume'
  
    } else if (paused) {
      paused = false;
      setInterval(incrementSeconds, 1000);
      plus.disabled = false;
      minus.disabled = false;
      heart.disabled = false;
      pause.innerText = 'pause'
    }
  }

  function likeNumber() {
    let number = document.getElementById(counter.innerText);
    let ul = document.getElementById('likes');
    let li;
    if (number === null) {
      li = document.createElement('li');
      li.id = counter.innerText;
      li.dataset.likes = 1
      ul.appendChild(li).innerText = `${li.id} was liked ${li.dataset.likes} time(s).`  
    } else {
      li = number
      li.innerText = `${li.id} was liked ${++li.dataset.likes} time(s).`
    }
  }

  function submit(e) {
    e.preventDefault();
    let input = document.getElementById('comment-input').value;
  
    if (input != '') {
      leaveComment(input);
      input = '';
    }
  }

  function leaveComment (text) {
    let ul = document.getElementById('list')
    let li = document.createElement('li');
    li.innerText = `${text}`
    ul.appendChild(li);
  }
  
});