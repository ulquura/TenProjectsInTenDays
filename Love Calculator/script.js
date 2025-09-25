function calculateLove() {
    alert('This is a simple love calculator. It generates a random love score between two names.');
    const name1 = document.getElementById('name1').value.trim().toLowerCase();
    const name2 = document.getElementById('name2').value.trim().toLowerCase();
    const resultDiv = document.getElementById('result');
    if (name1 === '' || name2 === '') {
        alert('Please enter both names.');
        resultDiv.innerHTML = 'Please enter both names.';
    } else {
        let score = Math.floor(Math.random() * 101);
        resultDiv.innerHTML = `Love score between ${name1} and ${name2} is ${score}%`;

    }
}