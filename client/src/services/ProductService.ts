import Product from 'src/models/Product'
import BaseService from './BaseService'

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
    await this.connection.post(String(this.endpoint), product);
  }

  public async update(product: Product): Promise<void> {
    await this.connection.put(`${this.endpoint}/${product.id}`, product);
  }

  public async destroy(id: string): Promise<void> {
    await this.connection.delete(`${this.endpoint}/${id}`);
  }
}
