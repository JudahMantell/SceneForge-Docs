function requestUserRepos(){
    
    // Create new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    
    // GitHub endpoint, dynamically passing in specified username
    const url = `https://github.com/MidnightCoffeeInc/SceneForge-Alpha-Test/`;
    
    // Open a new connection, using a GET request via URL endpoint
    // Providing 3 arguments (GET/POST, The URL, Async True/False)
    xhr.open('GET', url, true);
    
    // When request is received
    // Process it here
    xhr.onload = function() {
    
        // Parse API data into JSON
        const data = JSON.parse(this.response);
        
        // Log the response
        console.log(data);
        
        // Loop over each object in data array
        console.log(data.name);

    }
    
    // Send the request to the server
    xhr.send();
    
}

// Call function passing in 'facebook' as GitHub username
requestUserRepos();