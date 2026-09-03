// ========================================
// JAVASCRIPT - SITE DE ÓPTICA
// ========================================

// Animação das seções ao aparecerem na tela
const secoes = document.querySelectorAll(".section");

const observador = new IntersectionObserver(
(entradas) => {
entradas.forEach((entrada) => {
if (entrada.isIntersecting) {
entrada.target.classList.add("aparecer");
}
});
},
{
threshold: 0.15
}
);

secoes.forEach((secao) => {
observador.observe(secao);
});

// ========================================
// QUIZ DE ÓPTICA
// ========================================

function iniciarQuiz() {

const perguntas = [
    {
        pergunta: "Qual é a velocidade aproximada da luz no vácuo?",
        opcoes: [
            "300.000 km/s",
            "30.000 km/s",
            "3.000 km/s",
            "300 km/s"
        ],
        correta: 0
    },

    {
        pergunta: "Qual é o fenômeno responsável por uma bola de futebol fazer curva quando está girando?",
        opcoes: [
            "Refração",
            "Efeito Magnus",
            "Dispersão",
            "Difração"
        ],
        correta: 1
    },

    {
        pergunta: "Qual estrutura do olho recebe a imagem formada pelo sistema óptico?",
        opcoes: [
            "Pupila",
            "Córnea",
            "Retina",
            "Íris"
        ],
        correta: 2
    },

    {
        pergunta: "Na reflexão da luz, o ângulo de incidência é:",
        opcoes: [
            "Maior que o ângulo de reflexão",
            "Menor que o ângulo de reflexão",
            "Igual ao ângulo de reflexão",
            "Sempre igual a 90°"
        ],
        correta: 2
    }
];

let pontos = 0;

perguntas.forEach((questao, indice) => {

    const resposta = prompt(
        `Pergunta ${indice + 1} de ${perguntas.length}\n\n` +
        questao.pergunta +
        "\n\n" +
        questao.opcoes
            .map((opcao, i) => `${i + 1}. ${opcao}`)
            .join("\n")
    );

    const respostaNumero = Number(resposta) - 1;

    if (respostaNumero === questao.correta) {
        pontos++;
        alert("✅ Resposta correta!");
    } else {
        alert(
            `❌ Resposta incorreta!\n\n` +
            `A resposta correta é: ${questao.opcoes[questao.correta]}`
        );
    }
});

alert(
    `🔬 Quiz finalizado!\n\n` +
    `Você acertou ${pontos} de ${perguntas.length} perguntas.`
);


}

// ========================================
// BOTÃO DO QUIZ
// ========================================

const botaoQuiz = document.getElementById("botaoQuiz");

if (botaoQuiz) {
botaoQuiz.addEventListener("click", iniciarQuiz);
}

// ========================================
// ANO AUTOMÁTICO NO RODAPÉ
// ========================================

const ano = document.getElementById("ano");

if (ano) {
ano.textContent = new Date().getFullYear();
}