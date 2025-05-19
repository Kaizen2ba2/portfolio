// Apenas exibe um alerta simulando envio de formulário
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault(); // Evita o recarregamento da página
    alert("Mensagem enviada com sucesso!");
});
