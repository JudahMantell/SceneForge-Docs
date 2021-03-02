const searchQueryURL = 'https://github.com/MidnightCoffeeInc/SceneForge-Alpha-Test';

    window.addEventListener('DOMContentLoaded', function(e) {
      return fetch(searchQueryURL)
      .then(result => result.json())
      .then(response => console.log(response))
      .catch(err => console.log(err))
    });