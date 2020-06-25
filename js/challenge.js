document.addEventListener("DOMContentLoaded", function(){

   let counter = document.getElementById("counter")
   let counterNumber = parseInt(counter.innerText)
   let timerGoing
   let timer = setInterval(timerGo,1000);

   let minus = document.getElementById("minus")
   let plus = document.getElementById("plus")
   let heart = document.getElementById("heart")
   let likes = document.getElementsByClassName("likes")[0]
   let pause = document.getElementById("pause")
   let comments = document.getElementsByClassName("comments")[0]
   let submittedComment = document.getElementById("comment-form")

   function timerGo(){
      counter.innerText = ++counterNumber
      minus.disabled = false
      plus.disabled = false
      heart.disabled = false
      timerGoing = true
   }

   function timerStop(){
      clearInterval(timer)
      minus.disabled = true
      plus.disabled = true
      heart.disabled = true
      timerGoing = false
      pause.innerText = "resume"
   }

   minus.addEventListener("click", function(){
      counter.innerText = --counterNumber
      console.log(`${counterNumber} is now counterNumber`);
   })
   plus.addEventListener("click", function(){
      counter.innerText = ++counterNumber
      console.log(`${counterNumber} is now counterNumber`);
   })

   heart.addEventListener("click", function(){
      let el = document.getElementById(counter.innerText)
      let li;
      if (el === null){
         li = document.createElement("li")
         li.id = counter.innerText.toString()
         li.dataset.count = 1
         likes.appendChild(li).innerText = `${parseInt(li.id)} was liked ${parseInt(li.dataset.count)} time(s)`
      } else {
         el.innerText = `${parseInt(el.id)} was liked ${parseInt(++el.dataset.count)} time(s)`
      }

      
   })

   pause.addEventListener("click", function(){
      if (timerGoing){
         timerStop()
      } else {
         pause.innerText = "pause"
         timer = setInterval(timerGo,1000);
      }

   })

   submittedComment.addEventListener("submit", () => {
      event.preventDefault()
      let p = document.createElement("p")
      comments.appendChild(p).innerText = `${submittedComment[0].value}`
      submittedComment[0].value =""
   })
})