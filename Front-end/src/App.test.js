import React from 'react'; 
import Main from '../src/Components/Main'; //Import Main from Components.
import renderer from 'react-test-renderer' //Import react-test-renderer.

test('Testing Main component', () => {
  const tree = renderer.create(<Main />).toJSON();
  expect(tree).toMatchSnapshot();  //Expect the JSON DOM tree to match snapshot.
});
 // :)
