function Clickme(){
    function Handle(){
        alert("button was clicked");
    }
    return(
        <div>
            <button onDoubleClick={Handle}>Click for alert</button>
        </div>
    );
}
export default Clickme; 