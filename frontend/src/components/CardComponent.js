import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';

export default function CardComponent({img, title, desc}) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={img}
          alt={title}
        />
        <CardContent>
          <h2 className="text_secondary"> {title} </h2>
          <p> {desc} </p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
