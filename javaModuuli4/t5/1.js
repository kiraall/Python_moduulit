fetch('https://api.chucknorris.io/jokes/random')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data.value);
  })
  .catch(error => {
    console.error('Error fetching Chuck Norris joke:', error);
  });