import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

export default function ProjectCard({
  imageSrc,
  description,
  demoLink,
  codeLink,
  title,
}) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: 'var(--dark)',
        marginInline: 'auto',
        borderRadius: '2rem',
      }}
    >
      <CardActions sx={{ justifyContent: 'space-around' }}>
        <Button
          sx={{
            color: 'var(--yellow)',
            fontFamily: 'Roboto',
            fontSize: '1.3rem',
            marginRight: '1rem',
          }}
          size="small"
          href={demoLink}
          target="_blank"
        >
          <LinkIcon sx={{ marginRight: '0.5rem' }} />
          Demo
        </Button>
        <Button
          sx={{
            color: 'var(--yellow)',
            fontFamily: 'Roboto',
            fontSize: '1.3rem',
          }}
          size="small"
          href={codeLink}
          target="_blank"
        >
          <GitHubIcon sx={{ marginRight: '0.5rem' }} />
          Source Code
        </Button>
      </CardActions>
      <CardMedia
        loading="lazy"
        sx={{}}
        component="img"
        height="180"
        image={imageSrc}
        alt="website image"
      />
      <CardContent sx={{ marginBottom: '2rem' }}>
        <Typography
          sx={{
            color: 'var(--yellow)',
            fontFamily: 'Roboto',
            fontSize: '2rem',
          }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: 'white',
            fontFamily: 'Roboto',
            fontSize: '1.3rem',
          }}
          variant="body2"
          color="text.secondary"
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
