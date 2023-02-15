import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('fetchProductsList com argumento é um objeto de computadorSearch', async () => {
    const param = await fetchProductsList('computador');
    expect(param).toEqual(computadorSearch);
  });

  it('fetchProductsList sem argumento retorna um erro', async () => {
    await expect(() => fetchProductsList()).rejects
      .toThrow('Termo de busca não informado');
  });
});
