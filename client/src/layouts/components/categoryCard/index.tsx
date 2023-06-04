import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const CategoryCard = () => {
  return (
    <Card>
      <CardContent>
          <Typography variant='h5' component='h2'>
            Nome da categoria
          </Typography>
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

export default CategoryCard
