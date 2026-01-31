const kanyePhotos = [
  'https://i.guim.co.uk/img/media/f6ae1d61f3e3f30bc78e4b5301da1c87522f717c/0_62_2000_1200/master/2000.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=63048f8dad65704dd31f3ab3e2a41001',
  'https://townsquare.media/site/812/files/2020/07/kanye-west-fast-company.jpg',
  'https://uptodate.tokyo/wp-content/uploads/2025/06/IMG_0164-1024x644.jpeg',
  'https://i8.amplience.net/i/naras/gettyimages-612327698.jpg.jpg',
  'https://i0.wp.com/www.nationalreview.com/wp-content/uploads/2018/04/ye-vs-people-trump.jpg?fit=789%2C460&ssl=1'
];

async function loadRandomKanye() {
  const textPlace = document.querySelector('.text-place');
  
  textPlace.style.opacity = '0';
  textPlace.style.transform = 'scale(0.95) rotateY(5deg)';
  
  setTimeout(async () => {
    try {
      const randomPhoto = kanyePhotos[Math.floor(Math.random() * kanyePhotos.length)];
      
      let quoteRes = await fetch('https://api.kanye.rest');
      let quoteData = await quoteRes.text();
      let quoteObj = JSON.parse(quoteData);
      
      localStorage.setItem("ye!", JSON.stringify(quoteObj));
      
      textPlace.innerHTML = `
        <div class="kanye-card">
          <img src="${randomPhoto}" alt="Kanye West" class="kanye-photo">
          <blockquote class="kanye-quote">
            "${quoteObj.quote}"
            <footer>— Kanye West</footer>
          </blockquote>
        </div>
      `;
      
      textPlace.style.opacity = '1';
      textPlace.style.transform = 'scale(1) rotateY(0deg)';
      
    } catch (error) {
      textPlace.innerHTML = '<div class="kanye-quote">Ye создаёт историю...</div>';
      textPlace.style.opacity = '1';
      textPlace.style.transform = 'scale(1)';
    }
  }, 350);
}

loadRandomKanye();
