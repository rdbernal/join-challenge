import Category from './Category'

interface ListSerializer {
  id_produto: number
  id_categoria_produto: number
  data_cadastro: string
  nome_produto: string
  valor_produto: number
}

export default class Product {
  constructor(
    public id: string = '',
    public categoryId: string = '',
    public creationDate: Date = new Date(),
    public name: string = '',
    public value: number | null = null
  ) {}

  public static listSerializer(data: unknown): Product[] {
    const content = data as ListSerializer[]

    return content.map(product => {
      return new Product(
        String(product.id_produto),
        String(product.id_categoria_produto),
        new Date(product.data_cadastro),
        product.nome_produto.charAt(0).toUpperCase() + product.nome_produto.slice(1),
        product.valor_produto
      )
    })
  }

  public static showSerializer(data: unknown): Product {
    const content = data as ListSerializer[]
    const [product] = content

    return new Product(
      String(product.id_produto),
      String(product.id_categoria_produto),
      new Date(product.data_cadastro),
      product.nome_produto.charAt(0).toUpperCase() + product.nome_produto.slice(1),
      product.valor_produto
    )
  }
}
