import { writable, derived } from 'svelte/store';

export const apiData = writable([]);

const fetchCountries = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const result = await response.json();

    apiData.set(result);
};

fetchCountries();

export const term = writable('');
export const filtered = derived([term, apiData], ([$term, $apiData])=>{
    return $apiData.filter(x => x.name.common.toLowerCase().includes($term.toLowerCase()))
})