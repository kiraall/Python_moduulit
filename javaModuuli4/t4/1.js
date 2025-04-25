document.getElementById('searchForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const searchQuery = document.getElementById('query').value.trim();

    if (!searchQuery) {
        console.error('Please enter a search term');
        return;
    }

    console.log(`Searching for: "${searchQuery}"`);

    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(searchQuery)}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('API Response:', data);
        displayResults(data);

    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('results').innerHTML =
            '<p>Error fetching data. Please try again later.</p>';
    }
});

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

        // Use ternary operator for image handling
        const imageUrl = show.image
            ? show.image.medium
            : 'https://via.placeholder.com/210x295?text=Not%20Found';

        let genresHtml = show.genres && show.genres.length > 0
            ? `<p><strong>Genres:</strong> ${show.genres.join(', ')}</p>`
            : '';

        let summaryHtml = show.summary
            ? show.summary.replace(/<[^>]*>/g, '')
            : 'No summary available';

        showElement.innerHTML = `
            <img src="${imageUrl}" alt="${show.name}">
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