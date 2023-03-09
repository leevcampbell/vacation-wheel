


function spinWheel(){
    const min = 1024
    const max = 9999
    const deg = Math.floor(Math.random() * (max-min +1) + min)
    document.getElementById("box").style.transform = "rotate("+deg+"deg)"
    const element = document.getElementById("mainbox")
    element.classList.remove("animate")



    setTimeout(function(){
        element.classList.add("animate");
    }, 5000)
}


function addComment(e) {
    e.preventDefault()
    const comment = document.getElementById("scrollBox")
    const li = document.createElement("li")
    li.innerText = e.target.commentInput.value

    comment.append(li)

    e.target.reset()
}

document.getElementById("form").addEventListener("submit", (e) => addComment(e))







