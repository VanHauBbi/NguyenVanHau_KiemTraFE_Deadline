let currentIndex = 0;
const slidesToShow = 4; // Số slide hiển thị cùng lúc
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${index * (100 / slidesToShow)}%)`;
}

function nextSlide() {
    if (currentIndex < totalSlides - slidesToShow) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - slidesToShow;
    }
    showSlide(currentIndex);
}

// Tự động chuyển slide sau mỗi 3 giây
setInterval(nextSlide, 3000);
