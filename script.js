function toggle(e) {
  const element = e.target;
  element.classList.toggle('active');
}

const section1Element = document.getElementById('section1');
const section2Element = document.getElementById('section2');
const section3Element = document.getElementById('section3');
section1Element.addEventListener('click', toggle);
section2Element.addEventListener('click', toggle);
section3Element.addEventListener('click', toggle);

const start = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  console.log('response', response);
  console.log('data', data);

  data.forEach((element) => {
    console.log(element);
    const title = document.createElement('div');
    title.classList.add('title');
    title.addEventListener('click', toggle);
    title.innerHTML = element.title;
    const section = document.getElementById('section');
    section.appendChild(title);
    const description = document.createElement('div');
    description.classList.add('description');
    const p = document.createElement('p');
    p.innerHTML = element.body;
    description.appendChild(p);
    section.appendChild(description);
  });
};

start();
