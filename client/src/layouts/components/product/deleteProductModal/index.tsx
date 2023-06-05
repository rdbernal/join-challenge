import { useState } from 'react'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

// Components
import Modal from '../../modal'

// Modal
import Product from 'src/models/Product'

// Services
import ProductService from 'src/services/ProductService'

// Services instances
const productService = new ProductService()

interface DeleteProductModalProps {
  open: boolean
  handleClose: () => void
  product: Product
}

const DeleteProductModal = ({ open, handleClose, product }: DeleteProductModalProps) => {
  const [errorMessage, setErrorMessage] = useState<string>('');

  async function handleDelete() {
    try {
      await productService.destroy(product.id)
      handleClose()
    } catch (error) {
      setErrorMessage('Erro ao deletar produto.')
    }
  }

  return (
    <Modal open={open} handleClose={handleClose}>
      <Stack spacing={6}>
        <Typography variant='h6' component='span' align='center'>
          Deseja excluir o produto {product.name}?
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

export default DeleteProductModal
