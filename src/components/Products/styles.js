import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        margin: 0,
        backgroundColor: '#2F3042',
      },
      media: {
        height: 150,
        paddingTop: '56.25%',
        backgroundSize: 'cover',
      },
      cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: 10
      },
      title: {
        color: 'white',
      },
      
      
}))

/* import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
      maxWidth: '100%',
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
      backgroundSize: 'cover',
    },
    cardActions: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    cardContent: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  })); */