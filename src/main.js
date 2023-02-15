import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

const containerSection = document.querySelector('.loading');
const productList = document.querySelector('.products');
document.querySelector('.cep-button').addEventListener('click', searchCep);

const createLoadElement = () => {
  const createElement = document.createElement('div');
  createElement.innerText = 'carregando...';
  createElement.classList.add('loading');
  containerSection.appendChild(createElement);
  return createElement;
};

const loadElement = createLoadElement();

const CreateProducts = async () => {
  const results = await fetchProductsList('computador');
  results.forEach((product) => {
    const createElement = createProductElement(product);
    productList.appendChild(createElement);
  });
  loadElement.remove();
};

window.onload = () => {
  CreateProducts();
};
