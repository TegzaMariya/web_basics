function smoothScroll(event, targetId) {
    event.preventDefault(); // Prevent the default anchor link behavior
    document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
    });
}