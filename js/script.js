let b1=document.querySelector("#b1")
let b2=document.querySelector("#b2")
let b3=document.querySelector("#b3")
let b4=document.querySelector("#b4")


b1.onclick=()=>{
    console.log("Task Saved");
}
b2.onclick=()=>{
    alert("Tasks are to be Deleted")
    console.log("Task Deleted");
}
b3.onclick=()=>{
    console.log("All tasks cleared");
}
b4.onclick=()=>{
    alert("Task are saved succesfully!")
    console.log("Tasks Saved");
}