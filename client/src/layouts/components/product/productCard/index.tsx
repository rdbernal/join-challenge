import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import { DateTime } from 'luxon'

// Components
import DeleteProductModal from '../deleteProductModal'
import { useEffect, useState } from 'react'
import Link from 'next/link'

// Models
import Product from 'src/models/Product'
import { useFetch } from 'src/hooks/useFetch'
import Category from 'src/models/Category'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false)
  const { data } = useFetch<{ status: boolean; category: Category[] }>(
    `http://localhost:8000/api/categories/${product.categoryId}`
  )
  const [category, setCategory] = useState<Category>(new Category())

  useEffect(() => {
    if (data) {
      setCategory(Category.showSerializer(data.category))
    }
  }, [data])

  return (
    <>
      <DeleteProductModal open={openDeleteModal} handleClose={() => setOpenDeleteModal(false)} product={product} />

      <Card>
        <CardContent>
          <Stack spacing={4}>
            <div>
              <Typography variant='h5' component='h2'>
                {product.name}
              </Typography>

              <Typography component='span'>
                Cadastro: {DateTime.fromJSDate(product.creationDate).toFormat('dd/MM/yyyy')}
              </Typography>
            </div>

            <div>
              <Chip label={category.name} variant='outlined'></Chip>
            </div>

            <Typography variant='h5' component='h3'>
              {product.value?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
            </Typography>
          </Stack>
        </CardContent>
        <CardActions>
          <Stack direction='row' spacing={4}>
            <Button variant='contained' color='error' onClick={() => setOpenDeleteModal(true)}>
              Excluir
            </Button>
            <Link href={`/editProduct/${product.id}`}>
              <Button variant='contained'>Editar</Button>
            </Link>
          </Stack>
        </CardActions>
      </Card>
    </>
  )
}

export default ProductCard
