const form = document.querySelector('.sign-up')
const signupBtn = document.querySelector('.sign-up button');
const mesge = document.querySelector('.sign-up .message');

const wrongMessage = (string) => {
    mesge.style.display = 'block';
    mesge.textContent = string;
};

const fetchData = (data) =>
    fetch('/sign-up', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

const signUp = (name, email, pass, rePass, data) => {

    const emailPatt = /^\S+@\S+\.\S+$/;
    const passwordPatt = /[A-Za-z0-9]/gi;

    if (!name || !email || !pass || !rePass) {
        wrongMessage('you should fill in all fields');
        return;
    }
    if (name.length < 6) {
        wrongMessage('invalid name');
        return;
    }
    if (!emailPatt.test(email)) {
        wrongMessage('email dose not accepted');
        return;
    }
    if (!passwordPatt.test(pass) || pass.length < 3) {
        wrongMessage('password must be at least 8 characters');
        return;
    }
    if (pass !== rePass) {
        wrongMessage('passwords isn\'t matching');
        return;
    }

    fetchData(data)
        .then((res) => res.json())
        .then((resData) => {
            if (resData.state === 'success') window.location.href = '/profile/';
            wrongMessage(resData.message);
        });
};

/*-----------------------------------------------------------------*/

signupBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const fullname = form.children[1].value;
    const email = form.children[2].value;
    const password = form.children[3].value;
    const rePassword = form.children[4].value;

    const info = { fullname, email, password, rePassword }

    signUp(fullname, email, password, rePassword, info);
});
