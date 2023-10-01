import './style.css'
import { getResultText } from './getResult.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="card">
      <button id="button" type="button">push</button>
      <p>result: <span id="result"></span></p>
    </div>
  </div>
`

document
  .querySelector<HTMLButtonElement>('#button')!
  .addEventListener('click', () => {
    const text = getResultText()
    document.querySelector('#result')!.textContent = text

    console.time()
    for (let i = 0; i < 100_000; i++) {
      getResultText()
    }
    console.timeEnd()
  })
