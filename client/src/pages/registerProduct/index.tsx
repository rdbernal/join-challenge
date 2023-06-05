import { ChangeEvent, useEffect, useState } from 'react'
import { Grid, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Button from '@mui/material/Button'
import LoadingButton from '@mui/lab/LoadingButton'

// Components
import BoxTitle from 'src/layouts/components/boxTitle'
import Product from 'src/models/Product'
import Category from 'src/models/Category'
import { useRouter } from 'next/router'
import { useFetch } from 'src/hooks/useFetch'
import { useForm } from 'react-hook-form'

// Services
import ProductService from 'src/services/ProductService'
import { AxiosError, AxiosResponse } from 'axios'

// Services instances
const productService = new ProductService()

const RegisterProduct = () => {
  const [product, setProduct] = useState<Product>(new Product())
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { push } = useRouter()

  const { data: categoryData, isLoading: isLoadingCategory } = useFetch<{ status: boolean; categories: Category[] }>(
    'http://localhost:8000/api/categories'
  )

  useEffect(() => {
    if (categoryData) {
      setCategories(Category.listSerializer(categoryData.categories))
    }
  }, [categoryData])

  const {
    register,
    handleSubmit,
    formState: { isValid }
  } = useForm()

  const onSubmit = async () => {
    setIsLoading(true)

    try {
      await productService.store(product);
      push('/products')
    } catch(error) {
      const { response } = error as AxiosError;
      const { data } = response as AxiosResponse<{ message: string }>;
      handleError(data.message);
    }

    setIsLoading(false)
  }

  function handleError(message: string) {
    if (message.includes('The nome produto field is required')) {
      setErrorMessage('O campo nome do produto é obrigatório');
    } else if (message.includes('The valor produto field is required')) {
      setErrorMessage('O campo valor do produto é obrigatório');
    } else if (message.includes('The valor produto field must be at least 0.1')) {
      setErrorMessage('O valor do produto deve ser maior que R$ 0,00');
    } else if (message.includes('Category not found')) {
      setErrorMessage('O campo categoria é obrigatório');
    } else if (message.includes('The nome produto has already been taken')) {
      setErrorMessage('Esse produto já está cadastrado');
    } else {
      setErrorMessage('Erro ao adicionar produto');
    }
  }

  function handleNewName(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setProduct({
      ...product,
      name: event.target.value
    })
  }

  function handleNewCategory(event: SelectChangeEvent<string>) {
    setProduct({
      ...product,
      categoryId: event.target.value
    })
  }

  function handleNewValue(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const value = Number(event.target.value.replace(',', '.'))

    setProduct({
      ...product,
      value: Number(value)
    })
  }

  return (
    <Grid container spacing={8}>
      <Grid item xs={12}>
        <BoxTitle title='Novo produto' />
      </Grid>

      {!isLoadingCategory && categories.length === 0 && (
        <Grid item xs={12} container direction='row' justifyContent='center' alignItems='center'>
          <Typography variant='h6' component='span' align='center'>
            Cadastre uma categoria para adicionar podutos
          </Typography>
        </Grid>
      )}

      {!isLoadingCategory && categories.length > 0 && (
        <Grid item xs={12}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container item xs={12} spacing={6}>
              <Grid item xs={6}>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <TextField
                    id='outlined-required'
                    label='Nome do produto'
                    value={product.name || ''}
                    {...register('productName', { required: false })}
                    onChange={handleNewName}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor='outlined-adornment-amount'>Amount</InputLabel>
                  <OutlinedInput
                    type='number'
                    id='outlined-adornment-amount'
                    startAdornment={<InputAdornment position='start'>R$</InputAdornment>}
                    label='Amount'
                    value={product.value || 0}
                    {...register('productValue', { required: false })}
                    onChange={handleNewValue}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id='demo-simple-select-label'>Categoria</InputLabel>
                  <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    defaultValue='0'
                    value={product.categoryId}
                    label='Categoria'
                    {...register('productCategory', { required: false })}
                    onChange={handleNewCategory}
                  >
                    {categories.map(category => (
                      <MenuItem key={category.id} value={category.id}>
                        {category.name}
                      </MenuItem>
                    ))}
                  </Select>
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
                  <Button variant='contained' type='submit'>
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

export default RegisterProduct
