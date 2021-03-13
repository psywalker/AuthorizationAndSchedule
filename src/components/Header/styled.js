import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  header: {
    alignSelf: 'center',
    background: 'transparent',
    transition: 'all 0.5s ease',
    color: '#41403E',
    fontSize: '2rem',
    letterSpacing: '1px',
    outline: 'none',
    boxShadow: '20px 38px 34px -26px rgb(0 0 0 / 20%)',
    borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
    marginBottom: '20px'
  },
  login: {
    color: '#fff',
    marginLeft: '20px'
  },
  button: {
    color: '#fff',
    borderColor: "#fff"
  }
}));
