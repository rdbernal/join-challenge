import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

// Components
import Modal from '../../modal'

interface DeleteProductModalProps {
  open: boolean
  handleClose: () => void
  productName: string
}

const DeleteProductModal = ({ open, handleClose, productName }: DeleteProductModalProps) => {
  return (
    <Modal open={open} handleClose={handleClose}>
      <Stack spacing={6}>
        <Typography variant='h6' component='span' align='center'>
          Deseja excluir o produto {productName}?
        </Typography>
        <Stack spacing={2}>
          <Button variant='contained' onClick={handleClose}>Cancelar</Button>
          <Button variant='contained' color='error'>
            Excluir
          </Button>
        </Stack>
      </Stack>
    </Modal>
  )
}

export default DeleteProductModal
