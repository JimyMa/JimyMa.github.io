export const ToolbarStyles = theme => ({
  toolbar: {
    paddingRight: 24,
  },
})

export const AppBarStyles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  title: {
    flexGrow: 1,
  },
})

export const ContentStyles = theme => ({
  content: {
    backgroundColor:
      theme.palette.grey[100],
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
})

export const AppStyles = theme => ({
  root: {
    display: 'flex',
  },
});
