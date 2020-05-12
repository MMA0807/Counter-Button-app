import CounterButton from './models/button.js'
import './styles/style.css'

const buttonModuleElem = document.querySelector('.js-module-btn')

const counterBtn = new CounterButton()
counterBtn.render('.js-container')

const loadModule = () => {
  import('./module1')
      .then(({default: moduleFunction}) => moduleFunction())
      .catch(error => console.error(error));
};

buttonModuleElem.addEventListener('click', loadModule)