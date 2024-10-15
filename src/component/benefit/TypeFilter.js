import { Box, List, ListItem, Checkbox, ListItemButton, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";

export default function TypeFilter({ type, setType }) {
    const TYPE_SELECT = ["예비부부", "신혼부부", "홀벌이", "임신계획", "난임", "임산부", "출산후"];

    const [checked, setChecked] = useState([]);

    useEffect(() => {
        setChecked(type);
    }, [type]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
        setType(newChecked);
    };

    return (
        <Box
            sx={{
                border: "1px solid #000",
                marginTop: 0,
                marginLeft: "350px",
                height: "200px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <List
                sx={{
                    height: "180px",
                    width: "850px",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                }}
            >
                {TYPE_SELECT.map((item, i) => {
                    return (
                        <ListItem key={i} sx={{ width: "260px", padding: 0, color: "#7F8295" }}>
                            <ListItemButton
                                onClick={handleToggle(item)}
                                sx={{ padding: 0, marginLeft: "20px", justifyContent: "flex-start" }}
                            >
                                <Checkbox
                                    checked={checked.includes(item)}
                                    sx={{
                                        justifyContent: "flex-start",
                                        color: "#AEB2C6",
                                        "&.Mui-checked": {
                                            color: "#FD5B73",
                                        },
                                    }}
                                />
                                <ListItemText primary={item} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );
}
