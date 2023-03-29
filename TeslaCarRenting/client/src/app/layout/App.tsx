import { ThemeProvider } from "@emotion/react";
import { Container, CssBaseline } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";
import createTheme from "@mui/material/styles/createTheme";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";


import background from './images/mallorca.jpg'

function App() {



    return (
        < div style={{
          backgroundImage:  `url("https://pixabay.com/get/g503ebdbc8575986fa2882021279aef8ee9546debb20d232564120a521918423bf8e545090825d886a37bcb0fdc800658.jpg")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            position: "fixed",
            width: '100vw',
            height: '100vh'
          
        }} >
            <CssBaseline/>
            <Header />
            <Container>
            <Catalog />
            </Container>
            </div>
  );
}

export default App;
