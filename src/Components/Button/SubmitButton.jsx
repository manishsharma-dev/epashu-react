import React from "react";
import Button from "@mui/material/Button";
const SubmitButton = ({ children, className}) => {
  return (
    <Button type="submit" variant="contained" className={className} >
      {children}
    </Button>
  );
};

export default SubmitButton;
