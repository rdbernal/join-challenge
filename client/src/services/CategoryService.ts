import Category from 'src/models/Category'
import BaseService from './BaseService'

export default class CategoryService extends BaseService {
  constructor() {
    super();
    this.endpoint = 'categories'
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

  public async store(name: string): Promise<void> {
    await this.connection.post(String(this.endpoint), {
      nome_categoria: name
    });
  }

  public async update(category: Category): Promise<void> {
    await this.connection.put(`${this.endpoint}/${category.id}`, {
      nome_categoria: category.name
    });
  }

  public async destroy(id: string): Promise<void> {
    await this.connection.delete(`${this.endpoint}/${id}`);
  }
}
