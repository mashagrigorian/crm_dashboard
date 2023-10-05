import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import FileCopyIcon from "@material-ui/icons/FileCopy";
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
  // Define password strength color classes
  weakPassword: {
    color: "red",
  },
  mediumPassword: {
    color: "orange",
  },
  strongPassword: {
    color: "green",
  },
}));

function RightPart({ selectedPassword, onClose, onSave }) {
  const [name, setName] = useState(
    selectedPassword ? selectedPassword.name : ""
  );
  const classes = useStyles();
  const [password, setPassword] = useState(
    selectedPassword ? selectedPassword.password : ""
  );

  // Function to evaluate password strength (you can replace this with your own logic)
  const evaluatePasswordStrength = (password) => {
    if (password.length < 6) {
      return "weak";
    } else if (password.length < 10) {
      return "medium";
    } else {
      return "strong";
    }
  };

  // Determine the password strength
  const passwordStrength = evaluatePasswordStrength(password);

  // Handle saving changes
  const handleSaveChanges = () => {
    // You can save the updated password or perform any other actions here
    const updatedPassword = {
      password,
    };

    onSave(updatedPassword); // Call the onSave function with the updated password
  };

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

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle the password visibility state
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
              <IconButton edge="end" aria-label="Copy Name">
                <FileCopyIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <TextField
        label="Password"
        variant="outlined"
        className={`${classes.input} ${
          passwordStrength === "weak"
            ? classes.weakPassword
            : passwordStrength === "medium"
            ? classes.mediumPassword
            : classes.strongPassword
        }`}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" aria-label="Toggle Password Visibility">
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      {/* Password strength indicator */}
      {passwordStrength === "weak" && (
        <Typography variant="caption" color="error">
          Weak Password
        </Typography>
      )}
      {passwordStrength === "medium" && (
        <Typography variant="caption" color="secondary">
          Medium Password
        </Typography>
      )}
      {passwordStrength === "strong" && (
        <Typography variant="caption" color="primary">
          Strong Password
        </Typography>
      )}

      <TextField
        label="URL"
        variant="outlined"
        className={classes.input}
        value={link}
        onChange={(e) => setLink(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" aria-label="Copy Name">
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
        minRows={6} 
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        inputProps={{ maxLength: 1200 }}
        placeholder="Enter up to 1200 characters"
      />
    </div>
  );
}

export default RightPart;
