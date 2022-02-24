import { data } from "./dummy-data.js";

const shuffleBtn = document.getElementById('shuffle');
const sortBtn = document.getElementById('sort');

function initialLoad() {
  const parentEl = document.getElementById('box');
  const ul = document.createElement('ul');
  parentEl.appendChild(ul);
  parentEl.innerHTML = '';

  for (let index = 1; index <= data.length; index++) {
    const li = document.createElement('li');
    if (window.innerWidth > 375) {
      li.style.backgroundColor = data[index - 1].color;
    } else {
      li.style.borderLeft = `5px solid ${data[index - 1].color}`;
    }
    li.textContent = data[index - 1].id;
    ul.appendChild(li);
  }
  parentEl.append(ul);
}

function randomData() {
  let currentIndex = data.length - 1, randomIndex;

  while(currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);

    let temp = data[randomIndex];
    data[randomIndex] = data[currentIndex];
    data[currentIndex] = temp;
    currentIndex--;
  }
}

function shuffleBoxHandler() {
  randomData();
  initialLoad();
}

function sortHandler() {
  data.sort((a,b) => {
    return a.id - b.id;
  });
  initialLoad();
}

initialLoad();

shuffleBtn.addEventListener('click', shuffleBoxHandler);
sortBtn.addEventListener('click', sortHandler);

window.onresize = initialLoad;
