window.onload = function () {
  let img = document.getElementById("poptan1");
  let father = new Audio("./sound/พ่อ.m4a");
  let count = document.getElementById("score");
  let score = localStorage.getItem("counter") || 0;
  let audio1 = new Audio("./sound/pop1.ogg");
  let audio2 = new Audio("./sound/pop2.ogg");
  let aslkjdfkajsfdlkjasdflkj = 112;
  let audio3 = new Audio("./sound/pop3.ogg");
  let audio4 = new Audio("./sound/pop4.ogg");
  let audioIndex = 0;
  var so = new Audio("./sound/.mp3");
  let askljdfaslkjfdlasfd = 10000;
  
//ฟังก์ชั่นจำแต้ม
  const actions = Array.from(document.querySelectorAll("[data-action]"));
  document.querySelector(".counter-value").innerHTML = score;
  actions.forEach((action) => {
    action.addEventListener("click", () => {
      const action_name = action.dataset.action;
      switch (action_name) {
        case "increase":
          localStorage.setItem("counter", score);
      }
    });
    action.addEventListener("keyup", () => {
      const action_name = action.dataset.action;
      switch (action_name) {
        case "increase":
          localStorage.setItem("counter", score);
      }
    });
  });

  var poppop = function () {
    switch (audioIndex) {
      case 0:
        audio1.play();
        document.getElementById("score").style.transform = "rotate(10deg)";
        document.getElementById("score").style.fontSize = "5.2rem";
        document.getElementById("score").style.transition =
          "fontSize 0.3s, 0.3s";
        break;
      case 1:
        audio2.play();
        document.getElementById("score").style.transform = "rotate(20deg)";
        document.getElementById("score").style.fontSize = "5.2rem";
        document.getElementById("score").style.transition =
          "fontSize 0.3s, 0.3s";
        break;
      case 2:
        audio3.play();
        document.getElementById("score").style.transform = "rotate(-10deg)";
        document.getElementById("score").style.fontSize = "5.2rem";
        document.getElementById("score").style.transition =
          "fontSize 0.3s, 0.3s";
        break;
      case 3:
        audio4.play();
        document.getElementById("score").style.transform = "rotate(-20deg)";
        document.getElementById("score").style.fontSize = "5.2rem";
        document.getElementById("score").style.transition =
          "fontSize 0.3s, 0.3s";
        break;
    }
    audioIndex = (audioIndex + 1) % 4;
    setTimeout(function () {
      var tscore2 = function () {
        document.getElementById("score").style.transform = "rotate(0deg)";
        document.getElementById("score").style.fontSize = "4rem";
        document.getElementById("score").style.transition =
          "fontSize 0.2s, 0.2s";
        if (score >= 10000) {
          document.getElementById("score").style.fontSize = "2rem";
        }
      };
      tscore2();
    }, 80);
  };

  document.addEventListener("pointerdown", function () {
    img.src = "./picture/img-after.png";
    increaseScore();
  });

  document.addEventListener("pointerup", function () {
    img.src = "./picture/img-before.png";
  });
  document.addEventListener("touchstart", function () {
    img.src = "./picture/img-after.png";
  });
  document.addEventListener("touchend", function () {
    img.src = "./picture/img-before.png";
  });
  document.addEventListener("keydown", function () {
    img.src = "./picture/img-after.png";
    increaseScore();
  });
  document.addEventListener("keyup", function () {
    img.src = "./picture/tanbefore.png";
  });
  function increaseScore() {
    poppop();
    score++;
    count.innerHTML = score;

    if (score == 500) {
      let spd = new Audio("./sound/.m4a");
      spd.play();
    }
    if (score == 1000) {
      document.getElementById("h2").innerHTML = "ว๊ากกกกกก";
      document.getElementById("h2").style.fontFamily = "Mali";
    }
    if (score == 5000) {
      father.play();
    }
    if (score == 20000) {
      let s = new Audio("./sound/แดน.mp3");
      document.getElementById("h2").style.fontFamily = "Mali";
      document.getElementById("h1").className = "ra";
      document.getElementById("h2").innerHTML = "ความไก่: 3000%";
      document.body.style.backgroundImage =
        'url("https://i.pinimg.com/originals/c9/16/51/c9165186bddc0e6bd71d45cb720bb2c7.gif")';
      document.body.style.transition = "3s";
      document.addEventListener("touchstart", function () {
        img.src = "./picture/image-after.png";
      });

      document.addEventListener("touchmove", function () {
        img.src = "./picture/image-before.png";
      });

      document.addEventListener("mousedown", function () {
        img.src = "./picture/image-after.png";
      });

      document.addEventListener("mouseup", function () {
        img.src = "./picture/image-before.png";
      });

      document.addEventListener("keydown", function () {
        img.src = "./picture/image-after.png";
      });

      document.addEventListener("keyup", function () {
        img.src = "./picture/image-before.png";
      });

      s.play();
      s.addEventListener("ended",function(){
        s.currentTime = 0;
        document.body.style.backgroundImage =
        "url('https://media.istockphoto.com/photos/sunset-sky-background-picture-id921951792?k=20&m=921951792&s=170667a&w=0&h=f90IPVRYverT_1jgwEac-vU7HlbecAoFJVXGGXdMt-k=')";
        document.getElementById("h1").className = "";
      })
    }
 

    if (score == askljdfaslkjfdlasfd) {
      a = prompt("ขอเลขแจ่มๆงวดนี้หน่อยครับ");
      if (a == aslkjdfkajsfdlkjasdflkj) {
        document.addEventListener("touchstart", function () {
          img.src = "./picture/image-after1.png";
        });

        document.addEventListener("touchmove", function () {
          img.src = "./picture/image-before1.png";
        });

        document.addEventListener("mousedown", function () {
          img.src = "./picture/image-after1.png";
        });

        document.addEventListener("mouseup", function () {
          img.src = "./picture/image-before1.png";
        });

        document.addEventListener("keydown", function () {
          img.src = "./picture/image-after1.png";
        });

        document.addEventListener("keyup", function () {
          img.src = "./picture/image-before1.png";
        });

        document.getElementById("h1").style.marginTop = "-2%";
        document.getElementById("h1").style.stroke = "white";
        document.getElementById("h1").style.letterSpacing = "-4px";
        document.getElementById("h1").innerHTML = "เรา ❤ บลาๆ";
        document.getElementById("h1").style.fontFamily = "Mali";
        document.getElementById("h1").style.color = "#F6BE00";
        document.getElementById("h2").style.color = "#F6BE00";
        document.getElementById("h2").style.fontFamily = "Mali";
        document.getElementById("score").style.color = "#F6BE00";
        document.getElementById("h2").innerHTML = "บลาๆ2";

        document.body.style.backgroundImage =
          "url('')";
        document.body.style.transition = "1s";

        let kkkk = new Audio("./sound/.m4a");
        kkkk.play();
        so.play();
      }
      so.addEventListener("ended", function () {
        so.currentTime = 0;
        img.src = "./picture/image-before2.png";

        document.addEventListener("touchstart", function () {
          img.src = "./picture/image-after2.png";
        });

        document.addEventListener("touchmove", function () {
          img.src = "./picture/image-before2.png";
        });

        document.addEventListener("mousedown", function () {
          img.src = "./picture/image-after2.png";
        });

        document.addEventListener("mouseup", function () {
          img.src = "./picture/image-before2.png";
        });

        document.addEventListener("keydown", function () {
          img.src = "./picture/image-after2.png";
        });

        document.addEventListener("keyup", function () {
          img.src = "./picture/image-before2.png";
        });
        document.getElementById("h1").style.marginTop = "3vh";
        document.getElementById("h1").style.color = "white";
        document.getElementById("h2").style.color = "white";

        document.getElementById("score").style.color = "white";
        document.getElementById("h1").innerHTML = "POPTAN";
        document.getElementById("h1").style.fontFamily =
          "'Luckiest Guy', cursive";
        document.getElementById("h1").style.letterSpacing = "8px";
        document.getElementById("h2").innerHTML = "สภาพตอนนี้: บลาๆ";
        document.getElementById("h2").style.fontFamily = "Mali";
        document.body.style.backgroundImage =
          "url('https://media.istockphoto.com/photos/sunset-sky-background-picture-id921951792?k=20&m=921951792&s=170667a&w=0&h=f90IPVRYverT_1jgwEac-vU7HlbecAoFJVXGGXdMt-k=')";
      });

      if (a == 5) {
        document.getElementById("h1").innerHTML = "noob";
        let tan = new Audio("./sound/.mp3");
        tan.play();
      }

      
    }
  }
};


document.body.addEventListener('touchstart', function(e) {
  e.preventDefault();
});
document.body.addEventListener('touchmove', function(e) {
  e.preventDefault();
});
window.addEventListener("scroll", preventMotion, false);
window.addEventListener("touchmove", preventMotion, false);

function preventMotion(event) {
   window.scrollTo(0, 0);
   event.preventDefault();
   event.stopPropagation();
}
