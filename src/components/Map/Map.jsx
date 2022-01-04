import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

// import mapStyles from '../../mapStyles';
import useStyles from './styles.js';

function Map() {

    const classes= useStyles();
    const isMobile = useMediaQuery("(min-width:600px)");
    const coordinate= {lat:0, lng:0};
    return (
       <div className={classes.mapContainer}>
        <GoogleMapReact
         bootstrapURLKeys={{key:'AIzaSyBGeZnLpCtJVX_tIQCAERl4v_H7RDyv7Mo'}}
         defaultCenter={coordinate}
         center={coordinate}
         defaultZoom={14}
         margin={[50,50,50,50]}
         options={''}
         onChange={''}
         onChildClick={''}
        >
            
        </GoogleMapReact>
       </div>
        
    )
}

export default Map
