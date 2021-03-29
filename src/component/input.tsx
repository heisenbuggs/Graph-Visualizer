import React from "react";
import {
  Button,
  Checkbox,
  CheckboxProps,
  Container,
  createStyles,
  FormControlLabel,
  Grid,
  Link,
  Switch,
  SwitchClassKey,
  SwitchProps,
  TextField,
  Theme,
  Typography,
  withStyles,
} from "@material-ui/core";
import { green, grey } from "@material-ui/core/colors";
import AlgoLinks from "../algoLinks";
import { Send } from "@material-ui/icons";

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
          backgroundColor: green[400],
          opacity: 1,
          border: "none",
        },
      },
      "&$focusVisible $thumb": {
        color: green[400],
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

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: green[400],
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: green[400],
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: green[400],
      },
      "&.Mui-focused fieldset": {
        borderColor: green[400],
      },
    },
  },
})(TextField);

const ColorButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[400],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
}))(Button);

const GreenCheckbox = withStyles({
  root: {
    color: grey[400],
    "&$checked": {
      color: green[400],
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
      <Container className="card">
        <Container>
          <Typography variant="h4" style={{ textAlign: "center", margin: 10 }}>
            <b>Input Graph</b>
          </Typography>
        </Container>
        <Grid container>
          <Grid
            item
            className="input-itemfirst"
            sm={12}
            md={7}
          >
            <Grid container className="row">
              <Grid item sm={5}>
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
              <Grid item sm={7}>
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
              <Grid item sm={5}>
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
              <Grid item sm={7}>
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
              <CssTextField
                multiline
                rows={5}
                style={{ resize: "none", width: "100%", paddingTop: 10 }}
                defaultValue={format.ex}
                value={inputString}
                onChange={(e) => setinputString(e.target.value)}
                variant="outlined"
              />
            </div>
          </Grid>

          <Grid item md={5} sm={12} className="input-item">
            <Typography variant="h5">Instructions</Typography>
            <Typography variant="subtitle1">{format.text}</Typography>
            <br />
            <Typography variant="body1">
              <b>Example : </b>
            </Typography>
            <pre>{format.ex}</pre>
            <Typography variant="subtitle1">{format.exp}</Typography>
          </Grid>
        </Grid>
        <div style={{ color: "red", textAlign: "center" }}>{error}</div>
        <ColorButton
          variant="contained"
          color="secondary"
          onClick={parse}
          className="input-submit"
          endIcon={<Send />}
        >
          <Typography variant="subtitle2">
            <b>Submit</b>
          </Typography>
        </ColorButton>
      </Container>
      <div></div>

      <Grid item sm={8} className="card" style={{ textAlign: "left" }}>
        <Container className="card-body">
          <Typography variant="h5" className="card-title">
            Useful Algorithms
          </Typography>
          <Typography className="text-muted" variant="h6">
            Links
          </Typography>
          <Container className="card-text">
            <ol>
              {(() => {
                return AlgoLinks.map((e, i) => (
                  <li key={i}>
                    <Link
                      rel="noopener noreferrer"
                      target="_blank"
                      href={e.link}
                    >
                      {e.name}
                    </Link>
                  </li>
                ));
              })()}
            </ol>
          </Container>
        </Container>
      </Grid>
    </Container>
  );
};

export default Input;
