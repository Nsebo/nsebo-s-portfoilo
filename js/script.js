const dark = document.querySelector('#dark');
const light = document.querySelector('#light');
const h1 = document.querySelectorAll('h1');
const h2 = document.querySelectorAll('h2');
const h3 = document.querySelectorAll('h3');
const p = document.querySelectorAll('p');
const a = document.querySelectorAll('a');
const li = document.querySelectorAll('li');
const pro = document.querySelectorAll('.pro');
const theme = document.querySelectorAll('.theme');
const span = document.querySelectorAll('span');
const strong = document.querySelectorAll('strong');
const open_btn = document.querySelector('.open');
const close_btn = document.querySelector('.close');

open_btn.addEventListener('click', () => {
  document.querySelector('.open').style.display = 'none';
  document.querySelector('.close').style.display = 'inline';
  document.querySelector('.mobile').style.display = 'block';
});

close_btn.addEventListener('click', () => {
  document.querySelector('.open').style.display = 'inline';
  document.querySelector('.close').style.display = 'none';
  document.querySelector('.mobile').style.display = 'none';
});

theme.forEach((theme) => {
  theme.addEventListener('click', (e) => {
    const html = document.querySelector('html');

    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      h1.forEach((click) => click.classList.remove('dark'));
      h2.forEach((click) => click.classList.remove('dark'));
      h3.forEach((click) => click.classList.remove('dark'));
      span.forEach((click) => click.classList.remove('dark'));
      strong.forEach((click) => click.classList.remove('dark'));
      pro.forEach((click) => click.classList.remove('dark'));
      p.forEach((click) => click.classList.remove('dark'));
      a.forEach((click) => click.classList.remove('dark'));
      li.forEach((click) => click.classList.remove('dark'));
      dark.style.display = 'inline-block';
      light.style.display = 'none';
    } else {
      html.classList.add('dark');
      h1.forEach((click) => click.classList.add('dark'));
      pro.forEach((click) => click.classList.add('dark'));
      span.forEach((click) => click.classList.add('dark'));
      strong.forEach((click) => click.classList.add('dark'));
      h2.forEach((click) => click.classList.add('dark'));
      h3.forEach((click) => click.classList.add('dark'));
      p.forEach((click) => click.classList.add('dark'));
      a.forEach((click) => click.classList.add('dark'));
      li.forEach((click) => click.classList.add('dark'));
      dark.style.display = 'none';
      light.style.display = 'inline-block';
    }
  });
});
