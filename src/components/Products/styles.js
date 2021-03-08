import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        margin: 0,
        backgroundColor: '#EAEAEA',
        width: '276px',
        maxWidth: '276px',
        height: '430px'
      },
      media: {
        height: '280px',
        maxHeight: '280px',
        backgroundSize: 'cover',
      },
      cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: 10,
        heigth: '130px',
        maxHeight: '130px',
      },
      title: {
        color: 'grey',
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