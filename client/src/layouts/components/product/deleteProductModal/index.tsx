import { useFetch } from 'src/hooks/useFetch'
import { useState } from 'react'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import LoadingButton from '@mui/lab/LoadingButton'

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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { data, mutate } = useFetch<{ status: boolean; products: Product[] }>('http://localhost:8000/api/products')

  async function handleDelete() {
    setIsLoading(true)

    try {
      await productService.destroy(product.id)

      if (data) {
        const modifiedProducts = data.products.filter(item => item.id !== product.id);
        mutate({status: true, products: modifiedProducts}, true);
      }

      handleClose()
    } catch (error) {
      setErrorMessage('Erro ao deletar produto.')
    }

    setIsLoading(false)
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

export default DeleteProductModal
