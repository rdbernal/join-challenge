import { useState } from 'react';
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

// Components
import Modal from '../../modal'

// Modal
import Category from 'src/models/Category';

// Services
import CategoryService from 'src/services/CategoryService';

// Services instances
const categoryService = new CategoryService();

interface DeleteCategoryModalProps {
  open: boolean
  handleClose: () => void
  category: Category
}

const DeleteCategoryModal = ({ open, handleClose, category }: DeleteCategoryModalProps) => {
  const [errorMessage, setErrorMessage] = useState<string>('')

  async function handleDelete() {
    console.log('handle delete category');

    try {
      console.log('try');
      await categoryService.destroy(category.id);
      console.log('pós requisição');
      handleClose()
    } catch (error) {
      console.log(error);
      console.log('catch');
      setErrorMessage('Erro ao deletar categoria.')
    }
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
          <Button variant='contained' color='error' onClick={handleDelete}>
            Excluir
          </Button>
        </Stack>
      </Stack>
    </Modal>
  )
}

export default DeleteCategoryModal
