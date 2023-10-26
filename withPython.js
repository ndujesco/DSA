async function call() {
  const res = await fetch('http://localhost:8000/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apiKey: '6508b27e2b66a05e77f8e04c'
    },
    body: JSON.stringify({
      email: 'girlsample1@gmail.com	',
      // name: 'Jessica',
      gender: 'female'
    })
  });
  console.log(await res.json());
}

call();

const APLPHABETS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMBERS = '0123456789';

const generateKey = () => {
  let key = '';
  for (let i = 0; i < 2; i++) {
    key += APLPHABETS.charAt(Math.floor(Math.random() * APLPHABETS.length));
  }
  for (let i = 0; i < 4; i++) {
    key += NUMBERS.charAt(Math.floor(Math.random() * NUMBERS.length));
  }
  for (let i = 0; i < 2; i++) {
    key += APLPHABETS.charAt(Math.floor(Math.random() * APLPHABETS.length));
  }
  return key;
};

console.log();
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
