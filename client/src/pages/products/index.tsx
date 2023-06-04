import Button from '@mui/material/Button'

// Components
import Grid from '@mui/material/Grid'
import BoxTitle from '../../layouts/components/boxTitle'
import ProductCard from '../../layouts/components/product/productCard'
import Link from 'next/link'

const ProductsPage = () => {
  return (
    <Grid container spacing={8}>
      <Grid item xs={12}>
        <BoxTitle title='Produtos'>
          <Link href='/registerProduct'>
            <Button variant='contained'>Adicionar produto</Button>
          </Link>
        </BoxTitle>
      </Grid>

      <Grid container item spacing={6}>
        <Grid item lg={4} md={6} xs={12}>
          <ProductCard />
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <ProductCard />
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <ProductCard />
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <ProductCard />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ProductsPage
