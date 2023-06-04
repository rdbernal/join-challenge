import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Components
import DeleteCategoryModal from '../deleteCategoryModal'
import { useState } from 'react'
import Link from 'next/link'
import { Stack } from '@mui/material'

const CategoryCard = () => {
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false)

  return (
    <>
      <DeleteCategoryModal
        open={openDeleteModal}
        handleClose={() => setOpenDeleteModal(false)}
        categoryName='nome_categoria'
      />

      <Card>
        <CardContent>
          <Typography variant='h5' component='h2'>
            Nome da categoria
          </Typography>
        </CardContent>
        <CardActions>
          <Stack direction='row' spacing={4}>
            <Button variant='contained' color='error' onClick={() => setOpenDeleteModal(true)}>
              Excluir
            </Button>
            <Link href={`/editCategory/${1}`}>
              <Button variant='contained'>Editar</Button>
            </Link>
          </Stack>
        </CardActions>
      </Card>
    </>
  )
}

export default CategoryCard
