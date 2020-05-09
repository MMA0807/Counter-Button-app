import CounterButton from './models/button.js'
import './styles/style.css'

const containerElem = document.querySelector('.js-container')
const buttonModuleElem = document.querySelector('.js-module-btn')

const counterBtn = new CounterButton()
counterBtn.render(containerElem)

const loadModule = () => {
  import(`./module1`)
      .then(({default: moduleFunction}) => moduleFunction())
      .catch(error => console.error(error));
};

buttonModuleElem.addEventListener('click', loadModule)