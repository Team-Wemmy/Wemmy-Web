import { Box, List, ListItem, Checkbox, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";

export default function TypeFilter(type, setType) {
    const TYPE_SELECT = ["예비부부", "신혼부부", "홀벌이", "임신계획", "난임", "임산부", "출산후"];

    const [checked, setChecked] = useState([]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
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
                    height: "200px",
                    width: "850px",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "center",
                    marginLeft: "30px",
                }}
            >
                {TYPE_SELECT.map((type, i) => {
                    return (
                        <ListItem key={i} sx={{ width: "260px", padding: 0 }}>
                            <ListItemButton
                                onClick={handleToggle(type)}
                                sx={{ padding: 0, margin: 0, justifyContent: "flex-start" }}
                            >
                                <Checkbox checked={checked.includes(type)} />
                                <ListItemText primary={type} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );
}
