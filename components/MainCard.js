export default function MainCard(card) {
  return `
    <div class="card card-large ${card.type}">
      <div class="card-top">
        <img src="/icon-${card.type}.svg" alt="${card.type} icon" />
        <span class="card-username">${card.nickname}</span>
      </div>
      <div class="card-main">
        <div class="card-main-value">${card.followers}</div>
        <p class="card-main-text">${card.description}</p>
      </div>
      <div class="card-bottom">
        <img src="/icon-${card.stats.type}.svg" alt="${card.stats.type} icon" />
        <span class="card-bottom-text ${card.stats.type}">${card.stats.value} Today</span>
      </div>
    </div>
  `
}
