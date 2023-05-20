import data from './data.json'
import MainCard from './components/MainCard'
import OverviewCard from './components/OverviewCard'

const themeSwitch = document.getElementById('theme-switch')
const mainCardsContainer = document.getElementById('main-cards')
const overviewCardsContainer = document.getElementById('overview-cards')

let isLightTheme = localStorage.getItem('light-theme') === 'true'

function applyTheme() {
  document.body.className = isLightTheme ? 'light' : ''
  themeSwitch.checked = isLightTheme
}

function renderCards() {
  const mainCards = data.main.map(card => MainCard(card))
  const overviewCards = data.overview.map(card => OverviewCard(card))

  mainCardsContainer.innerHTML = mainCards.join('')
  overviewCardsContainer.innerHTML = overviewCards.join('')
}

function toggleTheme() {
  isLightTheme = !isLightTheme
  localStorage.setItem('light-theme', isLightTheme)
  applyTheme()
}

applyTheme()
renderCards()
themeSwitch.addEventListener('change', toggleTheme)
