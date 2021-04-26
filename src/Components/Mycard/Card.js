import { CardActions, CardContent, Typography,Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'

function Card() {

    return (
        <>
            <Card>
                <CardContent>
                    <Grid container>
                       <Grid item>
                           <Typography> Team : </Typography>
                       </Grid>
                       <Grid item>
                           <Typography> Images : </Typography>
                       </Grid>
                       <Grid item>
                           <Typography> Team : </Typography>
                       </Grid>
                    </Grid>
                    <Typography>card</Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary">show Details</Button>
                    <Button variant="contained" color="primary">
                        {new Date().toDateString}
                    </Button>
                </CardActions>
            </Card>
        </>
    )
  }


export default Card
