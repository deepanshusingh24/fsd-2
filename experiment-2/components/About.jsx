import Button from '@mui/material/Button';
import CheckboxComponent from './Checkbox';
import RatingComponent from './Rating';
import Box from '@mui/material/Box';

export default function About() {
  return (
    <Box sx={{ padding: '20px' }}>
      <h2>About Page</h2>
      <div>
        <h3>Checkboxes:</h3>
        <CheckboxComponent />
      </div>
      
    </Box>
  );
}