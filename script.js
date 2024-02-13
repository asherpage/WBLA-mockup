window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.background');
    let scrollPosition = window.pageYOffset;
    parallax.style.backgroundPositionY = scrollPosition * 0.7 + 'px'; // Adjust the speed of parallax
    const navbar = document.querySelector('.navbar');
    const bannerHeight = document.querySelector('.background').offsetHeight;
    const navbarLinks = document.querySelectorAll('.links a');
    
    if (scrollPosition > bannerHeight) {
        navbarLinks.forEach(link => link.style.color = 'black');
    } else {
        navbarLinks.forEach(link => link.style.color = 'white');
    }
});
