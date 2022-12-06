
function SongTitle(props) {
    let {title, singer} = props;
    return (  
        <div>{title} - {singer}</div>
    );
}

export default SongTitle;