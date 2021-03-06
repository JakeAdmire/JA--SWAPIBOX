import { enzyme, shallow } from 'enzyme';
import React from 'react'
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { chooseFilm } from '../../actions';

describe('App', () => {

  let wrapper;

  let mockProps = {
    film: {
      crawl: 'Once upon a time', 
      title: 'Movie1', 
      date: '3-28-2019'
    },
    faves: [],
  };

  wrapper = shallow(
    <App {...mockProps}/>
  )

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  }) 

})