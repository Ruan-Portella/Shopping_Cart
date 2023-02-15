import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

const createElement = document.createElement('div');
const headerDiv = document.querySelector('.loading');
const productList = document.querySelector('.products');
document.querySelector('.cep-button').addEventListener('click', searchCep);

const createLoadElement = () => {
  createElement.innerText = 'carregando...';
  createElement.classList.add('loading');
  headerDiv.appendChild(createElement);
  return createElement;
};

const createError = () => {
  createElement.innerText = 'Algum erro ocorreu, recarregue a página e tente novamente';
  createElement.classList.add('error');
  headerDiv.appendChild(createElement);
  return createElement;
};

const loadElement = createLoadElement();

const CreateProducts = async () => {
  try {
    const results = await fetchProductsList('computador');
    results.forEach((product) => {
      const element = createProductElement(product);
      productList.appendChild(element);
    });
  } catch (error) {
    createError();
  }
  loadElement.remove();
};

window.onload = () => {
  CreateProducts();
};
