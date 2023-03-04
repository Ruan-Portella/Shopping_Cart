export const getAddress = async (CEP) => {
  if (!CEP) {
    throw new Error('Forneça um CEP');
  }
  const dataApi = await fetch(`https://cep.awesomeapi.com.br/json/${CEP}`).then((response) => response.json());
  const response = await fetch(`https://brasilapi.com.br/api/cep/v2/${CEP}`);
  const data = await response.json();
  const Api = await Promise.any([dataApi, data]);
  return Api;
};

export const searchCep = async () => {
  const cartAddress = document.querySelector('.cart__address');
  try {
    const cepInput = document.querySelector('.cep-input').value;
    const { address, street, district, neighborhood, state, city } = await
    getAddress(cepInput);
    if (!address) {
      throw new Error('CEP não encontrado');
    }
    cartAddress.innerHTML = `${address || street
    } - ${district || neighborhood} - ${city} - ${state}`;
  } catch (error) {
    cartAddress.innerHTML = 'CEP não encontrado';
    return error;
  }
};
