const form = document.querySelector('.log-in');
const logInBtn = document.querySelector('.log-in button');
const msg = document.querySelector('.log-in .message');

const wrongMessage = (string) => {
    msg.style.display = 'block';
    msg.textContent = string;
};

logInBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = form.children[1].value;
    const password = form.children[2].value;

    fetch('/user/log-in', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: email, password: password}),
    })
    .then((result)=> result.json())
    .then((data) => {
        if (data.message === 'successful') window.location.href = '/feed';
        wrongMessage(data.message);
    })
    .catch(console.error);
});