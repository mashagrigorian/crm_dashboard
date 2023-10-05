import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import SettingsIcon from "@material-ui/icons/Settings";
import PopUp1 from "./PopUp1";
import PopUp2 from "./PopUp2";

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

  // Reusable function to toggle popup visibility
  const togglePopup = (popupState, setPopupState) => {
    setPopupState(!popupState);
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

        {/* Toggle PopUp1 when clicking on the key */}
        <IconButton
          onClick={() => togglePopup(isPopUp1Visible, setPopUp1Visible)}
        >
          <VpnKeyIcon />
        </IconButton>

        {/* Toggle PopUp2 when clicking on Settings */}
        <IconButton
          onClick={() => togglePopup(isPopUp2Visible, setPopUp2Visible)}
        >
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

      <PopUp1
        open={isPopUp1Visible}
        onClose={() => togglePopup(isPopUp1Visible, setPopUp1Visible)}
      />
      <PopUp2
        open={isPopUp2Visible}
        onClose={() => togglePopup(isPopUp2Visible, setPopUp2Visible)}
      />

      {/* You can pass selectedSection to the component that displays passwords */}
    </div>
  );
}

export default LeftPart;
