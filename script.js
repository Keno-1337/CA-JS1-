
  const jokeButton = document.getElementById("jokeButton");
  const loadingIndicator = document.getElementById("loadingIndicator");

  jokeButton.addEventListener("click", async () => {
    loadingIndicator.style.display = "block"; // Show the loading indicator

    const url = "https://official-joke-api.appspot.com/random_joke";
    const response = await fetch(url);
    const data = await response.json();
    const setup = data.setup;
    const punchline = data.punchline;
    const jokeDiv = document.getElementById("joke");
    jokeDiv.innerHTML = `<p>${setup}</p><p>${punchline}</p>`;

    loadingIndicator.style.display = "none"; // Hide the loading indicator again
  });

