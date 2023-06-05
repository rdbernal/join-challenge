import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Grid, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import LoadingButton from '@mui/lab/LoadingButton'

// Components
import BoxTitle from 'src/layouts/components/boxTitle'

// Services
import CategoryService from 'src/services/CategoryService'
import { AxiosError, AxiosResponse } from 'axios'

// Services instances
const categoryService = new CategoryService()

const RegisterCategory = () => {
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { push } = useRouter()

  const {
    register,
    handleSubmit,
    formState: { isValid }
  } = useForm()

  const onSubmit = async (data: any) => {
    setIsLoading(true)
    const formData = data as { categoryName: string }

    try {
      await categoryService.store(formData.categoryName)
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

  return (
    <Grid container spacing={8}>
      <Grid item xs={12}>
        <BoxTitle title='Nova categoria' />
      </Grid>

      <Grid item xs={12}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container item xs={12} spacing={6}>
            <Grid item xs={12}>
              <FormControl fullWidth sx={{ m: 1 }}>
                <TextField
                  id='outlined-required'
                  label='Nome da categoria'
                  defaultValue=''
                  {...register('categoryName', { required: true })}
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
    </Grid>
  )
}

export default RegisterCategory
