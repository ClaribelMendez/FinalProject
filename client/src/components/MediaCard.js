import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function MediaControlCard(props) {
  const theme = useTheme();

  return (
      <div className='card'>
    <Card sx={{ display: 'flex' }} >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <div className='card_content'>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {props.tracktitle}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Artist Name
          </Typography>
        </CardContent>
        </div>

       
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton> 
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton> 
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton> 
        </Box>
      </Box>

      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={props.image}
        alt="Album Art Cover"
      />
    </Card>
    </div>
  );
}
