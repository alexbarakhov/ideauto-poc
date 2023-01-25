import Button from "./Button";
import Stack from "./Stack";

function Header() {

    function handleClick() {
        console.log('dale don dale');
    }

    return(
        <header className="header">
            <Stack wrap>
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
