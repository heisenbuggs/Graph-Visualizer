import {
  Checkbox,
  CheckboxProps,
  Container,
  createMuiTheme,
  createStyles,
  FormControlLabel,
  Grid,
  Switch,
  SwitchClassKey,
  SwitchProps,
  Theme,
  Typography,
  withStyles,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import React, { PropsWithRef } from "react";
import AlgoLinks from "../algoLinks";

interface Styles extends Partial<Record<SwitchClassKey, string>> {
  focusVisible?: string;
}
interface Props extends SwitchProps {
  classes: Styles;
}

const IOSSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      "&$checked": {
        transform: "translateX(16px)",
        color: theme.palette.common.white,
        "& + $track": {
          backgroundColor: "#52d869",
          opacity: 1,
          border: "none",
        },
      },
      "&$focusVisible $thumb": {
        color: "#52d869",
        border: "6px solid #fff",
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(["background-color", "border"]),
    },
    checked: {},
    focusVisible: {},
  })
)(({ classes, ...props }: Props) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const Input = ({
  inputString,
  setinputString,
  parse,
  setinputFormat,
  inputFormat,
  setGraphType,
  graphType,
  format,
  error,
  isWeighted,
  setIsWeighted,
  setIs0,
  is0,
  inputType,
  setInputType,
}: any) => {
  return (
    <Container className="input-container">
      <Container className="card container">
        <Container>
          <Typography variant="h4" style={{ textAlign: "center", margin: 10 }}>
            <b>Input Graph</b>
          </Typography>
        </Container>
        <Grid container>
          <Grid
            item
            className="input-item"
            sm={12}
            md={6}
            style={{ borderRight: "1px solid rgba(0,0,0,.125)" }}
          >
            <Grid container className="row">
              <Grid item sm={6}>
                <Typography variant="h5">Input Type</Typography>
                <FormControlLabel
                  control={
                    <IOSSwitch
                      checked={inputType === "plain"}
                      value="plain"
                      onClick={() => {
                        setinputFormat("edg");
                        setInputType("plain");
                      }}
                      name="inputType"
                    />
                  }
                  label="Plain Text"
                />
                <FormControlLabel
                  control={
                    <IOSSwitch
                      checked={inputType === "array"}
                      value="array"
                      onClick={() => {
                        setInputType("array");
                      }}
                      name="inputType"
                    />
                  }
                  label="Array"
                />
              </Grid>
              <Grid item sm={6}>
                <Typography variant="h5">Input Format</Typography>
                <FormControlLabel
                  control={
                    <IOSSwitch
                      checked={inputFormat === "edg"}
                      value="edg"
                      onClick={() => {
                        setinputFormat("edg");
                      }}
                      name="inputFormat"
                    />
                  }
                  label="Edges List"
                />
                {inputType === "array" && (
                  <FormControlLabel
                    control={
                      <IOSSwitch
                        checked={inputFormat === "adj"}
                        value="adj"
                        onClick={() => {
                          setinputFormat("adj");
                        }}
                        name="inputFormat"
                      />
                    }
                    label="Adjacency List"
                  />
                )}
              </Grid>
              <Grid item sm={6}>
                <Typography variant="h5">Graph Type</Typography>
                <FormControlLabel
                  control={
                    <IOSSwitch
                      checked={graphType === "undirected"}
                      onClick={() => {
                        setGraphType("undirected");
                      }}
                      name="graphType"
                    />
                  }
                  label="Undirected Graph"
                />
                <FormControlLabel
                  control={
                    <IOSSwitch
                      checked={graphType === "directed"}
                      onClick={() => {
                        setGraphType("directed");
                      }}
                      name="graphType"
                    />
                  }
                  label="Directed Graph"
                />
              </Grid>
              <Grid item sm={6}>
                <Typography variant="h5">Start Index</Typography>
                <FormControlLabel
                  control={
                    <IOSSwitch
                      checked={is0 === false}
                      value="1"
                      onClick={() => {
                        setIs0(false);
                      }}
                      name="is0"
                    />
                  }
                  label="1"
                />
                <FormControlLabel
                  control={
                    <IOSSwitch
                      checked={is0 === true}
                      value="0"
                      onClick={() => {
                        setIs0(true);
                      }}
                      name="is0"
                    />
                  }
                  label="0"
                />
              </Grid>
            </Grid>

            <div style={{ width: "100%", margin: "5px 0px 0px -16px" }}>
              <FormControlLabel
                control={
                  <GreenCheckbox
                    checked={isWeighted}
                    onChange={(e) => {
                      setIsWeighted(e.target.checked);
                    }}
                  />
                }
                label="Is Graph Weighted?"
              />
            </div>
            <div style={{ width: "100%", margin: "5px 0 0 -16px" }}>
              <Typography variant="h5">Input</Typography>
              <textarea
                placeholder={format.ex}
                rows={5}
                style={{ padding: 10, resize: "none", width: "100%" }}
                value={inputString}
                onChange={(e) => setinputString(e.target.value)}
              />
            </div>
          </Grid>

          <div className="col-lg-6 col-sm-12 input-item">
            <h5>Input Format</h5>
            <pre style={{ whiteSpace: "break-spaces" }}>{format.text}</pre>
            <b>Example:</b> <pre>{format.ex}</pre>
            <p>{format.exp}</p>
          </div>
        </Grid>
        <div className="row"></div>
        <hr />
        <div style={{ color: "red", textAlign: "center" }}>{error}</div>
        <div style={{ margin: "0 -15px", width: "calc(100% + 30px)" }}>
          <button
            style={{ borderRadius: "0px 0px 0.25rem 0.25rem" }}
            className="input-submit btn btn-primary"
            onClick={parse}
          >
            Submit
          </button>
        </div>
      </Container>
      <div></div>

      {/* </form> */}
      <div className="card" style={{ textAlign: "left" }}>
        <div className="card-body">
          <h5 className="card-title">Useful Algorithms</h5>
          <h6 className="card-subtitle mb-2 text-muted">Links</h6>
          <div className="card-text">
            <ol>
              {(() => {
                return AlgoLinks.map((e, i) => (
                  <li key={i}>
                    {" "}
                    <a rel="noopener noreferrer" target="_blank" href={e.link}>
                      {" "}
                      {e.name}
                    </a>
                  </li>
                ));
              })()}
            </ol>
          </div>
          {/* <a href="#" className="card-link">Card link</a> */}
          {/* <a href="#" className="card-link">Another link</a> */}
        </div>
      </div>
    </Container>
  );
};

export default Input;
