document.addEventListener('DOMContentLoaded', ()=> {
    let counterDisplay = document.getElementById('counter');
    let plusButton = document.getElementById('plus');
    let minusButton = document.getElementById('minus');
    let pauseButton = document.getElementById('pause');
    let likeButton = document.getElementById('heart');
    let intervalID = window.setInterval(timerIncrease, 1000);
    let submitButton = document.getElementById('submit');
    let counter = true

    likeButton.addEventListener('click', likeTime)
    plusButton.addEventListener('click', timerIncrease)
    minusButton.addEventListener('click', timerDecrease)
    pauseButton.addEventListener('click', pauseTimer)
    submitButton.addEventListener('click', addComment)
    


    function pauseTimer() {
    
        if (counter) {
            window.clearInterval(intervalID);
            counter = false
        }
        else {
            intervalID = window.setInterval(timerIncrease, 1000);
            counter = true
        }
    }

})

function likeTime() {
    let likesBin = document.getElementsByClassName('likes');
    let currentCount = document.getElementById('counter').innerText;


    let newLike = document.createElement('li');
    newLike.id = currentCount
    newLike.innerText = `Number ${currentCount} has been liked`;
    

    likesBin[0].appendChild(newLike);
}

function timerIncrease() {
    let counterDisplay = document.getElementById('counter')
    counterDisplay.innerText++
}

function timerDecrease() {
    let counterDisplay = document.getElementById('counter');
    counterDisplay.innerText--
}

function addComment() {
    let commentDisplay = document.getElementById('list');
    let commentInput = document.getElementById('comment-input')
    let newCommentPin = document.createElement('p')
    newCommentPin.innerText = commentInput.value
    commentDisplay.appendChild(newCommentPin)
}

