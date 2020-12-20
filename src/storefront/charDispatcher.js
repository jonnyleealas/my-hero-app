import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import * as actions from "../store/characterActions.js";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});



export default function CharacterDispatcher() {

  const dispatch = useDispatch();

  const charState = useSelector((state) => state.characterCombiner);
  console.log('why lord why', charState)


  // function handleClick(item) {
  //   dispatch(actions.getCharacters(item));
  // }

  useEffect(() => {
    dispatch(actions.getCharacters());
  }, []);

  const classes = useStyles();

  return (
    <>
      <h2>My Heroes and Quirks </h2>


      <ul>
        {charState.map((item) =>
          <div key={item.id}>



            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    <img width="300px" src={item.images[0]}></img>
                    {item.description}
                  Quirk: {item.quirk}
                    <br></br>
                  Alias: {item.alias}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                    </Button>
                <Button size="small" color="primary">
                  Learn More
                    </Button>
              </CardActions>
            </Card>


          </div>
        )}

      </ul>
    </>
  )
}
