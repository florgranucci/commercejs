import { Grid } from "@material-ui/core";

import useStyles from './styles'

const Home = () => {

  const classes = useStyles();
  return (
        <Grid container className={classes.container}>
         <img style={{width: '100%'}} src='https://i.ibb.co/cwpYKDb/Banner-Principal-Labiales-1920x744-OK.webp' alt='banner' />
        </Grid>
  );
};

export default Home;
