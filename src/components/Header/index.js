import React, { memo } from "react";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Box, Grid, Button, Avatar } from '@material-ui/core';
import { useStyles } from './styled'

export const Header = memo(({ handleLogOut, login }) => {
  const classes = useStyles();

  return (
    <Grid 
      className={classes.header} 
      container wrap="nowrap" 
      justify="space-between"  
      alignItems="center"
    >
      <Grid container wrap="nowrap" alignItems="center">
        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
        <Box component="span" className={classes.login}>
          {login}
        </Box>
      </Grid>
      <Grid container item justify="flex-end">
        <Button variant="outlined" color="primary"  className={classes.button} startIcon={<ExitToAppIcon />} onClick={handleLogOut}>
          Log Out
        </Button>
      </Grid>
  </Grid>
 )
})