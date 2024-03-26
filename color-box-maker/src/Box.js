
const Box = ({ id, color, width, height, removeBox }) => {
    const boxStyle = {
        backgroundColor: color,
        width: `${width}px`,
        height: `${height}px`,
        display: 'inline-block'
    };

    const handleRemove = () => {
        removeBox(id);
    };

    return (
        <div>
            <div style={boxStyle}></div>
            <button onClick={handleRemove}>X</button>
        </div>
    );
}

export default Box;