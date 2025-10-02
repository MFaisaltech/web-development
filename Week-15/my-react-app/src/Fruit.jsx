function FruitsList(){
    const fruits = ["mango", "banana"];

    return (
        <div>
            <h1>fruitslist</h1>
            <ul>
                {fruits.map((fruit, index) =>
                <li key={index}>{fruit}</li>
                )}
            </ul>
        </div>
    );
}
export default FruitsList;