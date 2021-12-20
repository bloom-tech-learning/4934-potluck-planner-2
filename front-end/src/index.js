import React from 'react'
import { BrowserRouter as Router} from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { render } from 'react-dom';
import App from './components/App';
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

render(
  <ThemeProvider theme = {theme}>
    <Router>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
)
