import React from 'react';


class Resty extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url : 0
        } // end of state
    } // end of constructor 

    render() {
        return(
            <>
            <Form />
            </>
        );

    } // end of render method 

    

} // end of resty class 


function Form(props) {
    return(
        <form>
            <label> URL :  
            <input />
            </label>
        </form>
    );
}


export default Resty;