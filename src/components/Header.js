import Button from "./Button";
import Stack from "./Stack";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react";

function Header() {
    const [cubos, setCubos] = useState('');

    const handleChange = (event) => {
      setCubos(event.target.value);
    };

    function handleClick() {
        console.log('dale don dale');
    }

    return(
        <header className="header">
            <Stack wrap>
                <Box sx={{ minWidth: 120, }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Cubos</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={cubos}
                        label="Cubos"
                        onChange={handleChange}
                        sx={{borderRadius: 0 }}
                        >
                        <MenuItem value={10}>Cubo 1</MenuItem>
                        <MenuItem value={20}>Cubo 2</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Button label="Button"/>
                <Button label="Button 2"/>
                <Button
                    label="Button 3"
                    backgroundColor="lightgreen"
                    onClick={handleClick}
                />
            </Stack>
        </header>
    )
}


export default Header
