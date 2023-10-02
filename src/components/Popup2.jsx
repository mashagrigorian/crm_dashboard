import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  dialogContent: {
    paddingTop: theme.spacing(2),
  },
}));

function PopUp2({ open, onClose }) {
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>PopUp 2</DialogTitle>
      <DialogContent className={classes.dialogContent}>
        {/* Add content for PopUp 2 */}
        This is the content for PopUp 2.
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
