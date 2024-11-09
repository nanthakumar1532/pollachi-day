(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
  
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "12/06/",
        birthday = dayMonth + yyyy;
  
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
        birthday = dayMonth + nextYear;
    }
  
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {
  
            const now = new Date().getTime(),
                distance = countDown - now;
  
            document.getElementById("days").innerText = Math.floor(distance / (day));
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour));
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
            if (distance < 0) {
                document.getElementById("headline").innerText = "It's my birthday!";
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "block";
                clearInterval(x);
            }
        }, 1000); // Update every second
  }());


  document.addEventListener("DOMContentLoaded", function() {
    const eventItems = document.querySelectorAll('.event-item');
    eventItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`; // Stagger animations
        item.classList.add('animated');
        item.style.opacity = 1; // Set to visible after DOM is loaded
    });
});