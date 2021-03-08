import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: '300px',
    backgroundSize: 'cover',
  },
  root: {
    margin: 0,
    backgroundColor: '#EAEAEA',
    width: '290px',
    maxWidth: '290px',
    height: '430px'
  },
  cardContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '40px'
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
  emptyButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItem: 'flex-end'
  }
}));