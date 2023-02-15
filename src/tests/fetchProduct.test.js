import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('Teste se fetchProduct é uma função', async () => {
    expect(typeof fetchProduct).toBe('function');
  });
  it('FetchProduct com argumento "MLB1405519561" e veja se retorna fetch', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalled();
  });
  it('fetchProduct com argumento "MLB1405519561", utiliza o endpoint ', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1405519561');
  });
  it('fetchProduct com argumento "MLB1405519561" é uma estrutura de dados', async () => {
    const param = await fetchProduct('MLB1405519561');
    expect(param).toEqual(product);
  });
  it('fetchProduct sem argumento, retorna erro: ID não informado', async () => {
    await expect(() => fetchProduct()).rejects.toThrow('ID não informado');
  });
});
