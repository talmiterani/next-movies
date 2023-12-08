import { AppBar,Toolbar, Typography, Container } from '@mui/material';
import Logo from '../components/Logo';
import MoviesList from '../components/MoviesList';
import Footer from '../components/Footer';

const Home = () => {

  return (
    <>
  
  <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none', marginBottom: 2 }}>
        <Toolbar>
        <Logo/>
          {/* <img src={logoUrl} alt="Logo" style={{ height: 40, marginRight: 10 }} />
          <Typography variant="h6" component="div">
            Your Logo Title
          </Typography> */}
        </Toolbar>
      </AppBar>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '50vh',
        }}
        >
          <Typography variant="h2" sx={{  textAlign: 'center',fontWeight: 'bold' }}>
            EXPLORE YOUR NEXT MOVIES AND TV SHOWS
          </Typography>
                </Container>

        <MoviesList/>
      <Footer/>
      
    </>
  )
};

export default Home;