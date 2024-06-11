import { Box, FormControl, MenuItem, Select } from "@mui/material";
import { useState } from "react";

function SelectBox2() {
    const SORT = ["추천순", "최신순", "신청많은순"];
    const [sort, setSort] = useState("추천순");

    const handleSortChange = (event) => {
        setSort(event.target.value);
    };

    return (
        <>
            <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}>
                <FormControl sx={{ m: 1, minWidth: 130, marginBottom: "30px" }} size="small">
                    <Select
                        labelId="demo-simple-select-disabled-label"
                        defaultValue={sort}
                        value={sort}
                        onChange={handleSortChange}
                    >
                        {SORT.map((region, idx) => {
                            return (
                                <MenuItem key={idx} value={region}>
                                    {region}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
            </Box>
        </>
    );
}

export default SelectBox2;
