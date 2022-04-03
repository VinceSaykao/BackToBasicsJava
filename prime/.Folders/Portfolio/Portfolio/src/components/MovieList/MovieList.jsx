import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import'./MovieList.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
    backgroundColor: 'green',
    color: 'white',
}));

export default function BasicGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={10}>
                <Grid 
                id='one'
                item xs={12}>
                    <Item>Timesheet Form</Item>
                </Grid>
                <Grid 
                item xs={5}
                id='two'
                container
                >
                <Grid item xs = {12}>
                    <Item
                    id='hello'
                    >Hello World</Item>
                    </Grid>
                </Grid>

                <Grid item xs={8}>
                    <Item>xs=8</Item>
                </Grid>
            </Grid>
        </Box>
    );
}