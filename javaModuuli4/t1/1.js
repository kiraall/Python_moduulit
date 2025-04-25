document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const query = document.getElementById('query').value.trim();

    if (!query) {
        alert('Please enter a TV series name');
        return;
    }

    searchTVSeries(query);
});

function searchTVSeries(query) {
    fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Display in console
            console.log('TV Series Search Results:', data);

            // Display on page
            displayResults(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('results').innerHTML =
                '<p>Error fetching data. Please try again later.</p>';
        });
}

function displayResults(shows) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (shows.length === 0) {
        resultsDiv.innerHTML = '<p>No results found. Try a different search.</p>';
        return;
    }

    shows.forEach(showData => {
        const show = showData.show;
        const showElement = document.createElement('div');
        showElement.className = 'show clearfix';

        let imageHtml = '';
        if (show.image && show.image.medium) {
            imageHtml = `<img src="${show.image.medium}" alt="${show.name}">`;
        }

        let genresHtml = '';
        if (show.genres && show.genres.length > 0) {
            genresHtml = `<p><strong>Genres:</strong> ${show.genres.join(', ')}</p>`;
        }

        let summaryHtml = '';
        if (show.summary) {
            // Remove HTML tags from summary
            summaryHtml = show.summary.replace(/<[^>]*>/g, '');
        }

        showElement.innerHTML = `
            ${imageHtml}
            <h2>${show.name}</h2>
            ${show.network ? `<p><strong>Network:</strong> ${show.network.name}</p>` : ''}
            ${show.premiered ? `<p><strong>Premiered:</strong> ${show.premiered}</p>` : ''}
            ${show.status ? `<p><strong>Status:</strong> ${show.status}</p>` : ''}
            ${genresHtml}
            <p><strong>Summary:</strong> ${summaryHtml}</p>
            ${show.officialSite ? `<p><a href="${show.officialSite}" target="_blank">Official Site</a></p>` : ''}
        `;

        resultsDiv.appendChild(showElement);
    });
}