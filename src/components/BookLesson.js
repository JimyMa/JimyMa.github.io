import React, {Component} from 'react';
import {BlogStyles} from '../styles/BlogStyles'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {blog_data} from '../content/blogData'
import {Link} from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress';

import {withStyles, withTheme} from '@material-ui/styles'
import {withRouter} from 'react-router-dom'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';

import Grid from '@material-ui/core/Grid';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

class BookLesson extends Component {
    constructor(props) {
        super(props);
        this.state = {
          "value": 0,
          "index": 0,
          "blog_data": []
        }
    }
    componentDidMount() {
        this.setState({
          "blog_data": blog_data
        })
      }
  render() {

  const handleChange = (event, newValue) => {
    this.setState({
        "value": newValue
      });
  };

  const handleChangeIndex = (index) => {
    this.setState({
        "index": index
      });
  };
  const {theme, classes} = this.props;

  return (
    <div>
    <Box sx={{ bgcolor: 'background.paper'}}>
    <CircularProgress />
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={this.state.value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          className={classes.appBar}
        >
          <Tab label="周一" {...a11yProps(0)} />
          <Tab label="周二" {...a11yProps(1)} />
          <Tab label="周三" {...a11yProps(2)} />
          <Tab label="周四" {...a11yProps(3)} />
          <Tab label="周五" {...a11yProps(4)} />
          <Tab label="周六" {...a11yProps(5)} />
          <Tab label="周日" {...a11yProps(6)} />
        </Tabs>
        </Box>
      <SwipeableViews
        axis={this.props.theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={this.state.value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={this.state.value} index={0} dir={theme.direction} className={classes.inputPaper} >
        <Grid container spacing={3}>
        {
          this.state.blog_data.map((value, key) => {
            return (
                <Grid item xs={12} md={12} key={key}>
                  <Card className={classes.root}>
                    <CardActionArea component={Link} to={`/content/${value.id}`}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {value.lesson}
                        </Typography>
                        <Typography className={classes.title} color="textSecondary" component="p" gutterBottom>
                          {value.teacher} , {" "} {value.date}
                        </Typography>
                        <Typography variant="body2" component="p">
                          {value.content}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
            )
          })
        }
      </Grid>
        </TabPanel>
        <TabPanel value={this.state.value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={this.state.value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={this.state.value} index={3} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={this.state.value} index={4} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={this.state.value} index={5} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={this.state.value} index={6} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </Box>
    </div>
  );
  }
}

export default (withTheme(withStyles(BlogStyles)(withRouter(BookLesson))));