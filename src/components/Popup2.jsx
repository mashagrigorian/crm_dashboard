import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    width: "500px", // Set the width to 500px
    height: "600px", // Set the height to 600px
  },
  dialogContent: {
    backgroundColor: "#000",
    color: "#fff",
  },
}));

function PopUp2({ open, onClose }) {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      classes={{ paper: classes.dialogPaper }}
    >
      <DialogTitle>PopUp 1</DialogTitle>
      <DialogContent className={classes.dialogContent}>
        {/* Add content for PopUp 1 */}
        This is the content for PopUp 1.
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default PopUp2;
