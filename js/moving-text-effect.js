const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('sec-show');
        } else {
            entry.target.classList.remove('sec-show');

        }
    });
});

const hiddenElementsX = document.querySelectorAll('.sec-hiddenX');
hiddenElementsX.forEach((el) => observer.observe(el));
const hiddenElementsY = document.querySelectorAll('.sec-hiddenY');
hiddenElementsY.forEach((el) => observer.observe(el));