import "./App.css";
import { React, useState } from "react";
import { TextField, Grid, Paper, Typography } from "@mui/material";
import zacPic from "./images/DSC08341.jpeg";

function App() {
  const [formNum, setFormNum] = useState("0000");

  console.log(window.location.pathname);
  return (
    <div className="App">
      <Grid container style={{ height: "100vh", position: "relative" }}>
        <Grid
          item
          xs={12}
          align="center"
          style={{ position: "absolute", width: "100%", top: "50%" }}
        >
          <TextField
            id="textfield"
            defaultValue={"0000"}
            variant="outlined"
            // type="number"
            InputProps={{
              style: { backgroundColor: "#ffffff99" },
            }}
            style={{ height: "500px", zIndex: 1 }}
            size="medium"
            onChange={(e) => {
              setFormNum(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          {formNum !== "1981" ? (
            " "
          ) : (
            <Paper style={{ left: "50%", margin: "20%" }}>
              <Typography variant="h3" style={{ color: "#000" }}>
                You defused the bomb!
              </Typography>
              <img src={zacPic} alt="bingbong" width="500px" height="500px" />
            </Paper>
          )}
        </Grid>
      </Grid>
      {/* 1981 */}
    </div>
  );
}

export default App;
