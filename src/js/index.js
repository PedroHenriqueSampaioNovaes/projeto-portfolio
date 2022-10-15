const tabs = document.querySelectorAll('.aba');
const className = 'selecionado';

function removeClass() {
  const tabSelected = document.querySelector('.aba.selecionado');
  const infoSelected = document.querySelector('.informacao.selecionado');
  tabSelected.classList.remove(className);
  infoSelected.classList.remove(className);
}

function changeTab({ currentTarget }) {
  if (currentTarget.classList.contains(className)) return;

  removeClass();
  currentTarget.classList.add(className);
  const targetInfo = document.querySelector(`#informacao-${currentTarget.id}`);
  targetInfo.classList.add(className);
}
tabs.forEach((aba) => aba.addEventListener('click', changeTab));
