import React from "react";
import { Typography, AppBar, Card,Button, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import useStyles from "./Styles";

const App = () => {
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera className={classes.icon} />
                    <Typography variant="h6"> Photo Album</Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm" >
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Hello this is a photo album. Just wanted to learn some MUI let's see how it goes. 
                            This paragraph doesn't have to make sense, I just want to fill it witb something. 
                            You get it
                        </Typography>
                        <div className={classes.button}>
                            <Grid container spacing={2} justify="center" >
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        View Photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Secondary Action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
            </main>
        </>
    )
}

export default App;