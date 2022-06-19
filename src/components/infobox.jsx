

function InfoBox(props){
    var y = props.pic+"food";
    return(<div className={props.class}>
        <div className="info-box">
            <h2>Dance Form: {props.x.Dance}</h2>
            <p>{props.x.DanceInfo}</p>
            <a href={props.x.Video}>Click here to watch a sample of this dance</a>
            <h2>Famous Food: {props.x.Food}</h2>
            <p>{props.x.FoodInfo}</p>
            <div className={y}/>
            <h2>Most Spoken Language: {props.x.Lang}</h2>
            <p>{props.x.LangInfo}</p>
        </div>
    </div>);
}

export default InfoBox;