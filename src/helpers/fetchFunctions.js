export const fetchProduct = async (param) => {
  const URL_BASE = `https://api.mercadolibre.com/items/${param}`;
  if (!param) throw new Error('ID não informado');
  const response = await fetch(URL_BASE);
  const data = await response.json();
  return data;
};

export const fetchProductsList = async (query) => {
  const URL_BASE = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  if (!query) {
    throw new Error('Termo de busca não informado');
  }
  const response = await fetch(URL_BASE);
  const data = await response.json();
  return data.results;
};
