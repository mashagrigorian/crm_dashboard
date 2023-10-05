import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    maxWidth: "600px",
    margin: "0 auto",
  },
  table: {
    minWidth: 300,
  },
  tableHeader: {
    fontWeight: "bold",
    backgroundColor: "#f5f5f5",
  },
  tableCell: {
    borderBottom: "none",
  },
  addButton: {
    marginTop: theme.spacing(2),
    float: "right",
  },
}));

function CenterPart() {
  const classes = useStyles();
  const [data, setData] = useState([
    {
      id: 1,
      text: "Sample Text 1",
      name: "Password 1",
      link: "https://example.com/1",
    },
    {
      id: 2,
      text: "Sample Text 2",
      name: "Password 2",
      link: "https://example.com/2",
    },
  ]);

  // Function to toggle sorting order
  const toggleSorting = () => {
    setData([...data].reverse());
  };

  return (
    <div className={classes.tableContainer}>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeader}>Text Token</TableCell>
              <TableCell className={classes.tableHeader}>
                Password Name
              </TableCell>
              <TableCell className={classes.tableHeader}>
                Password Link
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell className={classes.tableCell}>{row.text}</TableCell>
                <TableCell className={classes.tableCell}>{row.name}</TableCell>
                <TableCell className={classes.tableCell}>
                  <a href={row.link} target="_blank" rel="noopener noreferrer">
                    {row.link}
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        className={classes.addButton}
        variant="contained"
        color="primary"
        onClick={toggleSorting}
      >
        Toggle Sorting
      </Button>
    </div>
  );
}

export default CenterPart;
