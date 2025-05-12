
  const apiKey = 'AIzaSyAB02hbgnbFDJxZ2OK4jEKb5td2KDyumLo'; // ← Reemplaza esto con tu API KEY
  const videoIds = ['dr7O825kg1w', 'oUfqoM6z6yo', 'kehl8l9aRvw'];

  async function cargarVideos() {
    const container = document.getElementById('carousel-videos');

    for (let i = 0; i < videoIds.length; i++) {
      const id = videoIds[i];
      const res = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${apiKey}`);
      const data = await res.json();
      const video = data.items[0];

      const titulo = video.snippet.title;
      const miniatura = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

      const item = document.createElement('div');
      item.className = `carousel-item${i === 0 ? ' active' : ''}`;
      item.innerHTML = `
        <div class="d-block w-100">
          <a href="https://www.youtube.com/watch?v=${id}" target="_blank">
            <img src="${miniatura}" alt="${titulo}">
            <div class="carousel-caption">
              <h5 class="overlay-title">${titulo}</h5>
            </div>
          </a>
        </div>
      `;
      container.appendChild(item);
    }
  }

  cargarVideos();