import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const FormDialog = (props) => {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  const validate = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email)) {
      props.handleSave(email);
    } else {
      setError("Invalid Email Address");
    }
  };
  return (
    <div>
      <Dialog open={true} onClose={props.handleClose}>
        <DialogTitle>Confirm Email</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Submit email to unlock short description.
          </DialogContentText>
          <TextField
            error={error != "" ? true : false}
            id="standard-info"
            label={error}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="standard"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button variant="contained" onClick={validate}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormDialog;
