
function click(){
    console.log("Hello world");
}
function printBye(){
    console.log("Bye!");
}

export default function hello(){
    return (
        <div>
         <button onClick={click}>Click me!</button>
        <p onMouseOver={printBye}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ducimus voluptates aliquid,
             porro maiores ipsa neque eos praesentium explicabo ratione animi vero quae beatae, vel,
              sequi rerum itaque. Delectus, expedita?
              </p>           
        </div>
    );
}