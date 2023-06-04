import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

interface BoxTitleProps {
  title: string
}

const BoxTitle = ({ title }: BoxTitleProps) => {
  return (
    <Card>
      <CardContent>
        <Typography variant='h4' component='h1'>{title}</Typography>
      </CardContent>
    </Card>
  )
}

export default BoxTitle
