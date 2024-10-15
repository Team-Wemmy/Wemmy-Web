// src/component/benefit/Selectbox2.js

import { CheckBox } from "@mui/icons-material";
import { List, ListItem, Button } from "@mui/material";
import { useState } from "react";

function SelectBox2() {
    const SORT = ["추천순", "최신순", "신청많은순"];
    const [sort, setSort] = useState("추천순");

    const handleSortChange = (event) => {
        setSort(event.target.value);
    };

    return (
        <>
            <List sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}>
                <ListItem sx={{ m: 1, minWidth: 130, marginBottom: "30px" }} size="small">
                    <Button
                        labelId="demo-simple-select-disabled-label"
                        defaultValue={sort}
                        value={sort}
                        onChange={handleSortChange}
                    >
                        {SORT.map((region, idx) => {
                            return (
                                <CheckBox key={idx} value={region}>
                                    {region}
                                </CheckBox>
                            );
                        })}
                    </Button>
                </ListItem>
            </List>
        </>
    );
}

export default SelectBox2;
