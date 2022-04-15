import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

export default function ProjectCard() {
  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: 'var(--dark)',
        marginInline: 'auto',
      }}
    >
      <CardActions sx={{ justifyContent: 'space-around' }}>
        <Button
          sx={{
            color: '#c2ed03',
            fontFamily: 'Roboto',
            fontSize: '1.3rem',
            marginRight: '1rem',
          }}
          size="small"
        >
          <LinkIcon sx={{ marginRight: '0.5rem' }} />
          Demo
        </Button>
        <Button
          sx={{ color: '#c2ed03', fontFamily: 'Roboto', fontSize: '1.3rem' }}
          size="small"
        >
          <GitHubIcon sx={{ marginRight: '0.5rem' }} />
          Source Code
        </Button>
      </CardActions>
      <CardMedia
        component="img"
        height="140"
        image="images/react.png"
        alt="green iguana"
      />
      <CardContent sx={{ marginBottom: '2rem' }}>
        <Typography
          sx={{ color: 'white', fontFamily: 'Roboto', fontSize: '2rem' }}
          gutterBottom
          variant="h5"
          component="div"
        >
          Lizard
        </Typography>
        <Typography
          sx={{ color: 'white', fontFamily: 'Roboto', fontSize: '1.3rem' }}
          variant="body2"
          color="text.secondary"
        >
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
}
