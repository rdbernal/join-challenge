import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'

// Components
import DeleteProductModal from '../deleteProductModal'
import { useState } from 'react'
import Link from 'next/link'

const ProductCard = () => {
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false)

  return (
    <>
      <DeleteProductModal
        open={openDeleteModal}
        handleClose={() => setOpenDeleteModal(false)}
        productName='nome_produto'
      />

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
          <Stack direction='row' spacing={4}>
            <Button variant='contained' color='error' onClick={() => setOpenDeleteModal(true)}>
              Excluir
            </Button>
            <Link href={`/editProduct/${1}`}>
              <Button variant='contained'>Editar</Button>
            </Link>
          </Stack>
        </CardActions>
      </Card>
    </>
  )
}

export default ProductCard
