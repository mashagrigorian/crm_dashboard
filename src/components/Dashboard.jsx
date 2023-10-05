import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LeftPart from "./LeftPart"; 
import CenterPart from "./CenterPart"; 
import RightPart from "./RightPart"; 

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    maxWidth: "1500px",
    width: "100%",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  leftPart: {
    flex: 1,
  },
  centerPart: {
    flex: 2,
  },
  rightPart: {
    flex: 1,
  },
}));

function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item className={classes.leftPart}>
            <LeftPart />
          </Grid>
          <Grid item className={classes.centerPart}>
            <CenterPart />
          </Grid>
          <Grid item className={classes.rightPart}>
            <RightPart />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Dashboard;
