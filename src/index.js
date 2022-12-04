import { refs } from './js/refs';
import { fetchCountries } from './js/fetchCountries';
import { countryСardMarkup, countryListMarkup } from './js/markup';

import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

refs.searchBox.addEventListener(
  'input',
  debounce(onInputChange, DEBOUNCE_DELAY)
);

function onInputChange() {
  const countryName = refs.searchBox.value;
  if (countryName === '') {
    refs.countryInfo.innerHTML = '';
    refs.countryList.innerHTML = '';
    return;
  }

  fetchCountries(countryName)
    .then(countries => {
      if (countries.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        refs.countryInfo.innerHTML = '';
        refs.countryList.innerHTML = '';
        return;
      }

      if (countries.length <= 10) {
        const countryList = countries.map(country =>
          countryListMarkup(country)
        );
        refs.countryList.innerHTML = countryList.join('');
        refs.countryInfo.innerHTML = '';
      }

      if (countries.length === 1) {
        const countryСard = countries.map(country =>
          countryСardMarkup(country)
        );
        refs.countryInfo.innerHTML = countryСard.join('');
        refs.countryList.innerHTML = '';
      }
    })
    .catch(error => {
      Notify.failure('Oops, there is no country with that name');
      refs.countryInfo.innerHTML = '';
      refs.countryList.innerHTML = '';
      return error;
    });
}
