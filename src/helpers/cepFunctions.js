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

export const searchCep = () => {
  const cartAddressSpan = document.querySelector('.cart__address');
  const cepbutton = document.querySelector('.cep-button');
  cepbutton.addEventListener('click', async () => {
    const cepInput = document.querySelector('.cep-input').value;
    const {
      address,
      street,
      district,
      neighborhood,
      state,
      city,
      message,
    } = await getAddress(cepInput);
    if (message) {
      cartAddressSpan.innerHTML = 'CEP não encontrado';
      throw new Error('CEP não encontrado');
    }
    cartAddressSpan.innerHTML = `${address || street
    } - ${district || neighborhood} - ${city} - ${state}`;
  });
};
