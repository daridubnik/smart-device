const parent = document.querySelector('[data-parent]');
const button = document.querySelector('[data-toggle]');

const initToggleButton = () => {
  button.addEventListener('click', () => {
    parent.classList.toggle('is-active');
  });
};

export {initToggleButton};
