import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'

const ProductCard = () => {
  return (
    <Card>
      <CardContent>
        <Stack spacing={4}>
          <div>
            <Typography variant='h5' component='h2'>
              Nome do produto
            </Typography>

            <Typography component='span'>Cadastro: data_de_cadastro</Typography>
          </div>

          <div>
            <Chip label='Categoria' variant='outlined'></Chip>
          </div>

          <Typography variant='h5' component='h3'>
            R$ 31,99
          </Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Button variant='contained' color='error'>
          Excluir
        </Button>
        <Button variant='contained'>Editar</Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard
