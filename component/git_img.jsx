function Img(props){
    const {tattoo,clickTatto}=props;
    return (
        <div className="ti">
            <img src={tattoo.pharnUrl}  onClick={() => {clickTatto(tattoo)}}/>
            <h3>{tattoo.title}</h3>
        </div>
    )
}
export default Img;