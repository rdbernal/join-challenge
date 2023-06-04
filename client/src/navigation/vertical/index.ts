// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Home',
      path: '/home',
      icon: 'mdi:store',
    },
    {
      title: 'Produtos',
      path: '/products',
      icon: 'mdi:store',
    },
    {
      title: 'Categorias',
      path: '/categories',
      icon: 'mdi:shape',
    },
  ]
}

export default navigation
