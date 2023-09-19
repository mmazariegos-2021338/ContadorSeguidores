const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    let currentValue = 0;
    const target = +counter.getAttribute('data-target');
    const increment = target / 200;

    const updateCounter = () => {
        currentValue += increment;
        
        if (currentValue < target) {
            counter.innerText = Math.ceil(currentValue);
            requestAnimationFrame(updateCounter);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});
