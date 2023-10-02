import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import InputAdornment from "@material-ui/core/InputAdornment";
import FileCopyIcon from "@material-ui/icons/FileCopy"; // Icon for Copy
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: "#fff",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    width: "300px",
  },
  title: {
    fontSize: "20px",
    marginBottom: theme.spacing(2),
  },
  input: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: theme.spacing(2),
  },
}));

function RightPart({ selectedPassword, onClose, onSave }) {
  const classes = useStyles();
  const [name, setName] = useState(
    selectedPassword ? selectedPassword.name : ""
  );
  const [password, setPassword] = useState(
    selectedPassword ? selectedPassword.password : ""
  );
  const [link, setLink] = useState(
    selectedPassword ? selectedPassword.link : ""
  );
  const [comment, setComment] = useState(
    selectedPassword ? selectedPassword.comment : ""
  );
  const [passwordColor, setPasswordColor] = useState(
    selectedPassword ? selectedPassword.color : "#000000"
  );

  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleCopyPassword = () => {
    // Implement password copy logic (e.g., using the Clipboard API)
    // You can display a success message here.
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle the password visibility state
  };

  const handleSaveChanges = () => {
    const updatedPassword = {
      name,
      password,
      link,
      comment,
      color: passwordColor,
    };

    onSave(updatedPassword);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        Password Details
      </Typography>
      <TextField
        label="Login"
        variant="outlined"
        className={classes.input}
        value={name}
        onChange={(e) => setName(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleCopyPassword}
                edge="end"
                aria-label="Copy Name"
              >
                <FileCopyIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <TextField
        label="Password"
        variant="outlined"
        className={classes.input}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type={showPassword ? "text" : "password"} // Toggle password visibility
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleTogglePasswordVisibility} // Toggle password visibility
                edge="end"
                aria-label="Toggle Password Visibility"
              >
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
              <IconButton
                onClick={handleCopyPassword}
                edge="end"
                aria-label="Copy Password"
              >
                <FileCopyIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <TextField
        label="URL"
        variant="outlined"
        className={classes.input}
        value={link}
        onChange={(e) => setLink(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleCopyPassword}
                edge="end"
                aria-label="Copy Name"
              >
                <FileCopyIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <TextField
        label="Comment"
        variant="outlined"
        multiline
        className={classes.input}
        minRows={6} // Use minRows instead
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        inputProps={{ maxLength: 1200 }}
      />

      <TextField
        label="Password Color"
        type="color"
        variant="outlined"
        className={classes.input}
        value={passwordColor}
        onChange={(e) => setPasswordColor(e.target.value)}
      />

      <div className={classes.buttons}>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
        <Button variant="contained" color="primary" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </div>
    </div>
  );
}

export default RightPart;
