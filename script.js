var nav =document.body.querySelector(".nav");
var display =document.body.querySelector(".display");

var pages = [
  {
    name:"Add Grades",
    content:"Add grades: Type the student's name then type the grade as a number between 0-100."
  },
  {
    name:"View Grades",
    content:"View Grades: Here you can view grades"
  }
]



for(var i=0; i<pages.length; i++){
  createPage(pages[i]);
}

function createPage(pg){
  var button =document.createElement("button");
  button.addEventListener("click", function(){
    contentWrite(pg.content, pg.name);
  })
  button.innerHTML=pg.name;
  nav.appendChild(button);
}

function contentWrite(wd,pg){
  display.innerHTML=wd;
  }