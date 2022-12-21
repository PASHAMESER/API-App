let input = document.getElementById("input");
let btnSaerch = document.getElementById("btnSaerch");
let container = document.querySelector(".container")


btnSaerch.addEventListener("click", funApi);

function funApi() {
  
  let btnvalue = input.value
  let myRequest = new XMLHttpRequest();
  myRequest.open("GET", `https://api.github.com/users/${btnvalue}/repos`);
  myRequest.send();

  myRequest.onreadystatechange = function () {
    let jsdata = JSON.parse(this.responseText);
    for (let i = 0; i < jsdata.length; i++) {
      let div = document.createElement("div");
      let containerContent = document.createElement("div");
      containerContent.className = "div";
      let reponame = document.createTextNode(jsdata[i].name);
      let spanStars = document.createElement("span");
      let textnodeStar = document.createTextNode(jsdata[i].stargazers_count);
      spanStars.className = "spanStars"
      spanStars.appendChild(textnodeStar)
      let linkAndStars = document.createElement("div");
      div.className = "linkAndStars"
      let spanUrl = document.createElement("a");
      let textUrl = document.createTextNode("Visit");
      spanUrl.className = "urlStars"
      spanUrl.appendChild(textUrl)
      spanUrl.href = `https://github.com/${btnvalue}/${jsdata[i].name}`
      spanUrl.setAttribute("target" , "blank")
      linkAndStars.appendChild(spanStars)
      linkAndStars.appendChild(spanUrl)
      div.appendChild(linkAndStars)
      div.appendChild(reponame);
      containerContent.appendChild(div)
      container.appendChild(containerContent)
    }
  };  
  if(btnvalue == ""){
    console.log("not found")
  }
}


