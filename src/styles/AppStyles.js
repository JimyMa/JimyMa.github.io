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
    position: 'fixed',
    top: 64,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: 'auto',
    [theme.breakpoints.down('xs')]: {
      top: 56,
    },
    '@media (max-width:600px) and (orientation: landscape)': {
      top: 48,
    },
  },
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
