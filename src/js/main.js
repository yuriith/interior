// Мобильное меню бургер
function burgerMenu() {
	const burger = document.querySelector(".burger");
	const menu = document.querySelector(".menu");
	const body = document.querySelector("body");
	burger.addEventListener("click", () => {
		if (!menu.classList.contains("active")) {
			menu.classList.add("active");
			burger.classList.add("active");
			body.classList.add("locked");
		} else {
			menu.classList.remove("active");
			burger.classList.remove("active");
			body.classList.remove("locked");
		}
	});
	// Вот тут мы ставим брейкпоинт навбара
	window.addEventListener("resize", () => {
		if (window.innerWidth > 991.98) {
			menu.classList.remove("active");
			burger.classList.remove("active");
			body.classList.remove("locked");
		}
	});
}
burgerMenu();

const swiper = new Swiper(".swiper", {
	slidesPerView: 5,
	spaceBetween: 60,
	// Navigation arrows
	navigation: {
		nextEl: ".next",
		prevEl: ".prev",
	},
	// Responsive breakpoints
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		645: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
		885: {
			slidesPerView: 3,
			spaceBetween: 40,
		},
		1160: {
			slidesPerView: 4,
			spaceBetween: 50,
		},
		1490: {
			slidesPerView: 5,
			spaceBetween: 60,
		},
	},
});


// countDown
var countDownDate = new Date("Apr 18, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown__days").innerHTML = days;
	document.getElementById("countdown__hours").innerHTML = hours;
	document.getElementById("countdown__minutes").innerHTML = minutes;
	document.getElementById("countdown__seconds").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);