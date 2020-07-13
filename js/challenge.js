let counter = document.querySelector('#counter');
let plus = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let heart = document.querySelector('#heart');
let pause = document.querySelector('#pause');
let submit = document.querySelector('#submit');
let list = document.querySelector("div#list");
let form = document.querySelector("form#comment-form");
let comment = document.querySelector("form#comment-form > #comment-input");

document.addEventListener('DOMContentLoaded', () => {
    let countSeconds = setInterval(function () {
        counter.innerText++;
    }, 1000);

    plus.addEventListener('click', function(){
        counter.innerText++;
    });

    minus.addEventListener('click', function(){
        counter.innerText--;
    });

    heart.addEventListener("click", function(){
        let likes = document.querySelector("ul");
        let li = document.createElement("li");
        li.setAttribute("data-num", countSeconds);
        li.innerText = `${counter.innerText} has been liked `;
        likes.appendChild(li);
      });

    pause.addEventListener("click", function(){
        if (pause.innerText === 'pause') {
            pause.innerText = 'resume';
            clearInterval(countSeconds);

            plus.disabled === true;
            minus.disabled === true;
            heart.disabled === true; 
            submit.disabled === true;
        } else {
            let countSeconds = setInterval(function () {
                counter.innerText++;
            }, 1000);
            pause.innerText = 'pause';
            plus.disabled === false;
            minus.disabled === false;
            heart.disabled === false; 
            submit.disabled === false;
        }
    });

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        let p = document.createElement('p');
        p.innerText = comment.value;
        list.appendChild(p);
    })

});

