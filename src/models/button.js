import "../styles/button.css";

let count = 0;
const CLICKS = [" клик ", " клика ", " кликов"];

function declOfNum(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
}

class CounterButton {
  makeCounter() {
    count++;
    return count + declOfNum(count, CLICKS);
  }

  render(selector) {
    selector.insertAdjacentHTML(
      "beforeend",
      `<button class='btn js-btn'>Click me!</button>`
    );
    document.querySelector(".js-btn").addEventListener("click", (e) => {
      e.target.innerHTML = this.makeCounter();
    });
  }
}

export default CounterButton;
