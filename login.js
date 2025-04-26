// Exibir Modal de Login ou Cadastro
document.getElementById('loginBtn').addEventListener('click', function () {
    $('#authModal').modal('show');
});

document.getElementById('signupBtn').addEventListener('click', function () {
    $('#authModal').modal('show');
});

document.getElementById('loginOption').addEventListener('click', function () {
    $('#authModal').modal('hide');
    document.getElementById('loginSignupModalLabel').textContent = 'Fazer Login';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
    $('#loginSignupModal').modal('show');
});

document.getElementById('signupOption').addEventListener('click', function () {
    $('#authModal').modal('hide');
    document.getElementById('loginSignupModalLabel').textContent = 'Cadastrar';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
    $('#loginSignupModal').modal('show');
});
