document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("main-logo");
    const text = textElement.innerText;
    const colors = ["rgb(66, 133, 244)", "rgb(234, 67, 53)", "rgb(251, 188, 5)", "rgb(66, 133, 244)", "rgb(52, 168, 83)", "rgb(234, 67, 53)"]; 

    let coloredText = "";

    for (let i = 0; i < text.length; i++) {
        if (text[i] !== " ") { // Skip spaces
            coloredText += `<span style="color:${colors[i % colors.length]};">${text[i]}</span>`;
        } else {
            coloredText += " "; // Preserve spaces
        }
    }

    textElement.innerHTML = coloredText;
});


function googleSearch(){
    let query=document.getElementById("searchQuery").value;
    if (query){
        window.location.href="https://www.google.com/search?q="+encodeURIComponent(query);
    }
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        googleSearch();
    }
}