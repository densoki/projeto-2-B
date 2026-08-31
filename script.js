function interagir(secao) {
    const output = document.getElementById(`output-${secao}`);
    
    if (output.style.display === "block") {
        output.style.display = "none";
        return;
    }
    
    output.style.display = "block";

    if (secao === 'imagens') {
        output.innerHTML = `
            <p><strong>Simulação Rápida:</strong> Em uma lente convergente com $f = 10\text{ cm}$ e um objeto posicionado a $p = 20\text{ cm}$:</p>
            <p>A imagem será formada em $p' = 20\text{ cm}$ (Real, invertida e do mesmo tamanho).</p>
        `;
    } else if (secao === 'cores') {
        output.innerHTML = `
            <p><strong>Síntese Aditiva:</strong></p>
            <ul>
                <li style="color: #ff4d4d;">Vermelho + Verde = Amarelo</li>
                <li style="color: #4da6ff;">Verde + Azul = Ciano</li>
                <li style="color: #ff4dff;">Vermelho + Azul = Magenta</li>
            </ul>
        `;
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});