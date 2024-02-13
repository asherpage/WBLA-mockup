window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.background');
    let scrollPosition = window.pageYOffset;
    parallax.style.backgroundPositionY = scrollPosition * 0.7 + 'px'; // Adjust the speed of parallax
    const bannerHeight = document.querySelector('.background').offsetHeight;
    const others = document.querySelectorAll('.others');
    const navbar = document.querySelector('.navbar');
    
    if (scrollPosition > bannerHeight) {
        others.forEach(link => link.style.color = 'black');
        navbar.classList.add('white-bg');
    } else {
        others.forEach(link => link.style.color = 'white');
        navbar.classList.remove('white-bg');
    }
});
