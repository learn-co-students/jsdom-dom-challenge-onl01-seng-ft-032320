let playing = true,
    timer = function(){
        return setInterval(function() {
            let a = document.getElementById("counter"),
                b = parseInt(a.innerText);
            a.innerText = b + 1;
        }, 1000)
    },
    interval = timer(),
    minus = document.getElementById("minus"),
    plus = document.getElementById("plus"),
    heart = document.getElementById("heart"),
    pause = document.getElementById("pause"),
    commentForm = document.getElementById("comment-form"),
    submit = document.getElementById("submit");


minus.addEventListener("click", function(e) {
    let a = document.getElementById("counter"),
        b = parseInt(a.innerText);
    a.innerText = b - 1;
});

plus.addEventListener("click", function(e) {
    let a = document.getElementById("counter"),
        b = parseInt(a.innerText);
    a.innerText = b + 1;
});

heart.addEventListener("click", function(e) {
    let ul = document.querySelector(".likes"),
        counter = document.getElementById("counter"),
        li;
    if (ul.querySelector(`li[data-num='${counter.innerText}']`)) {
        li = ul.querySelector(`li[data-num='${counter.innerText}']`)
        li.dataset.count++;
    } else {
        li = document.createElement("li")
        li.dataset.count = 1;
        li.dataset.num = document.getElementById("counter").innerText;
        ul.appendChild(li);
    }
    li.innerText = `${li.dataset.num} has been liked ${li.dataset.count} times!`
});

pause.addEventListener("click", function(e) {
    if (playing) {
        playing = false;
        minus.disabled = true;
        plus.disabled = true;
        heart.disabled = true;
        this.innerText = "resume";
        submit.disabled = true;
        clearInterval(interval);
    } else {
        playing = true;
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
        this.innerText = "pause";
        submit.disabled = false;
        interval = timer();
    }
});

function submitFunction(e) {
    if (playing) {
        let a = document.getElementById("list"),
            b = document.createElement("p");
            c = document.getElementById("comment-input")
        b.innerHTML = c.value;
        c.value = "";
        a.appendChild(b);
    }

    e.preventDefault();
}
commentForm.addEventListener("submit", submitFunction);
