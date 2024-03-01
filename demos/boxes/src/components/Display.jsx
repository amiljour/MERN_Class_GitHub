
const Display = (props) => {
    // console.log(props.boxes);
    return (
        <fieldset>
            <legend>Display.jsx</legend>
            {
                props.boxes.map((box, i) => {
                    return <div key={i} style={{ backgroundColor: box.color, width: box.size + "px", height: box.size + "px", display: "inline-block" }}>
                        {box.color}
                        <button onClick={() => console.log(i)}> X </button>
                    </div>;
                })
            }
        </fieldset>
    );
};

export default Display;