import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = {
  root: {
    background: "#244A66",
    border: 0,
    borderRadius: 10,
    color: "white",
    height: 50,
    padding: "10px 20px",
    width: "170px",
    cursor: "pointer",
  },
};

function UnstyledComponent(props) {
  const { classes } = props;
  return (
    <div className="next-btn-outer d-flex justify-center">
      {" "}
      <Button className={classes.root}>NEXT</Button>
    </div>
  );
}

UnstyledComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UnstyledComponent);
