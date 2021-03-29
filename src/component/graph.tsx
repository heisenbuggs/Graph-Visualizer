import React from "react";
import { Button, Grid, Theme, Typography, withStyles } from "@material-ui/core";
import { Replay } from "@material-ui/icons";
import Graph from "vis-react";
import { green } from "@material-ui/core/colors";

const ColorButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[400],
    "&:hover": {
      backgroundColor: green[600],
    },
  },
}))(Button);

const GraphElement = ({
  inputString,
  graph,
  inputFormat,
  isDirected,
  setShowGraph,
  isWeighted,
  is0,
}: any) => {
  return (
    <Grid className="App" style={{ height: "100%" }}>
      <Grid style={{ textAlign: "center", height: 55 }}>
        {inputFormat === "edg" ? (
          <Typography display="inline" variant="body2">
            <b>Input Type : </b>Edges List
          </Typography>
        ) : (
          <Typography display="inline" variant="body2">
            <b>Input Type : </b>Adjacency List
          </Typography>
        )}&emsp; &emsp;
        {isDirected ? (
          <Typography display="inline" variant="body2">
            <b>Graph Type : </b>Directed
          </Typography>
        ) : (
          <Typography display="inline" variant="body2">
            <b>Graph Type : </b>Undirected
          </Typography>
        )}&emsp; &emsp;
        {isWeighted ? (
          <Typography display="inline" variant="body2">
            <b>Weighted : </b>True
          </Typography>
        ) : (
          <Typography display="inline" variant="body2">
            <b>Weighted : </b>False
          </Typography>
        )}&emsp; &emsp;
        {is0 ? (
          <Typography display="inline" variant="body2">
            <b>Start Index : </b>0
          </Typography>
        ) : (
          <Typography display="inline" variant="body2">
            <b>Start Index : </b>1
          </Typography>
        )}
        <Typography variant ="body2"><b>Input : </b> {inputString}</Typography>
      </Grid>
      <div style={{ height: "calc(100% - 105px)",borderWidth: 2, borderColor: "grey" }}>
        {/* @ts-ignore */}
        <Graph
          options={{
            edges: {
              arrows: {
                to: {
                  enabled: isDirected,
                },
              },
            },
          }}
          graph={graph}
        />
      </div>
      <Grid sm={7}style={{ textAlign: "center", height: 20 }}>
        <ColorButton
          className="center-button"
          onClick={() => setShowGraph(false)}
          startIcon={<Replay fontSize="large" />}
        > Reload
        </ColorButton>
      </Grid>
    </Grid>
  );
};

export default GraphElement;
