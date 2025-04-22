function handleVideoScroll() {
    const videoContainer = document.querySelector('.video-container');
    const scrollPosition = window.scrollY + window.innerHeight;
    const triggerPoint = videoContainer.offsetTop + videoContainer.offsetHeight;

    if (scrollPosition >= triggerPoint) {
        videoContainer.classList.add('scrolled');
    } else {
        videoContainer.classList.remove('scrolled');
    }
}

function handleHeroScroll() {
    const heroContent = document.querySelector('.hero .content');
    const h1 = heroContent.querySelector('h1');
    const p = heroContent.querySelector('p');
    const scrollPosition = window.scrollY;
    const clipValue = Math.min(scrollPosition / 2, 100);

    heroContent.style.clipPath = `inset(${clipValue}px 0 0 0)`;
    h1.style.clipPath = `inset(${clipValue}px 0 0 0)`;
    p.style.clipPath = `inset(${clipValue}px 0 0 0)`;
    buttons.forEach(button => {
        button.style.clipPath = `inset(${clipValue}px 0 0 0)`;
    });
}


window.addEventListener('scroll', handleVideoScroll);
document.addEventListener('scroll', handleHeroScroll);
