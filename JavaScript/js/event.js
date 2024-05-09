function handleevent(e){
    // alert('Hello')
    // document.getElementById("js").innerHTML="Python"
    // document.getElementById("js").style.color="green"
    console.log(e);
}

let box = document.getElementById("box")
function changeToRed(){
    let res = confirm("Are you sure ?")
    if(res){
        box.style.backgroundColor='red'
    }
}
function changeToGreen(){
    let res = confirm("Are you sure ?")
    if(res){
        box.style.backgroundColor='green'
    }
}
function changeToBlue(){
    let res = confirm("Are you sure ?")
    if(res){
        box.style.backgroundColor='blue'
    }
}
function changeToWhite(){
    let res = confirm("Are you sure ?")
    if(res){
        box.style.backgroundColor='white'
    }
}

function hide(){
    // box.style.display='none'
    // box.classList.add('d-none')
    box.classList.toggle('d-none')
}
