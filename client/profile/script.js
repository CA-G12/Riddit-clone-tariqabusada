//----------------------------- log Out ----------------------------------

const logOutBtn = document.querySelector('.logout-img');

logOutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    fetch('/user/log-out')
        .then((data) => data.json())
        .then((data) => {
            if (data.message == 'redirect') window.location.href = '/';
        });
});

//---------------------------- add post ----------------------------------

const postBtn = document.querySelector('.new-post .btn');
const postContent = document.querySelector('#p-content');
const postImgUrl = document.querySelector('#p-img-url');


postContent.addEventListener('input', (e) => {
    if (postContent.value !== '') {
      postBtn.disabled = false;
      postBtn.style.background = 'green'
    }
    else {postBtn.disabled = true;
    postBtn.style.background = 'gray'
    }
  });
  
  postBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const content = postContent.value;
    const img = postImgUrl.value || null;
  
    const data = { content, img };
    
    console.log(data);

    fetch('/post/add-post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        postContent.value = '';
        postImgUrl.value = '';
        console.log('client side successsful');
      })
      .catch((error) => console.log(error));
  });

// --------------------------------------------------------------