import '../styles/button.css';

const CLICKS = [' клик ', ' клика ', ' кликов '];

function declOfNum(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
}

class CounterButton {
  _count = 0;

  makeCounter() {
    this._count++;
    return this._count + declOfNum(this._count, CLICKS);
  }

  render(selector) {
    document
      .querySelector(selector)
      .insertAdjacentHTML(
        'beforeend',
        `<button class='btn js-btn'>Click me!</button>`
      );
    document.querySelector('.js-btn').addEventListener('click', (e) => {
      e.target.innerHTML = this.makeCounter();
    });
  }
}

export default CounterButton;