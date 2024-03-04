

var loveCode = Math.random();
loveCode = loveCode * 100;
loveCode = Math.floor(loveCode) + 1; 


var resultat;

if (loveCode > 50) {
    resultat = "Vous avez un score élevé de " + loveCode + "%";
} else {
    resultat = "Vous avez un score peu élevé de " + loveCode + "%";
}

var outputDiv = document.getElementById("loveResult");
outputDiv.innerHTML = resultat;
