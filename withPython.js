async function call() {
  const res = await fetch('http://localhost:8000/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apiKey: '6508b27e2b66a05e77f8e04c'
    },
    body: JSON.stringify({
      email: 'lol@email.com',
      name: 'Jessica',
      gender: 'male'
    })
  });
  console.log(await res.json());
}

call();
// const { JSDOM } = require('jsdom');
// const { window } = new JSDOM('');

// const $ = require('jquery')(window);
// $.ajax({
//   url: 'https://findr-backend.vercel.app'
// }).done(function (o) {
//     console.log(900);
//   console.log(o);
// });

// $.getJSON('https://findr-backend.vercel.app', (data) => {
//   console.log(data);
// });
// console.log(33);
