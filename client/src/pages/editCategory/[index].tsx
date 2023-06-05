import { useForm } from 'react-hook-form'
import { ChangeEvent, useEffect, useState } from 'react'
import { useFetch } from 'src/hooks/useFetch'
import { useRouter } from 'next/router'
import { Grid, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import LoadingButton from '@mui/lab/LoadingButton'

// Components
import BoxTitle from 'src/layouts/components/boxTitle'

// Models
import Category from 'src/models/Category'

// Services
import CategoryService from 'src/services/CategoryService'
import { AxiosError, AxiosResponse } from 'axios'

// Services instances
const categoryService = new CategoryService()

const EditCategory = () => {
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [category, setCategory] = useState<Category>(new Category())
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { push } = useRouter()
  const {
    query: { index }
  } = useRouter()

  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty }
  } = useForm()

  const { data, isLoading: isLoadingCategory } = useFetch<{ status: boolean; category: Category[] }>(
    `http://localhost:8000/api/categories/${index}`
  )

  useEffect(() => {
    if (data) {
      setCategory(Category.showSerializer(data.category))
    }
  }, [data])

  const onSubmit = async () => {
    setIsLoading(true)

    try {
      await categoryService.update(category)
      push('/categories')
    } catch (error){
      const { response } = error as AxiosError;
      const { data } = response as AxiosResponse<{ message: string }>;
      handleError(data.message);
    }

    setIsLoading(false)
  }

  function handleError(message: string) {
    if (message.includes('The nome categoria has already been taken')) {
      setErrorMessage('Categoria já cadastrada');
    } else {
      setErrorMessage('Erro ao adicionar produto');
    }
  }

  function handleNewName(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setCategory({
      ...category,
      name: event.target.value
    })
  }

  return (
    <Grid container spacing={8}>
      <Grid item xs={12}>
        <BoxTitle title='Editar categoria' />
      </Grid>

      {isLoadingCategory && (
        <Grid item xs={12} container direction='row' justifyContent='center' alignItems='center'>
          <Typography variant='h6' component='span' align='center'>
            Carregando...
          </Typography>
        </Grid>
      )}

      {!isLoadingCategory && (
        <Grid item xs={12}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container item xs={12} spacing={6}>
              <Grid item xs={12}>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <TextField
                    required
                    id='outlined-required'
                    label='Nome da categoria'
                    value={category?.name || ``}
                    {...register('categoryName', { required: true })}
                    onChange={handleNewName}
                  />{' '}
                </FormControl>
              </Grid>

              <Grid item xs={12} container direction='row' justifyContent='center' alignItems='center'>
                {errorMessage && (
                  <Typography variant='h6' component='span' align='center' color='error'>
                    {errorMessage}
                  </Typography>
                )}
              </Grid>

              <Grid item xs={12} container direction='row' justifyContent='center' alignItems='center'>
                {!isLoading && (
                  <Button variant='contained' type='submit' disabled={!isValid}>
                    Salvar
                  </Button>
                )}

                {isLoading && (
                  <LoadingButton loading variant='contained' color='primary' disabled>
                    Carregando...
                  </LoadingButton>
                )}
              </Grid>
            </Grid>
          </form>
        </Grid>
      )}
    </Grid>
  )
}

export default EditCategory
