export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (query) => {
  if (!query) {
    throw new Error('Termo de busca não informado');
  }
  const URL_BASE = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const response = await fetch(URL_BASE);
  const data = await response.json();
  return data.results;
};
