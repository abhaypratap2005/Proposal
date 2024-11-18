document.getElementById('noButton').addEventListener('mouseover', function() {
    const button = document.getElementById('noButton');
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    let randomX, randomY;

    do {
        randomX = Math.floor(Math.random() * maxX);
        randomY = Math.floor(Math.random() * maxY);
    } while (Math.abs(randomX - buttonRect.left) < 50 && Math.abs(randomY - buttonRect.top) < 50);

    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
});
