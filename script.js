document.querySelectorAll('.fish').forEach(fish => {
    fish.addEventListener('mouseover', function() {
        const direction = Math.random() > 0.5 ? 'left' : 'right';
        if (direction === 'left') {
            fish.style.transform = 'scaleX(-1) translateX(-10px)';
        } else {
            fish.style.transform = 'scaleX(1) translateX(10px)';
        }
    });
    
    fish.addEventListener('mouseout', function() {
        fish.style.transform = '';
    });
});