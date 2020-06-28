document.addEventListener('DOMContentLoaded', () => {

    const counter = document.getElementById('counter')

    let count = setInterval(function () {
        counter.innerText++; 
    }, 1000);

    const minus = document.getElementById('minus')
    const plus = document.getElementById('plus')
    const heart = document.getElementById('heart')
    const pause = document.getElementById('pause')
    const likes = document.querySelector(".likes")
    const submit = document.getElementById('submit')
    const comments = document.querySelector('#list')

    // minus button
    minus.addEventListener('click', function() {
        counter.innerText--;
    });
    
    // plus button
    plus.addEventListener('click', function() {
        counter.innerText++;
    });

    // heart button
    heart.addEventListener('click', function() {
        let obj = document.getElementById(`${counter.innerText}`);
        obj ? obj.children[0].innerText++ : 
        likes.innerHTML += `<li id=${counter.innerText}>${counter.innerText} is liked <span id=${counter.innerText}>1</span> times.</li>`
    });

    pause.addEventListener('click', function() {
        if (pause.innerText == 'pause') {
            pause.innerText = 'resume'
            clearInterval(count)
            plus.disabled = true;
            minus.disabled = true;
            heart.disabled = true; 
            submit.disabled = true;
        }
        else {
            count = setInterval(function () {
                counter.innerText++; 
            }, 1000);
            pause.innerText = "pause"
            plus.disabled = false;
            minus.disabled = false;
            heart.disabled = false; 
            submit.disabled = false;
        }
     });

     submit.addEventListener('click', function(e) {
        e.preventDefault();
        let comment = document.querySelector("#comment-form > input[type=text]").value
        comments.innerHTML += `<li>${comment}</li>`
        document.querySelector("#comment-form").reset();
     });
})