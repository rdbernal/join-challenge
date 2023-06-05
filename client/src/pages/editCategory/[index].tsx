import { useEffect, useState } from 'react'
import { useFetch } from 'src/hooks/useFetch'
import { useRouter } from 'next/router'
import { Grid } from '@mui/material'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'

// Components
import BoxTitle from 'src/layouts/components/boxTitle'
import CustomForm from 'src/layouts/components/customForm'

// Models
import Category from 'src/models/Category'

const EditCategory = () => {
  const [category, setCategory] = useState<Category>()
  const {
    query: { index }
  } = useRouter()
  const { data } = useFetch<{ status: boolean; category: Category[] }>(`http://localhost:8000/api/categories/${index}`)

  useEffect(() => {
    console.log('useEffect')
    if (data) {
      setCategory(Category.showSerializer(data.category))
    }
  }, [data])

  return (
    <Grid container spacing={8}>
      <Grid item xs={12}>
        <BoxTitle title='Editar categoria' />
      </Grid>

      <Grid item xs={12}>
        <CustomForm>
          <Grid container item xs={12} spacing={6}>
            <Grid item xs={12}>
              <FormControl fullWidth sx={{ m: 1 }}>
                <TextField required id='outlined-required' label='Nome da categoria' defaultValue='Hello World' />{' '}
              </FormControl>
            </Grid>

            <Grid item xs={12} container direction='row' justifyContent='center' alignItems='center'>
              <Button variant='contained'>Salvar</Button>
            </Grid>
          </Grid>
        </CustomForm>
      </Grid>
    </Grid>
  )
}

export default EditCategory