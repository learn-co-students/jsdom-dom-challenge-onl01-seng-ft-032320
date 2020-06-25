document.addEventListener("DOMContentLoaded", () => {
    let counter = document.getElementById("counter")
  
    let timer = setInterval(() => {
      counter.innerText++;
    }, 1000);
  
  
    let pauseButton = document.getElementById("pause");
    let plus = document.getElementById("plus");
    let minus = document.getElementById("minus");
    let like = document.getElementById("heart");
    let likes = document.getElementsByClassName("likes");
    let submitButton = document.getElementById("submit");
  
  
  
    plus.addEventListener("click", (e) => {
      counter.innerText++;
    });
  
    minus.addEventListener("click", (e) => {
      counter.innerText--;
    });
  
    pauseButton.addEventListener("click", (e) => {
      if(pause.innerText === "pause") {
        pause.innerText = "resume";
        clearInterval(timer);
        plus.disabled = true;
        minus.disabled = true;
        like.disabled = true;
        submitButton.disabled = true;
  
      } else if(pause.innerText == "resume") {
        timer = setInterval(() => {
          counter.innerText++;
        }, 1000);
        pause.innerText = "pause";
        plus.disabled = false;
        minus.disabled = false;
        like.disabled = false;
        submitButton.disabled = false;
      };
    });
  
    like.addEventListener("click", (e) => {
      let li = document.getElementById(`${counter.innerText}`);
      li ? li.children[0].innerText++ :
      likes[0].innerHTML += `<li id="${counter.innerText}">${counter.innerText} has been liked <span id="${counter.innerText}">1</span> time(s).</li>`;
    });
  });