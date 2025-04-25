'use strict';

const picArray = [
  {
    title: 'Title 1',
    caption: 'Caption 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: {
      large: 'img/pic1.jpg',
      medium: 'thumbnails/pic1.jpg'
    }
  },
  {
    title: 'Title 2',
    caption: 'Caption 2',
    description: 'Donec dignissim tincidunt nisl, non scelerisque massa...',
    image: {
      large: 'img/pic2.jpg',
      medium: 'thumbnails/pic2.jpg'
    }
  },
  // Continue with the rest of your picArray items...
  {
    title: 'Title 9',
    caption: 'Caption 9',
    description: 'Praesent eget cursus urna. Ut rhoncus interdum dolor...',
    image: {
      large: 'img/pic9.jpg',
      medium: 'thumbnails/pic9.jpg'
    }
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const picturesSection = document.getElementById('pictures');

  // Clear existing content
  picturesSection.innerHTML = '';

  picArray.forEach(item => {
    const article = document.createElement('article');
    article.className = 'card';

    const heading = document.createElement('h2');
    heading.textContent = item.title;
    article.appendChild(heading);

    const figure = document.createElement('figure');

    const img = document.createElement('img');
    img.src = item.image.medium;  // Using thumbnail path
    img.alt = item.title;
    figure.appendChild(img);

    const figcaption = document.createElement('figcaption');
    figcaption.textContent = item.caption;
    figure.appendChild(figcaption);

    article.appendChild(figure);

    const description = document.createElement('p');
    description.textContent = item.description;
    article.appendChild(description);

    article.addEventListener('click', () => {
      const overlay = document.createElement('div');
      overlay.className = 'overlay';

      const largeImg = document.createElement('img');
      largeImg.src = item.image.large;
      largeImg.alt = item.title;

      overlay.appendChild(largeImg);
      document.body.appendChild(overlay);

      overlay.addEventListener('click', () => {
        document.body.removeChild(overlay);
      });
    });

    picturesSection.appendChild(article);
  });
});