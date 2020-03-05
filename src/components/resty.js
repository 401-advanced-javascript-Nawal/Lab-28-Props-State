import React from 'react';


class Resty extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: ''
        } // end of state
    } // end of constructor 

    handleURL = event => {
        event.preventDefault();
        let url = event.target.value;
        console.log('urlEvent : ', url);
        this.setState({ url });
    }


    render() {
        return (
            <>
                <Urlfun url1={this.state.url} />
                <Form handler={this.handleURL} />
            </>
        );

    } // end of render method 



} // end of resty class 


function Urlfun({ url1 }) {
    return <h1> URL Full Address : {url1}</h1>
}

function Form(props) {
    return (
        <form>
            <section>
            <label className="apiC"> API URL :
            <input type='text' onChange={props.handler} />
            </label>
            </section>
            <section className="methodC">
                <label> GET</label>
                <label> POST</label>
                <label> PUT</label>
                <label> DELETE</label>
                <label> PATCH</label>
                <button> GO!</button>
            </section>
            <textarea></textarea>
        </form>

    );
}


export default Resty;