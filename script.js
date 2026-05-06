// THEME TOGGLE
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
  document.body.classList.toggle("light");
};

// TYPING EFFECT
const roles = ["Senior Frontend Developer", "Angular Expert", "UI Architect"];
let i=0,j=0,cur="",del=false;

function type(){
  if(!del && j<=roles[i].length){
    cur = roles[i].substring(0,j++);
  } else if(del && j>=0){
    cur = roles[i].substring(0,j--);
  }

  document.querySelector(".typing").innerHTML = cur;

  if(j==roles[i].length) del=true;
  if(j==0){ del=false; i=(i+1)%roles.length; }

  setTimeout(type,100);
}
type();

// SCROLL ANIMATION
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".section, .card").forEach(el=>{
  el.classList.add("hidden");
  observer.observe(el);
});

// SCROLL
function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}