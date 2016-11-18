var feedbackopen = document.querySelector(".js-btn");
var feedbackclose = document.querySelector(".js-close");
var feedbackquery = document.querySelector(".dialog");

feedbackclose.addEventListener("click", function (event) {
  event.preventDefault();
	feedbackquery.classList.remove(".dialog.dialog--close");
});

feedbackopen.addEventListener("click", function (event) {
	event.preventDefault();
	feedbackquery.classList.add(".dialog.dialog--open");
});
