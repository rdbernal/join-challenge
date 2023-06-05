import { useFetch } from 'src/hooks/useFetch'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Grid } from '@mui/material'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Button from '@mui/material/Button'

// Components
import BoxTitle from 'src/layouts/components/boxTitle'
import CustomForm from 'src/layouts/components/customForm'

// Models
import Product from 'src/models/Product'

const EditProduct = () => {
  const {
    query: { index }
  } = useRouter()
  const { data } = useFetch<{ status: boolean; product: Product[] }>(`http://localhost:8000/api/products/${index}`)

  console.log(data?.product)

  const [age, setAge] = useState<string>('')

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value)
  }

  return (
    <Grid container spacing={8}>
      <Grid item xs={12}>
        <BoxTitle title='Editar produto' />
      </Grid>

      <Grid item xs={12}>
        <CustomForm>
          <Grid container item xs={12} spacing={6}>
            <Grid item xs={6}>
              <FormControl fullWidth sx={{ m: 1 }}>
                <TextField required id='outlined-required' label='Nome do produto' defaultValue='Hello World' />{' '}
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor='outlined-adornment-amount'>Amount</InputLabel>
                <OutlinedInput
                  id='outlined-adornment-amount'
                  startAdornment={<InputAdornment position='start'>R$</InputAdornment>}
                  label='Amount'
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>Categoria</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={age}
                  label='Categoria'
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
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

export default EditProduct
