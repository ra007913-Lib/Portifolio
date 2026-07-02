const formulario = document.getElementById("contato");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;

    document.getElementById("informacoes").innerHTML = `
        <h2>Informações enviadas com sucesso! Obrigada por entrar em contato!</h2>

        <p><strong>Nome:</strong> ${nome}</p>

        <p><strong>Telefone:</strong> ${telefone}</p>

        <p><strong>E-mail:</strong> ${email}</p>
    `;

});



