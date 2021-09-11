import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const RecipeCard = (props) => {
    return (
        <Card onClick={props.onClick}>
            <CardActionArea>
                <CardMedia
                    component={'img'}
                    alt={props.title}
                    height={"150px"}
                    image={props.image}
                    title={props.title}
                />
                <CardContent>
                    <Typography gutterBottom aligh={'center'}>
                        {props.title.toUpperCase()}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default RecipeCard