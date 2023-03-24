/*let x=document.getElementById("box")
x.innerText = 8
console.log(2979)
let y=76
console.log(y)
let name="AMISHA"
console.log(name)
let ans=false
console.log(ans)
let person={
    name:"Amisha",
    branch: "Civil",
    age:20
}
console.log(person.name)
console.log(person.branch)
console.log(person.age)*/


let x = document.getElementById("box")
let sum= 0
let p
function increase(){
     p = Number(x.innerText);
    p += 1;
    x.innerText = p;
}

let t = document.getElementById("s")
btn2.addEventListener("click", function(){
    sum += p
    t.textContent += "," + x.textContent
    x.innerText = 0
    console.log(sum)
})