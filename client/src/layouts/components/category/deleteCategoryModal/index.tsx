import { useState } from 'react'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import LoadingButton from '@mui/lab/LoadingButton'
import { useFetch } from 'src/hooks/useFetch'

// Components
import Modal from '../../modal'

// Modal
import Category from 'src/models/Category'

// Services
import CategoryService from 'src/services/CategoryService'
import { AxiosError, AxiosResponse } from 'axios'

// Services instances
const categoryService = new CategoryService()

interface DeleteCategoryModalProps {
  open: boolean
  handleClose: () => void
  category: Category
}

const DeleteCategoryModal = ({ open, handleClose, category }: DeleteCategoryModalProps) => {
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { data, mutate } = useFetch<{ status: boolean; categories: Category[] }>('http://localhost:8000/api/categories')

  async function handleDelete() {
    setIsLoading(true)

    try {
      await categoryService.destroy(category.id)

      if (data) {
        const modifiedCategories = data.categories.filter(item => item.id !== category.id)
        mutate({ status: true, categories: modifiedCategories }, true)
      }

      handleClose()
    } catch (error) {
      const { response } = error as AxiosError
      const { data } = response as AxiosResponse<{ message: string }>

      if (data.message.includes('foreign key constraint fails')) {
        setErrorMessage('A categoria está sendo usada')
      } else {
        setErrorMessage('Erro ao deletar categoria.')
      }
    }

    setIsLoading(false)
  }

  return (
    <Modal open={open} handleClose={handleClose}>
      <Stack spacing={6}>
        <Typography variant='h6' component='span' align='center'>
          Deseja excluir a categoria {category.name}?
        </Typography>

        {errorMessage && (
          <Typography variant='h6' component='span' align='center' color='error'>
            {errorMessage}
          </Typography>
        )}

        <Stack spacing={2}>
          <Button variant='contained' onClick={handleClose}>
            Cancelar
          </Button>
          {!isLoading && (
            <Button variant='contained' color='error' onClick={handleDelete}>
              Excluir
            </Button>
          )}
          {isLoading && (
            <LoadingButton loading variant='contained' color='primary' disabled>
              Carregando...
            </LoadingButton>
          )}
        </Stack>
      </Stack>
    </Modal>
  )
}

export default DeleteCategoryModal
