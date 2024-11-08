document.addEventListener('DOMContentLoaded', function() {
    loadMovies();

    async function loadMovies() {
        try {
            const response = await fetch('fetch_movies.php');
            const movies = await response.json();
            const movieList = document.getElementById('movieList');
            movieList.innerHTML = '';
            movies.forEach(movie => {
                const li = document.createElement('li');

                const img = document.createElement('img');
                img.src = movie.image_url;
                img.alt = movie.title;
                img.style.width = '50px';
                img.style.height = '75px';
                img.style.marginRight = '10px';

                const details = document.createElement('span');
                details.innerHTML = `
                    <strong>${movie.title}</strong> |<br> ${movie.genre} <br>
                    Watched on: ${movie.watched_date} |<br> Rating: ${movie.rating}/5
                `;

                const username = document.createElement('p');
                username.textContent = `Reviewed by: ${movie.username}`;
                username.style.fontWeight = 'bold';
                username.style.marginTop = '10px';

                const review = document.createElement('p');
                review.textContent = `Review: ${movie.review}`;
                review.style.marginTop = '5px';
                review.style.fontStyle = 'italic';

                li.appendChild(img);
                li.appendChild(details);
                li.appendChild(username); // Add username above the review
                li.appendChild(review);
                movieList.appendChild(li);
            });
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    }
});


