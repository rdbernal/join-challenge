import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useFetch } from 'src/hooks/useFetch'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

// Components
import BoxTitle from '../../layouts/components/boxTitle'
import ProductCard from '../../layouts/components/product/productCard'

// Models
import Product from 'src/models/Product'
import { Typography } from '@mui/material'

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([])
  const { data, isLoading } = useFetch<{ status: boolean; products: Product[] }>('http://localhost:8000/api/products')

  useEffect(() => {
    if (data) {
      setProducts(Product.listSerializer(data.products))
    }
  }, [data])

  return (
    <Grid container spacing={8}>
      <Grid item xs={12}>
        <BoxTitle title='Produtos'>
          <Link href='/registerProduct'>
            <Button variant='contained'>Adicionar</Button>
          </Link>
        </BoxTitle>
      </Grid>

      {isLoading && (
        <Grid item xs={12} container direction='row' justifyContent='center' alignItems='center'>
          <Typography variant='h6' component='span' align='center'>
            Carregando...
          </Typography>
        </Grid>
      )}

      {!isLoading && products.length === 0 && (
        <Grid item xs={12} container direction='row' justifyContent='center' alignItems='center'>
          <Typography variant='h6' component='span' align='center'>
            Nenhum produto cadastrado
          </Typography>
        </Grid>
      )}

      {!isLoading && (
        <Grid container item spacing={6}>
          {products.map(product => (
            <Grid key={product.id} item lg={4} md={6} xs={12}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </Grid>
  )
}

export default ProductsPage
