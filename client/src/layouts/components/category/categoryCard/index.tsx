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

// Models
import Category from 'src/models/Category'

interface CategoryCardProps {
  category: Category
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false)

  return (
    <>
      <DeleteCategoryModal
        open={openDeleteModal}
        handleClose={() => setOpenDeleteModal(false)}
        category={category}
      />

      <Card>
        <CardContent>
          <Typography variant='h5' component='h2'>
            {category.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Stack direction='row' spacing={4}>
            <Button variant='contained' color='error' onClick={() => setOpenDeleteModal(true)}>
              Excluir
            </Button>
            <Link href={`/editCategory/${category.id}`}>
              <Button variant='contained'>Editar</Button>
            </Link>
          </Stack>
        </CardActions>
      </Card>
    </>
  )
}

export default CategoryCard
