import { useState } from 'react';

const Article = (props) => {
    // create state var for this component
    const [fontDisplay, setFontDisplay] = useState(props.size);

    const increase = () => {
        if ((fontDisplay + 3) > 45) {
            return;
        }

        // change state var using the setter method
        setFontDisplay(fontDisplay + 3);
        // setFontDisplay((prevFontSize) => {
        //     const newFontSize = prevFontSize + 1;
        //     return newFontSize;
        // });
        // setFontDisplay(prevFontSize => prevFontSize + 3);
    };

    // decrease
    // const decrease = () => {
    //     setFontDisplay(fontDisplay - 3);
    // };

    return (
        <fieldset>
            <legend>Article.jsx</legend>

            <button onClick={() => setFontDisplay(fontDisplay - 3)}>➖</button>
            <span style={{ fontSize: fontDisplay + "pt" }}>{props.title}</span>
            <h2>state var is: {fontDisplay}</h2>
            <button onClick={() => increase()}>➕</button>

        </fieldset>
    );
};

export default Article;