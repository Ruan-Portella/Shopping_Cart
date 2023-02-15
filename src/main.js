import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

const productList = document.querySelector('.products');

document.querySelector('.cep-button').addEventListener('click', searchCep);

const products = async () => {
  const results = await fetchProductsList('computador');
  results.forEach((product) => {
    const createElement = createProductElement(product);
    productList.appendChild(createElement);
  });
};

products();
