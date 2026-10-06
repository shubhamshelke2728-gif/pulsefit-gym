const menu=document.querySelector(".menu-toggle"), links=document.querySelector(".nav-links");
menu.addEventListener("click",()=>{const open=links.classList.toggle("open");menu.setAttribute("aria-expanded",open)});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));

const modal=document.querySelector("#modal");
const openModal=()=>{modal.classList.add("show");modal.setAttribute("aria-hidden","false");document.querySelector("#trialForm input").focus()};
const closeModal=()=>{modal.classList.remove("show");modal.setAttribute("aria-hidden","true")};
document.querySelectorAll(".open-modal").forEach(b=>b.addEventListener("click",openModal));
document.querySelector(".modal-close").addEventListener("click",closeModal);
modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});

document.querySelectorAll(".plan-btn").forEach(btn=>btn.addEventListener("click",()=>{openModal();document.querySelector("#trialForm").dataset.plan=btn.dataset.plan}));

document.querySelector("#trialForm").addEventListener("submit",e=>{
  e.preventDefault();
  document.querySelector("#trialMessage").textContent="Thanks! Your free-trial request has been recorded for this demo.";
  e.target.reset();
});
document.querySelector("#contactForm").addEventListener("submit",e=>{
  e.preventDefault();
  document.querySelector("#formMessage").textContent="Thanks! Your enquiry has been submitted for this demo.";
  e.target.reset();
});
