import React from 'react';
import superagent from 'superagent';


class Resty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      restMod: '',
      results: [],
      headers : {},
      body : {}
    }; // end of state object
  } // end of constructor 

    submitRes = async (event) => {
      event.preventDefault();
      console.log('this.state.url : ', this.state.url);
      superagent.get(`${this.state.url}`)
        .then(data => {
          console.log('data results', data.body.results);
          console.log('data headers', data.header);
          let res = data.body.results;
          this.setState({ results: res });
        });
    } // end of submitRes event 



    handleURL = event => {
      event.preventDefault();
      let url = event.target.value;
      console.log('urlEvent : ', url);
      this.setState({ url });
    } // end of handleURL event 

    handleGet = event => {
      event.preventDefault();
      let getMethod = event.target.value;
      console.log('getMethod : ', getMethod);
      this.setState({ getMethod });
    } // end of handleGet event 
    render() {
      return (
            <>
                <Urlfun url1={this.state.url} />
                <Form handler={this.handleURL} gethandler={this.handleGet} handleSubmit={this.submitRes} res1={this.state.results} />
            </>
      );
    } // end of render method 
} // end of resty class 

function Print({ res1 }) {
  console.log('res1 : ', res1);
  return <p> ppppppppppppppp {res1}</p>;
}

function Urlfun({ url1 }) {
  return <h1> URL Full Address : {url1}</h1>;
}

function Form(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <section>
        <label className="apiC"> API URL :
          <input type='text' onChange={props.handler} />
        </label>
      </section>
      <section className="methodC">
        <button className="methods" onClick={props.gethandler} value="get"> GET</button>
        <button className="methods" onClick={props.gethandler} value="post"> POST</button>
        <button className="methods" onClick={props.gethandler} value="put"> PUT</button>
        <button className="methods" onClick={props.gethandler} value="patch"> PATCH</button>
        <button className="methods" onClick={props.gethandler} value="delete"> DELETE</button>
        <button className="submitB"> GO!</button>
      </section>
      <p> The Results </p>
      <textarea type="text"></textarea>
    </form>
  );
} // end of Form function 



export default Resty;