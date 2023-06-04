// Components
import Grid from '@mui/material/Grid'
import BoxTitle from '../../layouts/components/boxTitle';
import CategoryCard from '../../layouts/components/categoryCard';

const CategoriesPage = () => {
  return (
    <Grid container spacing={8}>
      <Grid item xs={12}>
        <BoxTitle title='Categorias' buttonText='Adicionar categoria' />
      </Grid>

      <Grid container item spacing={6}>
        <Grid item lg={4} md={6} xs={12}>
          <CategoryCard />
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <CategoryCard />
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <CategoryCard />
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <CategoryCard />
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <CategoryCard />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CategoriesPage;