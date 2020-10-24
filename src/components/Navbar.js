import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import React, { Component } from "react";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="breadcrumb align-center">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Typography className="textPrimary brandon-bold">
              Team Size
            </Typography>
            <Link color="inherit" href="/">
              Work Space
            </Link>
            <Link color="inherit">Locations</Link>
            <Link color="inherit" href="/getting-started/installation/">
              Weekly Acess
            </Link>
          </Breadcrumbs>
        </div>
      </div>
    );
  }
}

export default Navbar;
