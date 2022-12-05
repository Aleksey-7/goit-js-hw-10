export function countryСardMarkup({
  flags,
  name,
  capital,
  population,
  languages,
}) {
  return `
    <div class="country-info__wrapper">
      <img class="country-info__image" src="${flags.svg}" alt="${
    name.official
  }" width="30" />
      <h2 class="country-info__name">${name.official}</h2>
    </div>
    <p class="country-info__capital"><b>Capital:</b> ${capital}</p>
    <p class="country-info__population"><b>Population:</b> ${population}</p>
    <p class="country-info__languages"><b>Languages:</b> ${Object.values(
      languages
    )}</p>
  `;
}

export function countryListMarkup({ flags, name }) {
  return `
    <li class="country-list__item">
      <img class="country-list__image" src="${flags.svg}" alt="${name.official}" width="30" />
      <h2 class="country-list__name">${name.official}</h2>
    </li>
  `;
}
