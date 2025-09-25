function calculateLove() {

    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();
    
    if (name1 === "" || name2 === "") {
        alert("Please enter both names.");
    } else {
        const lovePercentage = Math.floor(Math.random() * 101);

        const result = document.getElementById("result");

        result.innerHTML = `${name1} and ${name2} 's love percentage: ${lovePercentage}`;

        if (lovePercentage > 80) {
            result.innerHTML += " <br> ❤️ Perfect Match!";
        } else if (lovePercentage > 50) {
            result.innerHTML += "<br> 💖 Great Match!";
        } else if (lovePercentage > 30) {
            result.innerHTML += "<br> 💕 Good Match!";
        } else {
            result.innerHTML += "<br> 💔 Needs Work!";
        }  
    }
}