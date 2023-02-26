// Make a call to the API URL
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Get a reference to the HTML container where we will display the data
    const container = document.querySelector('#results-container');

    // Loop through the data and create HTML for each result
    data.forEach(result => {
      const resultHtml = `
        <div class="result">
          <h2>${result.title}</h2>
          <p>${result.author}</p>
          <p>${result.date}</p>
          <a href="details.html?id=${result.id}">View Details</a>
        </div>
      `;
      container.insertAdjacentHTML('beforeend', resultHtml);
    });
  })
  .catch(error => {
    // Display an error message on the page if an error occurs
    const errorMessage = `<p>Sorry, there was an error loading the data. Please try again later.</p>`;
    container.insertAdjacentHTML('beforeend', errorMessage);
    console.error(error);
  });