//Declare Button Constants
const timerValue = document.getElementById("counter");
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const likeButton = document.getElementById("heart");
const pauseButton = document.getElementById("pause");
const submitButton = document.getElementById("submit");


document.addEventListener("DOMContentLoaded", function() {
    let timer = setInterval(incrementTimer, 1000) 

    minusButton.addEventListener("click", decrementTimer);
    
    plusButton.addEventListener("click", incrementTimer);

    likeButton.addEventListener("click", addLike);
    pauseButton.addEventListener("click", pauseTimer)
    
    submitButton.addEventListener("click", () => {
        event.preventDefault()
        let element = document.createElement("p");
        element.innerText = document.querySelector("#comment-input").value
        document.querySelector("#list").appendChild(element)
    });

    function pauseTimer() {
        if (pauseButton.innerText === "pause") {
            pauseButton.innerText = "resume"
            minusButton.disabled = true;
            plusButton.disabled = true;
            likeButton.disabled = true;
            submitButton.disabled = true;
            clearInterval(timer)
    
        } else {
            pauseButton.innerText = "pause"
            minusButton.disabled = false;
            plusButton.disabled = false;
            likeButton.disabled = false;
            submitButton.disabled = false;
            timer = setInterval(incrementTimer, 1000) 
        }
    }
});

const decrementTimer = () => {
    timerValue.innerHTML = parseInt(timerValue.innerText) - 1
};


function incrementTimer() {
    timerValue.innerHTML = parseInt(timerValue.innerText) + 1
};

function addLike() {
    let element = document.querySelector(`[data-num="${timerValue.innerText}"]`)
    if (element === null) {
        let element = document.createElement("li");
        element.dataset.num = timerValue.innerText;
        element.dataset.likes = 1
        element.innerText = `${timerValue.innerText} has 1 like`
        document.querySelector(".likes").appendChild(element);
    }   else {
        element.dataset.likes++
        element.innerText = `${timerValue.innerText} has ${element.dataset.likes} likes`
    }
};
