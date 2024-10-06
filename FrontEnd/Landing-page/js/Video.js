document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("intro-video");
    const content = document.querySelector("body");
  
    // Check if the video has already been played
    if (sessionStorage.getItem("introVideoPlayed")) {
      video.parentElement.style.display = "none";
      content.style.display = "block";
      document.body.style.overflow = "auto";
      window.scrollTo(0, 0);
    } else {
      video.addEventListener("ended", function() {
        video.parentElement.style.display = "none";
        content.style.display = "block";
        document.body.style.overflow = "auto";
        window.scrollTo(0, 0);
        // Set the flag to indicate the video has been played
        sessionStorage.setItem("introVideoPlayed", true);
      });
  
      // Prevent scrolling while the video is playing
      document.body.style.overflow = "hidden";
    }
  });