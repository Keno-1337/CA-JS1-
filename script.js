// details.html
// fetch('https://official-joke-api.appspot.com/random_joke')
//   .then(response => response.json())
//   .then(data => {

//     const container = document.querySelector('#results-container');
//     data.forEach(result => {
//       const resultHtml = `
//         <div class="result">
//           <h2>${result.type}</h2>
//           <p>${result.setup}</p>
//           <p>${result.punchline}</p>
//           <p>${result.id}</p>
//           <a href="details.html?id=${result.id}">View Details</a>
//         </div>
//       `;
//       container.insertAdjacentHTML('beforeend', resultHtml);
//     });
//   })
//  .catch(error => {
//    const errorMessage = `<p>Sorry, there was an error loading the data.</p>`;
//    container.insertAdjacentHTML('beforeend', errorMessage);
//    console.error(error);
//  });
//  function newFunction() {
//   return '#results-container';
//  }

function getJokeById() {
    const jokeId = document.getElementById("jokeId").value;
    const apiUrl = `https://official-joke-api.appspot.com/jokes/${jokeId}`;
    
    // loading
    const jokeDiv = document.getElementById("joke");
    jokeDiv.innerHTML = "<p>Clearing throat...</p>";
    
    // API Request
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Show joke
        const setup = data.setup;
        const punchline = data.punchline;
        jokeDiv.innerHTML = `<p>${setup}</p><p><em>${punchline}</em></p>`;
      })
      .catch(error => {
        // error
        jokeDiv.innerHTML = "<p>Error: Unable to retrieve joke.</p>";
      });
  }
  
  const jokeButton = document.getElementById("jokeButton");
  const jokesButton = document.getElementById("jokesButton");
  const loadingIndicator = document.getElementById("loadingIndicator");

  jokeButton.addEventListener("click", async () => {
    loadingIndicator.style.display = "block"; 
    // loading
    const url = "https://official-joke-api.appspot.com/random_joke";
    const response = await fetch(url);
    const data = await response.json();
    const setup = data.setup;
    const punchline = data.punchline;
    const jokeDiv = document.getElementById("joke");
    jokeDiv.innerHTML = `<p>${setup}</p><p>${punchline}</p>`;

    loadingIndicator.style.display = "none"; // Hide the loading indicator
  });

  jokesButton.addEventListener("click", async () => {
    loadingIndicator.style.display = "block"; // Show the loading indicator

    const url = "https://official-joke-api.appspot.com/random_ten";
    const response = await fetch(url);
    const data = await response.json();
    const jokes = data.map((joke) => `<p>${joke.setup} ${joke.punchline}</p>`);
    const jokeDiv = document.getElementById("joke");
    jokeDiv.innerHTML = jokes.join("");

    loadingIndicator.style.display = "none"; // Hide the loading indicator
  });

