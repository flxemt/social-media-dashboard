export default function OverviewCard(card) {
  return `
    <div class="card overview-card">
      <div class="overview-card-top">
        <h3>${card.title}</h3>
        <img src="/icon-${card.type}.svg" alt="${card.type} icon" />
      </div>
      <div class="overview-card-bottom">
        <div class="overview-card-bottom-value">${card.value}</div>
        <span class="overview-card-bottom-text card-bottom">
          <img src="/icon-${card.stats.type}.svg" alt="${card.stats.type} icon" />
          <span class="card-bottom-text ${card.stats.type}">${card.stats.value}%</span>
        </span>
      </div>
    </div>
  `
}
