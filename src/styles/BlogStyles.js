export const BlogStyles = theme => ({
  layout: {
    display: 'grid',
    gridTemplateColumns: '250px minmax(0, 1fr)',
    gap: theme.spacing(4),
    alignItems: 'start',
  },
  root: {
    maxWidth: "100%",
  },
  sidebar: {
    position: 'sticky',
    top: theme.spacing(4),
    width: '100%',
    height: 'calc(100vh - 128px)',
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    borderRight: `1px solid ${theme.palette.divider}`,
    overflowX: 'hidden',
    overflowY: 'scroll',
    boxSizing: 'border-box',
  },
  mainContent: {
    minWidth: 0,
    width: '100%',
  },
  avatar: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    margin: '0 auto 16px',
  },
  contactIcon: {
    marginRight: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  // 添加News Item样式类
  newsItem: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
    borderRadius: theme.shape.borderRadius,
    borderLeft: `4px solid ${theme.palette.primary.main}`,
    boxShadow: theme.shadows[1],
  },
  newsDate: {
    fontWeight: 'bold',
    color: theme.palette.primary.dark,
    marginBottom: theme.spacing(1),
  },
  newsContent: {
    lineHeight: 1.6,
  },
  newsList: {
    maxHeight: '320px',
    overflowY: 'scroll',
    paddingRight: theme.spacing(1),
  },
  publicationList: {
    maxHeight: '520px',
    overflowY: 'scroll',
    paddingRight: theme.spacing(1),
  },
  // 增强响应式设计，确保所有设备上宽度一致
  '@media (max-width:600px)': {
    layout: {
      display: 'block',
    },
    sidebar: {
      position: 'static',
      top: 'auto',
      bottom: 'auto',
      width: '100%',
      maxWidth: '100%',
      height: 'auto',
      overflow: 'visible',
      borderRight: 'none',
      borderBottom: `1px solid ${theme.palette.divider}`,
      marginBottom: theme.spacing(2),
      boxShadow: theme.shadows[3],
      boxSizing: 'border-box', // 确保padding不会增加额外宽度
    },
    mainContent: {
      marginLeft: 0,
      width: '100%',
      maxWidth: '100%',
      padding: theme.spacing(1),
      boxSizing: 'border-box', // 确保padding不会增加额外宽度
    },
    root: {
      maxWidth: '100%',
      width: '100%',
      boxSizing: 'border-box', // 确保padding不会增加额外宽度
    },
    avatar: {
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
    // 添加顶层容器样式，确保所有内容都在相同的宽度限制内
    '@global': {
      '.MuiPaper-root': {
        boxSizing: 'border-box',
      },
      '.MuiCard-root': {
        boxSizing: 'border-box',
      }
    }
  }
})
