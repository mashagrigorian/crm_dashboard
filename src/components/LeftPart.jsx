import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import VpnKeyIcon from "@material-ui/icons/VpnKey"; // Icon for PopUp1
import SettingsIcon from "@material-ui/icons/Settings"; // Icon for PopUp2
import PopUp1 from "./PopUp1"; // Import your PopUp1 component
import PopUp2 from "./PopUp2"; // Import your PopUp2 component

const useStyles = makeStyles((theme) => ({
  leftPart: {
    backgroundColor: "#f5f5f5",
    padding: theme.spacing(2),
    width: "300px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  searchInput: {
    flex: 1,
  },
  sections: {
    display: "flex",
    flexDirection: "column",
  },
  section: {
    cursor: "pointer",
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
    border: "1px solid #ccc",
    borderRadius: "3px",
    textAlign: "center",
  },
}));

function LeftPart() {
  const classes = useStyles();
  const [isSearchVisible, setSearchVisible] = useState(true);
  const [isPopUp1Visible, setPopUp1Visible] = useState(false);
  const [isPopUp2Visible, setPopUp2Visible] = useState(false);
  const [activeSections, setActiveSections] = useState([
    "Section 1",
    "Section 2",
  ]);
  const [selectedSection, setSelectedSection] = useState(null);
  // Function to handle opening PopUp1
  const handlePopUp1Click = () => {
    setPopUp1Visible(true);
  };

  // Function to handle closing PopUp1
  const handlePopUp1Close = () => {
    setPopUp1Visible(false);
  };

  // Function to handle opening PopUp2
  const handlePopUp2Click = () => {
    setPopUp2Visible(true);
  };

  // Function to handle closing PopUp2
  const handlePopUp2Close = () => {
    setPopUp2Visible(false);
  };
  const handleSearchClick = () => {
    setSearchVisible(!isSearchVisible);
  };

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className={classes.leftPart}>
      <div className={classes.header}>
        {isSearchVisible ? (
          <TextField
            className={classes.searchInput}
            variant="outlined"
            placeholder="Search..."
          />
        ) : (
          <IconButton onClick={handleSearchClick}>
            <SearchIcon />
          </IconButton>
        )}

        {/* Open PopUp1 when clicking on the key */}
        <IconButton onClick={handlePopUp1Click}>
          <VpnKeyIcon />
        </IconButton>

        {/* Open PopUp2 when clicking on Settings */}
        <IconButton onClick={handlePopUp2Click}>
          <SettingsIcon />
        </IconButton>
      </div>

      <div className={classes.sections}>
        {activeSections.length === 0 ? (
          <div>Nothing Found</div>
        ) : (
          activeSections.map((section, index) => (
            <div
              key={index}
              className={classes.section}
              onClick={() => handleSectionClick(section)}
            >
              {section}
            </div>
          ))
        )}
      </div>

      <PopUp1 open={isPopUp1Visible} onClose={handlePopUp1Close} />
      <PopUp2 open={isPopUp2Visible} onClose={handlePopUp2Close} />

      {/* You can pass selectedSection to the component that displays passwords */}
    </div>
  );
}

export default LeftPart;
