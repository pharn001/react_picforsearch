import './post.css'
function Post(props) {
    const {tattoo,clickClose}=props;
    return (
        <dev className="post">
            <div className="post-bg" onClick={clickClose}/>
            <div className="post-content">                
                <img src={tattoo.pharnUrl}/>
                <h3>{tattoo.title}</h3>
            </div>
        </dev>
    )
}
export default Post