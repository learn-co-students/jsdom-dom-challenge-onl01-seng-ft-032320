const plus = document.querySelector("#plus")
const minus = document.querySelector("#minus")
const heart = document.querySelector("#heart")
const counter = document.querySelector("#counter")
const pause = document.querySelector("#pause")
let newCount = 0



myInterval = window.setInterval(increment, 1000)

function increment() {
    newCount += 1
    counter.innerText = newCount
}

function decrement() {
    newCount -= 1
    counter.innerText = newCount
}

function like() {
    document.querySelector(".likes").innerHTML += `<p>${newCount} has been liked!</p>`
}

function toggleTime(e) {


    if (e.target.id == "resume") {
        pause.id = "pause"
        pause.innerText = "pause"
        plus.disabled = false
        minus.disabled = false
        heart.disabled = false
        myInterval = window.setInterval(increment, 1000)
    } else {
        clearInterval(myInterval);
        plus.disabled = true
        minus.disabled = true
        heart.disabled = true

        pause.id = "resume";
        pause.innerText = "resume"

    }
}

document.querySelector("#submit").addEventListener("click", (e) => {
    e.preventDefault()
    let input = document.querySelector("#comment-input")

    let li = document.querySelector("#list")
    const list = document.createElement("LI")

    li.appendChild(list)
    list.innerHTML = input.value
    input.value = ""
})

pause.addEventListener("click", toggleTime)
plus.addEventListener("click", increment)
minus.addEventListener("click", decrement)
heart.addEventListener("click", like)