async function downloadSpotifySong() {
    const apiUrl = "https://YOUR-API-ENDPOINT/downloadMusic";
    const apiKey = "7ff6817873msh5abc0a144e3da5ap19463ejsnf0307925f71c";
    const songUrl = document.getElementById("songUrl").value;

    if (!songUrl) {
        alert("Please enter a Spotify song URL.");
        return;
    }

    try {
        let response = await fetch(`${apiUrl}?url=${encodeURIComponent(songUrl)}`, {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": apiKey,
                "X-RapidAPI-Host": "YOUR-API-HOST" 
            }
        });

        let data = await response.json();
        
        if (data.success) {
            document.getElementById("songTitle").innerText = `Title: ${data.data.title}`;
            document.getElementById("songThumbnail").src = data.data.thumbnail;
            document.getElementById("downloadLink").href = data.data.medias[0].url; 
            document.getElementById("downloadLink").style.display = "block";
        } else {
            alert("Error: " + data.message);
        }
    } catch (error) {
        console.error("API Error:", error);
        alert("Failed to fetch song details.");
    }
}
