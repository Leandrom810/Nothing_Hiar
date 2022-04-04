import Test2 from "./Test2";
import Form from "./Form";

function Test(){
    return (
        <div>
            <h1>
                test component
            </h1>
            <Test2 message={"Hello."} name="Gordon Freeman" id={20}/>
            <br/>
            <Form/>
        </div>
    );
}


export default Test;