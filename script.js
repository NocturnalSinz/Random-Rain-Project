function rain() {
    let heart = document.createElement("div");
  
    heart.classList.add("heart");
    heart.innerText = "z";
  
    heart.style.right = Math.random() * 100 + "vw";
  
    heart.style.animationDuration = Math.floor(Math.random() * 4500) + "ms";
  
    document.body.appendChild(heart);
  }
  
  setInterval(rain, 900);
  
  setTimeout(() => {
    heart.classList.remove();
  }, 1000);

  function changeBackground() {
    document.body.style.backgroundColor = getRandomColor();
  }
  
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function changeBackground() {
    document.body.style.backgroundColor = getRandomColor();
  }
  
  function resetBackground() {
    document.body.style.backgroundColor = "white";
  }
  
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
