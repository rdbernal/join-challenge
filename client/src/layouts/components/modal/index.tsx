import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box';

interface ModalComponentProps {
  children: ReactJSXElement
  open: boolean
  handleClose: () => void
}

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 380,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

const ModalComponent = ({ children, open, handleClose }: ModalComponentProps) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        {children}
      </Box>
    </Modal>
  )
}

export default ModalComponent
