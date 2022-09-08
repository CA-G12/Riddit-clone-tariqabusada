const logOutBtn = document.querySelector('.logout-img');

logOutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    fetch('/user/log-out')
        .then((data) => data.json())
        .then((data) => {
            if (data.message == 'redirect') window.location.href = '/';
        });
});