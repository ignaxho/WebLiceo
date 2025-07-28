      document
        .getElementById("registroBtn")
        .addEventListener("click", function () {
          const container = document.getElementById("rickrollContainer");
          const video = document.getElementById("rickrollVideo");

          container.style.display = "block";
          video.volume = 0.2;
          video.muted = false;
          video.play().catch((error) => {
            video.muted = true;
            video.play();
          });
        });

      const konamiCode = [
        "ArrowUp",
        "ArrowUp",
        "ArrowDown",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "ArrowLeft",
        "ArrowRight",
        "Enter",
      ];
      let konamiIndex = 0;

      document.addEventListener("keydown", function (e) {
        if (e.key === konamiCode[konamiIndex]) {
          konamiIndex++;
          if (konamiIndex === konamiCode.length) {
            const container = document.getElementById("BadAppleContainer");
            const video = document.getElementById("BadAppleVideo");

            container.style.display = "block";
            video.volume = 0.1;
            video.muted = false;

            video
              .play()
              .then(() => {
                if (video.requestFullscreen) {
                  video.requestFullscreen();
                } else if (video.webkitRequestFullscreen) {
                  video.webkitRequestFullscreen();
                } else if (video.msRequestFullscreen) {
                  video.msRequestFullscreen();
                }
              })
              .catch((error) => {
                video.muted = true;
                video.play().then(() => {
                  if (video.requestFullscreen) {
                    video.requestFullscreen();
                  }
                });
              });
            konamiIndex = 0;
          }
        } else {
          konamiIndex = 0;
        }
      });