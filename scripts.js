
function niver() {
    let valor1 = parseFloat(prompt("Digite o dia que você nasceu: (use números)"));
    let valor2 = parseFloat(prompt("Digite o mês que você nasceu: (use números)"));
    let valor3 = parseFloat(prompt("Digite o ano que você nasceu: (use números)"));
    alert("você nasceu em " + valor1 + "/" + valor2 + "/" + valor3);
}


let casa = false;

function mudarTexto() {
if (casa) {
    document.getElementById('titulo').innerHTML = `
    <pre>
             /\\     
            /  \\    
           /____\\   
          |      |  
          | [  ] |  
          |      |  
          |______|  
       
    </pre>`;
} else {
    document.getElementById('titulo').innerHTML =`
<pre>
        /\\       
       /  \\      
      /    \\     
     /______\\    
    / |    | \\   
   /  |____|  \\  
  |   |    |   | 
  |   | [ ]|   | 
  |___|____|___| 
</pre>
    `;
}
casa = !casa; // Alterna o estado
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }

    document.getElementById('changeColorBtn').addEventListener('click', function() {
        document.getElementById('titulo').style.backgroundColor = getRandomColor();
        });