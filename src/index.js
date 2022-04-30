//https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=H_fEwNDj8mGG6FwqkY5drqVvrzBHWQswrkmbJ1MT3pU
import { navbar } from "../components/navbar.js";

let n = document.getElementById("navbar");
n.innerHTML = navbar();

import "../styles/navbar.css"
import "../styles/index.css"
import {searchimages,append} from "./fetch.js";
let filter = document.getElementById("filter")
let sorting = document.getElementById("sorting")
let search = (e) =>{
    if(e.key==="Enter"){
        let sorting = document.getElementById("sorting").value
        console.log(filter.value)
        let value = document.getElementById("query").value
        searchimages(value,sorting,filter.value).then((data)=>{
            let container = document.getElementById("container")
            console.log(data);
            container.innerHTML=null;
            append(data.results,container)
        })
        //console.log(data)
    }
}

document.getElementById("query").addEventListener("keydown",search);

let categories = document.getElementById("categories").children
console.log(categories)


function cSearch(){
    let sorting = document.getElementById("sorting").value
        console.log(sorting)
    console.log(this.id)
    searchimages(this.id,sorting,filter.value).then((data)=>{
        let container = document.getElementById("container")
        console.log(data);
        container.innerHTML=null;
        append(data.results,container)
    })
}

for(let el of categories){
    el.addEventListener("click",cSearch)
}
function myFilter(){
    let sorting = document.getElementById("sorting").value
        console.log(sorting)
    console.log(this.id)
    searchimages(this.id,sorting,filter.value).then((data)=>{
        let container = document.getElementById("container")
        console.log(data);
        container.innerHTML=null;
        append(data.results,container)
    })
}
filter.addEventListener("change",myFilter)
function mySorting(){
    let sorting = document.getElementById("sorting").value
        console.log(sorting)
    console.log(this.id)
    searchimages(this.id,sorting,filter.value).then((data)=>{
        let container = document.getElementById("container")
        console.log(data);
        container.innerHTML=null;
        append(data.results,container)
    })
}

let id;
sorting.addEventListener("change",mySorting)
