import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import URLapp from '../../components/url-app.js';


describe ('<URL-App />' , () => {

  it(' It Should be exists in our applications ', () => {
    // virtual 
    let app = shallow(<URLapp />);
    // find the tag which already includes in our app 
    expect(app.find('h1').exists()).toBeFalsy();
  }); // end of it test 

  it(' Renders correctly ' , () => {
    const tree = renderer.create(<URLapp />).toJSON();
    expect(tree).toMatchSnapshot();
  }); // end of it test for render 

}); // end of describe test 