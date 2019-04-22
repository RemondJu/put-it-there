import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { NavLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const styles = {
  root: {
    flexGrow: 1,
  }
};

const NavBar = (props) => {
  const { classes } = props;

  return ( 
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Grid container spacing={24}>
            <Grid item xs align="center">
              <NavLink to="/">Link 1</NavLink>
            </Grid>
            <Grid item xs align="center">
              <NavLink to="/">Link 2</NavLink>
            </Grid>
            <Grid item xs align="center">
              <NavLink to="/">Put it there</NavLink>
            </Grid>
            <Grid item xs align="center">
              <NavLink to="/">Link 3</NavLink>
            </Grid>
            <Grid item xs align="center">
              <NavLink to="/">Link 4</NavLink>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
   );
}

NavBar.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string
  }).isRequired,
};
 
export default withStyles(styles)(NavBar);