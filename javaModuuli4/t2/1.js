document.getElementById('searchForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    // Get the input value
    const searchQuery = document.getElementById('query').value.trim();

    if (!searchQuery) {
        console.error('Please enter a search term');
        return;
    }

    console.log(`Searching for: "${searchQuery}"`);

    try {
        // Make the API request
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(searchQuery)}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the JSON response
        const data = await response.json();

        // Display results in console
        console.log('API Response:', data);

        // Process and display formatted results
        displayFormattedResults(data);

    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

function displayFormattedResults(shows) {
    console.group('Formatted Results');

    if (shows.length === 0) {
        console.log('No results found');
        console.groupEnd();
        return;
    }

    shows.forEach((item, index) => {
        const show = item.show;
        console.group(`Show #${index + 1}: ${show.name}`);

        console.log('ID:', show.id);
        console.log('Name:', show.name);
        console.log('Type:', show.type);
        console.log('Language:', show.language);

        if (show.genres && show.genres.length > 0) {
            console.log('Genres:', show.genres.join(', '));
        }

        if (show.status) {
            console.log('Status:', show.status);
        }

        if (show.premiered) {
            console.log('Premiered:', show.premiered);
        }

        if (show.ended) {
            console.log('Ended:', show.ended);
        }

        if (show.officialSite) {
            console.log('Official Site:', show.officialSite);
        }

        if (show.rating && show.rating.average) {
            console.log('Rating:', show.rating.average);
        }

        if (show.image && show.image.medium) {
            console.log('Image:', show.image.medium);
        }

        if (show.summary) {
            // Remove HTML tags from summary
            const plainSummary = show.summary.replace(/<[^>]*>/g, '');
            console.log('Summary:', plainSummary);
        }

        console.groupEnd();
    });

    console.groupEnd();
}