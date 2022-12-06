// a Question component to render each question
import Option from "./Option";
function Question(props) {
    const {lyrics, options, onOptionClicked} = props;
    return (  
        <div>
            <p>{lyrics}</p>
            <Option value={options[0]} onClick={() => onOptionClicked(0)}></Option>
            <Option value={options[1]} onClick={() => onOptionClicked(1)}></Option>
            <Option value={options[2]} onClick={() => onOptionClicked(2)}></Option>
            <Option value={options[3]} onClick={() => onOptionClicked(3)}></Option>
        </div>
    );
}
export default Question;