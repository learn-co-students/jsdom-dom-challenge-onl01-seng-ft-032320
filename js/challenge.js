document.addEventListener("DOMContentLoaded",()=>{
    
    var seconds = 0;
    var getSet = setInterval(increment,1000)
    

    function increment() {
        let el = document.querySelector('#counter')
        seconds += 1;
        el.innerText = seconds;
    }
    
    let pause = document.querySelector('#pause')
    pause.addEventListener("click", () =>  clearInterval(getSet))

    let plus = document.querySelector('#plus')
    plus.addEventListener("click", () => upByOne())

    let minus = document.querySelector('#minus')
    minus.addEventListener("click", () => downByOne())

    let heart = document.querySelector('#heart')
    heart.addEventListener("click", ()=> upByOne())

    function upByOne() {
        
        return increment(1);
    }

    function downByOne() {
        
        return increment(-1) ;
    }

    let comment = document.querySelector('#comment-form')
    comment.addEventListener("submit", (event)=> {
        event.preventDefault()
        console.log("form submitted")
        let li = document.createElement("li")
        li.innerText = event.target[0].value
        comment.append(li)
    })
    
    })
    
    
        

    

    


