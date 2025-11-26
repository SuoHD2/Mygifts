let opened = false;

function openBox() {
  if (opened) return;
  opened = true;
  
  document.getElementById("lid").style.transform = "translateY(-200px) rotate(20deg)";
  document.getElementById("lid").style.transition = "1s ease";
  
  document.getElementById("gift-box").style.animation = "none";
  
  setTimeout(() => {
    document.getElementById("message").style.opacity = 1;
    launchConfetti();
  }, 600);
}

function launchConfetti() {
  for (let i = 0; i < 120; i++) {
    let conf = document.createElement("div");
    conf.className = "confetti";
    conf.style.left = Math.random() * window.innerWidth + "px";
    conf.style.setProperty('--i', Math.random());
    document.body.appendChild(conf);
    setTimeout(() => conf.remove(), 1800);
  }
}