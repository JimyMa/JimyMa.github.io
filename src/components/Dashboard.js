import * as React from 'react';

import ToDoList from './ToDoList'
import Blog from './Blog'
import Content from './Content'
import Editor from './Editor'
import BookLesson from './BookLesson'

import {
  AppStyles,
  ToolbarStyles,
  AppBarStyles,
  MenuButtonStyles,
  ContentStyles
} from '../styles/AppStyles'

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import {Route} from 'react-router-dom'


const Styles = theme => ({
  ...AppStyles(theme),
  ...ToolbarStyles(theme),
  ...AppBarStyles(theme),
  ...MenuButtonStyles(theme),
  ...ContentStyles(theme)
})

const useStyles = makeStyles(Styles);

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}





export default function Dashboard(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  var d = new Date();
  var n = d.getTime();
  console.log(d.getDate())
  console.log(d.getMonth() + 1 )
  console.log(d.getFullYear())
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
            <Route exact path="/">
              <Blog/>
            </Route>
            <Route exact path="/todolist">
              <ToDoList/>
            </Route>
            <Route exact path="/blog">
              <Blog/>
            </Route>
            <Route exact path="/editor">
              <Editor/>
            </Route>
            <Route exact path="/content/:aid">
              <Content/>
            </Route>
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
      </main>
    </div>
  );
}
