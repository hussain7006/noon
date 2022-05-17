import './App.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="main">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>

      </Grid>
    </div>
  );
}

export default App;
