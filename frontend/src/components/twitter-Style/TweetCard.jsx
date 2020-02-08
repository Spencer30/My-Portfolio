import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useState } from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '100%'
  },
  media: {
    height: 0,
    marginLeft:"auto",
    marginRight:"auto",
    width: "100%",
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
    borderRadius: "50%",
    transform: "rotate(90deg)",

  },
}));


function TweetCard(props){
    const classes = useStyles();
    const [heart, setHeart] = useState(false);

    function handleHeartClick(){
      setHeart((prev) => {return !prev});
    }
  
    return (
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" src={require("../../images/me2.png")}className={classes.avatar}>
              R
            </Avatar>
          }
          title={props.title}
          subheader={props.subTitle}
        />
        <CardMedia
          style={{display:props.isImg ? "block" : "none"}}
          className={classes.media}
          image={props.img}

        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.info}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon onClick={handleHeartClick} style={{color: heart ? "red" : "gray"}}/>
          </IconButton>
        </CardActions>
      </Card>
    );
}

export default TweetCard;