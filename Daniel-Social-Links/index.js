document.addEventListener("DOMContentLoaded", function() {
    const submitBtn = document.querySelector(".submit-btn");
    const ratingText = document.querySelector(".rating-text");
    const ratingButtons = document.querySelectorAll(".rate-btn");

    submitBtn.disabled = true;

    function handleRatingButtonClick() {
        document.getElementById("rating").textContent = this.textContent;
        submitBtn.disabled = false;
        ratingButtons.forEach(button => button.removeEventListener("click", handleRatingButtonClick));
    }

    ratingButtons.forEach(button => button.addEventListener("click", handleRatingButtonClick));

    submitBtn.addEventListener("click", function() {
        ratingButtons.forEach(button => button.style.display = "none");
        submitBtn.style.display = "none";
        ratingText.style.display = "block";
    });
});