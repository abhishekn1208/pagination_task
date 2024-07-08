
let container = document.getElementById("container")



async function getData(URL){
    try {
        let res = await fetch(`${URL}`);
        pagination(res.headers.get("X-Total-count"),6)
        let data = await res.json()
        console.log(data)
        displayData(data)
        
    } catch (error) {
        console.log("something went wrong")
    }
 
}

getData(`https://jsonplaceholder.typicode.com/users?_page=1&_limit=6`);

async function displayData(arr){
container.innerHTML = "";

arr.forEach((ele) => {
    let card = document.createElement("div")
    let name = document.createElement("h4")
    name.innerText = ele.name;

    let username = document.createElement("h4")
    username.innerText = ele.username;

    let email = document.createElement("p")
    email.innerText = ele.email;

    let address = document.createElement("p")
    address.innerText = ele.address;

    card.append(name,username,email,address)
    container.append(card)
});
}

let paginationDiv = document.getElementById("paginationwrap");
 function pagination(Total,limit){
    try {
        paginationDiv.innerHTML = ""
        let numbOfBtn = Math.ceil(Total/limit);
        console.log(numbOfBtn)
    
        for(let i =1;i<=numbOfBtn;i++){
            let btn = document.createElement("button");
        btn.innerText = i;
    
        btn.addEventListener("click",function(){
            getData(`https://jsonplaceholder.typicode.com/users?_page=${i}&_limit=4`)
        })
    
        paginationDiv.append(btn)
        }
    } catch (error) {
        console.log("something went wrong")
        
    }
   
 }
