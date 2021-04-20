import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import cricketlogo from '../assets/images/cricketlogo.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    width:'100%'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            RK
          </Avatar>
        }
        title="Welcome to Live Cricket Score App"
        subheader="Designed by Rakesh Kharvi">
        </CardHeader>
        <div>
      <CardMedia
        className={classes.media}
        title="Cricket Live">
        </CardMedia>
        <div>
          <img src={cricketlogo} alt="logo"
           style={{
             width:'300px',
             height:'300px',
             display: 'block',
             marginLeft: 'auto',
             marginRight: 'auto'}}
          /></div>
        </div>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Main intension of designing this app is to feel user friendly. user can get cricket news, like live score,match schedules,cricket commentary and more.

        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          color='primary'
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Features:</Typography>
          <Typography paragraph>
            Cricket Updates
          </Typography>
          <Typography paragraph>
           <h3>Cricket Scores</h3>
          </Typography>
          <Typography paragraph>
          <h3>Cricket commentary</h3>
          </Typography>
          <Typography>
          <h3>Match schedules</h3>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
