document.addEventListener('DOMContentLoaded', () => {

    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileMenuPane = document.getElementById('mobile-menu-pane');
    const mainNav = document.getElementById('main-nav');

    
    mobileMenuPane.innerHTML = mainNav.innerHTML;

    
    mobileToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileMenuPane.classList.toggle('is-open');
    });

    
    document.addEventListener('click', (e) => {
        if (
            !mobileMenuPane.contains(e.target) &&
            !mobileToggle.contains(e.target)
        ) {
            mobileMenuPane.classList.remove('is-open');
        }
    });

});
    
const counters = document.querySelectorAll('.counter');

const startCounter = (counter) => {

    const target = +counter.getAttribute('data-target');

    let current = 0;

    const increment = target / 100;

    const updateCounter = () => {

        if(current < target) {

            current += increment;

            counter.innerText =
                Math.ceil(current).toLocaleString('en-IN');

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText =
                target.toLocaleString('en-IN') + "+";
        }
    };

    updateCounter();
};

const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if(entry.isIntersecting) {

            startCounter(entry.target);

            observer.unobserve(entry.target);
        }
    });

}, {
    threshold: 0.5
});

counters.forEach(counter => {
    observer.observe(counter);
});

const donateBtn = document.getElementById("donateBtn");
const donateModal = document.getElementById("donateModal");
const closeModal = document.getElementById("closeModal");

donateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    donateModal.classList.add("active");
});

closeModal.addEventListener("click", () => {
    donateModal.classList.remove("active");
});

donateModal.addEventListener("click", (e) => {
    if (e.target === donateModal) {
        donateModal.classList.remove("active");
    }
});