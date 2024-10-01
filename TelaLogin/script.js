
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () =>
{
    container.classList.add("painel-direita-ativo");
});

signInButton.addEventListener('click', () =>
{
    container.classList.add("painel-direita-ativo");
});

/*appwrite - auth2.0 - botao pro simbolo do Google*/