document.addEventListener("DOMContentLoaded", () => {
    addComment();
    numberCounter();


    // Number Counter functionality
    function numberCounter() {
        const numberDisplay = document.querySelector('#counter');
        const likes = document.querySelector(".likes");
        const plusButton = document.querySelector('#plus');
        const minusButton = document.querySelector('#minus');
        const likeButton = document.querySelector('#heart');
        const pauseButton = document.querySelector('#pause');
        let counter = parseInt(numberDisplay.innerHTML, 10);
        let life = true;

        // Timer incrementing by second
        let timer = setInterval(function() {
            if (life){
                numberDisplay.innerHTML = ++counter;
            }
        }, 1000);

        
        plusButton.addEventListener("click", (e) => {
            numberDisplay.innerHTML = ++counter;
        });

        minusButton.addEventListener("click", (e) => {
            numberDisplay.innerHTML = --counter;
        });

        likeButton.addEventListener("click", (e) => {
            if(document.querySelector(`#li${counter}`) == null) {
                let li = document.createElement("li");
                li.setAttribute("id", `li${counter}`);
                li.innerHTML = `${counter} has been liked 1 time`;
                likes.appendChild(li);
            } else {
                let li = document.querySelector(`#li${counter}`);
                let splitted = parseInt(li.innerHTML.split(" ")[4]) + 1;
                li.innerHTML = `${counter} has been liked ${splitted} times`;
                likes.appendChild(li);
            }
            
        });

        // Pause the counter and disable - + <3 buttons
        pauseButton.addEventListener("click", (e) => {
            if(life) {
                pauseButton.innerHTML = "Resume";
                minusButton.disabled = true;
                plusButton.disabled = true;
                likeButton.disabled = true;
                life = false;
            } else {
                pauseButton.innerHTML = "Pause";
                minusButton.disabled = false;
                plusButton.disabled = false;
                likeButton.disabled = false;
                life = true;
            }
        });
    }


    // Comment Functionality
    function addComment() {
        const commentForm = document.querySelector("#comment-form");
        const commentBox = document.querySelector("#comment-input");
        const comments = document.querySelector("#list");

        commentForm.addEventListener("submit", (e) => {
            e.preventDefault();
            let li = document.createElement("li");
            li.innerText = commentBox.value;
            comments.append(li);
            e.target.reset();
        });
    }
});
