import { useEffect, useState } from 'react'

// Components
import Grid from '@mui/material/Grid'
import BoxTitle from '../../layouts/components/boxTitle'
import CategoryCard from '../../layouts/components/category/categoryCard'
import Link from 'next/link'
import { Button } from '@mui/material'

// Hooks
import { useFetch } from 'src/hooks/useFetch'
import Category from 'src/models/Category'

const CategoriesPage = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const { data } = useFetch<{ status: boolean; categories: Category[] }>('http://localhost:8000/api/categories')

  useEffect(() => {
    if (data) {
      setCategories(Category.listSerializer(data.categories))
    }
  }, [data])

  return (
    <Grid container spacing={8}>
      <Grid item xs={12}>
        <BoxTitle title='Categorias'>
          <Link href='/registerCategory'>
            <Button variant='contained'>Adicionar</Button>
          </Link>
        </BoxTitle>
      </Grid>

      <Grid container item spacing={6}>
        {categories.map(category => (
          <Grid key={category.id} item lg={4} md={6} xs={12}>
            <CategoryCard category={category} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default CategoriesPage
