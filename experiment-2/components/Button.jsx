import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
export default function ButtonBasic() {
  return (
    <>
    <Button size="small" variant='outlined'>Small</Button>
    <Button size="large" variant='outlined'>Large</Button>
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </>
  ) 

}