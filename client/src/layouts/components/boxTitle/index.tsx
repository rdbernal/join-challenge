import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'

interface BoxTitleProps {
  title: string
  children?: ReactJSXElement
}

const BoxTitle = ({ title, children }: BoxTitleProps) => {
  return (
    <Card>
      <CardContent>
        <Stack direction='row' justifyContent={'space-between'}>
          <Typography variant='h4' component='h1'>
            {title}
          </Typography>
          {children}
        </Stack>
      </CardContent>
    </Card>
  )
}

export default BoxTitle
