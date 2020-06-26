document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('button#minus').addEventListener('click', decreaseTimer)
    document.querySelector('button#plus').addEventListener('click', increaseTimer) 
    document.querySelector('button#pause').addEventListener('click', pause)
    document.getElementById('heart').addEventListener('click', updateLikeList)
    document.querySelector('form#comment-form').addEventListener('click', addComment)
});


// const likeValueMap = {}
let count = 0;
let isPaused = false;
let countup = setInterval(counter, 1000);

function counter(){
    document.querySelector('h1#counter').innerHTML = count+=1;
}

function decreaseTimer() {
    document.querySelector('h1#counter').innerHTML = count-=1
}

function increaseTimer() {
    document.querySelector('h1#counter').innerHTML = count+=1
}

function pause() {
    clearInterval(countup);

    if (isPaused) {
        countup = setInterval(counter, 1000);
    }

    isPaused = !isPaused

    document.querySelector('button#minus').disabled = isPaused;
    document.querySelector('button#plus').disabled = isPaused;
    document.querySelector('button#heart').disabled = isPaused;
    document.querySelector('button#pause').innerHTML = isPaused? "resume" : "pause"
}


function updateLikeList () {
    let timer = document.getElementById('counter').innerText
    let match = document.querySelector(`li[data-num='${timer}']`);

    if (match) {
        match.dataset.like++
        match.innerText = `${timer} is liked ${match.dataset.like} time`
    } else {
        let li = document.createElement('li')
        let ul = document.querySelector('.likes')
        li.dataset.num = timer
        li.dataset.like = 1
        li.innerText = `${timer} is liked 1 time`
        ul.append(li)
    }
    // likeValueMap[count] = (likeValueMap[count] || 0) + 1

    // Object.keys(likeValueMap).forEach(function(likedNumber){
    //     listItem.innerText = `${likedNumber} : ${likeValueMap[likedNumber]} likes`
        
    // })
}

function addComment (event) {
    let p = document.createElement('p')
    let div = document.getElementById('list')
    div.appendChild(p)
    event.preventDefault();
    return p.innerText = document.getElementById('comment-input').value;   
}





