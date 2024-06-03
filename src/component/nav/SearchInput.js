// SearchInput.js
import React from "react";
import { InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    height: "40px",
    backgroundColor: "#f1f2f6",
    color: "#000",
    mr: 10,
    border: 0,
    borderRadius: 8,
    fontSize: 13,
    textAlign: "start",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 8, 1, 0),
        paddingLeft: 13,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "25ch",
        },
    },
}));

function SearchInput({ placeholder }) {
    return (
        <div style={{ position: "relative", marginRight: "20px", display: "flex" }}>
            <StyledInputBase placeholder={placeholder} />
        </div>
    );
}

export default SearchInput;
