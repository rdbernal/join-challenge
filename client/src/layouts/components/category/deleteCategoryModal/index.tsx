import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

// Components
import Modal from '../../modal'

interface DeleteCategoryModalProps {
  open: boolean
  handleClose: () => void
  categoryName: string
}

const DeleteCategoryModal = ({ open, handleClose, categoryName }: DeleteCategoryModalProps) => {
  return (
    <Modal open={open} handleClose={handleClose}>
      <Stack spacing={6}>
        <Typography variant='h6' component='span' align='center'>
          Deseja excluir a categoria {categoryName}?
        </Typography>
        <Stack spacing={2}>
          <Button variant='contained' onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant='contained' color='error'>
            Excluir
          </Button>
        </Stack>
      </Stack>
    </Modal>
  )
}

export default DeleteCategoryModal
