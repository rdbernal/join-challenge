import Product from 'src/models/Product'
import BaseService from './BaseService'
import { validateColors } from '@iconify/tools';

export default class ProductService extends BaseService {
  constructor() {
    super();
    this.endpoint = 'products'
  }

  // public async index(): Promise<unknown> {
  //   const response = await fetch(`${this.connection}/${this.endpoint}`, {
  //     method: 'GET'
  //   }).then(response => response.json())

  //   return response
  // }

  // public async show(id: string): Promise<unknown> {
  //   const response = await fetch(`${this.connection}/${this.endpoint}/${id}`, {
  //     method: 'GET'
  //   }).then(response => response.json())

  //   return response
  // }

  public async store(product: Product): Promise<void> {
    await this.connection.post(String(this.endpoint), {
      nome_produto: product.name,
      valor_produto: product.value,
      id_categoria_produto: product.categoryId
    });
  }

  public async update(product: Product): Promise<void> {
    await this.connection.put(`${this.endpoint}/${product.id}`, {
      nome_produto: product.name,
      valor_produto: product.value,
      id_categoria_produto: product.categoryId
    });
  }

  public async destroy(id: string): Promise<void> {
    await this.connection.delete(`${this.endpoint}/${id}`);
  }
}
