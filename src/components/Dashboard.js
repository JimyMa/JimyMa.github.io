import * as React from 'react';

import Blog from './Blog'
import packageMetadata from '../../package.json'

import {
  AppStyles,
  ToolbarStyles,
  AppBarStyles,
  ContentStyles
} from '../styles/AppStyles'

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';


const Styles = theme => ({
  ...AppStyles(theme),
  ...ToolbarStyles(theme),
  ...AppBarStyles(theme),
  ...ContentStyles(theme)
})

const useStyles = makeStyles(Styles);

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {`Copyright © Jimy Ma ${new Date().getFullYear()} · v${packageMetadata.version}`}
    </Typography>
  );
}





export default function Dashboard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>

      <CssBaseline />
      <AppBar
        position="absolute"
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            JimyMa's Homepage
          </Typography>
        </Toolbar>
      </AppBar>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />

          <Container maxWidth="lg" className={classes.container}>
            <Blog/>
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
      </main>
    </div>
  );
}
