import '../styles/button.css'

class CounterButton {

  count = 0
  CLICKS = [' клик ', ' клика ', ' кликов']

  declOfNum(number, titles) {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  }
  
  makeCounter() {      
      this.count++
      return this.count + this.declOfNum(this.count, this.CLICKS)
  }

  render(selector) {
    selector.insertAdjacentHTML('beforeend', `<button class='btn js-btn'>Click me!</button>`)
    selector.addEventListener('click', e => {
      if(e.target.classList.contains('js-btn')) {
        e.target.innerHTML = this.makeCounter()
      }
    })
  }
  
}

export default CounterButton
