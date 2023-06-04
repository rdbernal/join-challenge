import { Card } from "@mui/material";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

interface CustomFormProps {
  children: ReactJSXElement
}

const style = {
  py: 6,
  px: 6
}

const CustomForm = ({children}: CustomFormProps) => {
  return (
    <Card sx={style}>
      <form>
        {children}
      </form>
    </Card>
  )
}

export default CustomForm;