import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface BoxTitleProps {
  title: string,
  buttonText: string
}

const BoxTitle = ({ title, buttonText }: BoxTitleProps) => {
  return (
    <Card>
      <CardContent>
        <Stack direction='row' justifyContent={'space-between'}>
          <Typography variant='h4' component='h1'>{title}</Typography>
          <Button variant="contained">{buttonText}</Button>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default BoxTitle
