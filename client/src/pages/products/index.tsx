// Components
import Grid from '@mui/material/Grid'
import BoxTitle from '../../layouts/components/boxTitle'
import ProductCard from '../../layouts/components/productCard'

const ProductsPage = () => {
  return (
    <Grid container spacing={8}>
      <Grid item xs={12}>
        <BoxTitle title='Produtos' />
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
