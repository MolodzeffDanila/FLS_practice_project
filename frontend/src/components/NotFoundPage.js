import React from 'react'
import { Typography } from '@mui/material';

function NotFoundPage(){
    return (
        <Typography variant="h2" align={'center'} data-testid={'not-found-page'}> Error! Wrong URL.</Typography>
    );
}

export default NotFoundPage;