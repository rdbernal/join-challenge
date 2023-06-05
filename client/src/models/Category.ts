interface ListSerializer {
  id_categoria_planejamento: number
  nome_categoria: string
}
;[]

export default class Category {
  constructor(public id: string = '', public name: string = '') {}

  public static listSerializer(data: unknown): Category[] {
    const content = data as ListSerializer[]

    return content.map(category => {
      return new Category(
        String(category.id_categoria_planejamento),
        category.nome_categoria.charAt(0).toUpperCase() + category.nome_categoria.slice(1)
      )
    })
  }

  public static showSerializer(data: unknown): Category {
    const content = data as ListSerializer[]
    const [category] = content

    return new Category(
      String(category.id_categoria_planejamento),
      category.nome_categoria.charAt(0).toUpperCase() + category.nome_categoria.slice(1)
    )
  }
}
