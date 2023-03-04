import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { createProductElement, createCartProductElement,
  valueElement } from './helpers/shopFunctions';
import { getSavedCartIDs } from './helpers/cartFunctions';
import './style.css';

const createElement = document.createElement('div');
const header = document.querySelector('.header');
const productList = document.querySelector('.products');
const productCarts = document.querySelector('.cart__products');
document.querySelector('.cep-button').addEventListener('click', searchCep);

const createLoad = () => {
  const createElement2 = document.createElement('div');
  createElement2.innerText = 'carregando...';
  createElement2.classList.add('loading');
  header.appendChild(createElement2);
  return createElement2;
};

const createError = () => {
  createElement.innerText = 'Algum erro ocorreu, recarregue a página e tente novamente';
  createElement.classList.add('error');
  header.appendChild(createElement);
  return createElement;
};

const loadElement = createLoad();

const CreateProducts = async () => {
  try {
    const results = await fetchProductsList('computador');
    results.forEach((product) => {
      const element = createProductElement(product);
      productList.appendChild(element);
    });
    loadElement.remove();
  } catch (error) {
    loadElement.remove();
    createError();
  }
};

const localStorageCart = async () => {
  const productCart = getSavedCartIDs().map((product) => fetchProduct(product));
  const products = await Promise.all(productCart);
  products.forEach((product) => {
    productCarts.appendChild(createCartProductElement(product));
  });
  valueElement();
};

window.onload = () => {
  CreateProducts();
  localStorageCart();
};
