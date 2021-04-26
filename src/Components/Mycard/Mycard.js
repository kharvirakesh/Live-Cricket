import React from 'react';
import Button from '@material-ui/core/Button'
import vsimage from '../assets/images/vs.jpg'
import { CardActions, CardContent, Typography, Grid, Card } from '@material-ui/core'

// const date = new Date().toString().slice(0, 24)

export default function MyCard({ match }) {
  console.log(match);

  return (
    <Card>
      <CardContent>
        <Grid container justify="center" alignItems="center" spacing={4}>
          <Grid item>
            <div><Typography variant="h5"> {match["team-2"]} </Typography></div>
          </Grid>
          <Grid item>
            <img src={vsimage} style={{ height: '20vh' ,width:'40vh' }} />
          </Grid>
          <Grid item>
            <div><Typography variant="h5"> {match["team-2"]} </Typography></div>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions container justify="center">
        <Button item variant="contained" color="primary">Show Details</Button>
        <Button item variant="contained" color="primary">Start Time {new Date(match.dateTimeGMT).toLocaleString()} </Button>
      </CardActions>
    </Card>
  );
}
