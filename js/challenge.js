document.addEventListener("DOMContentLoaded", () => {
  let isPaused = false;

  let counter = document.querySelector("h1#counter");
  let count = setInterval(() => counter.innerText++, 1000);

  let minus = document.querySelector("#minus");
  let plus = document.querySelector("#plus");
  let heart = document.querySelector("#heart");
  let pause = document.querySelector("#pause");

  minus.addEventListener("click", () => {
    counter.innerText--;
  });

  plus.addEventListener("click", () => {
    counter.innerText++;
  });

  heart.addEventListener("click", () => {
    let likes = document.querySelector("ul");
    let li = document.createElement("li");
    li.setAttribute("data-num", count);
    li.innerText = `${counter.innerText} has been liked `;
    likes.appendChild(li);
  });

  pause.addEventListener("click", function (e) {
    if (pause.innerText === "pause") {
      pause.innerText = "resume";
      clearInterval(count);

      plus.disabled = true;
      minus.disabled = true;
      love.disabled = true;
      submitBtn.disabled = true;
    } else {
      count = setInterval(function () {
        counter.innerText++;
      }, 1000);
      pause.innerText = "pause";

      plus.disabled = false;
      minus.disabled = false;
      love.disabled = false;
      submitBtn.disabled = false;
    }
  });

  let list = document.querySelector("div#list");
  let form = document.querySelector("form#comment-form");
  let comment = document.querySelector("form#comment-form > #comment-input");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let p = document.createElement("p");
    p.innerText = comment.value;
    list.appendChild(p);
  });
});
