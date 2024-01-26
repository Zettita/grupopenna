const carrouselDiv = document.getElementById('carrouselDiv');
let isPaused = false;




setInterval(() =>{
    if(!isPaused) {
        moveNext();
    const firstImage = carrouselDiv.firstElementChild;
    carrouselDiv.style.transition = "none";
    carrouselDiv.style.transform = `translateX(0)`;
    carrouselDiv.appendChild(firstImage);
    }
}, 2000);

function moveNext() {
    const currentTransformValue = getComputedStyle(carrouselDiv).getPropertyValue('transform');
    const currentTranslateX = parseInt(currentTransformValue.split(',')[4].trim());
    const imageWidth = document.querySelector('.carrouselDiv img').clientWidth + 20; // 20px margin

    carrouselDiv.style.transition = "transform 0.5s ease-in-out";
    carrouselDiv.style.transform = `translateX(${currentTranslateX - imageWidth}px)`;

  }

  carrouselDiv.addEventListener('mouseover', () => {
    isPaused = true;
  });

  carrouselDiv.addEventListener('mouseout', () => {
    isPaused = false;
  });
