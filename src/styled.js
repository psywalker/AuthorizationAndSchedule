import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  container: {
    flexWrap: 'wrap',
    backgroundColor: '#333',
    borderRadius: '4px',
    padding: '15px 20px 0',
    margin: '20px auto',
    minWidth: '600px'
  },
  item1: {
    margin: '0 0 20px',
    width: '100%',
    height: '350px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '4px',
    boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
    background: '#fff',
  },
  item2: {
    width: '100%',
    height: '430px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '4px',
    boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
    background: '#fff',
    marginBottom: '20px'
  }
}));