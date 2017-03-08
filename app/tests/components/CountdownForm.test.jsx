var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  })

  it('should call onSetCountdown if valid seconds are entered', () => {
    var spy = expect.createSpy(); // create the spy to pass into the component

    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>)
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = '109';
    TestUtils.Simulate.submit($el.find('form')[0]); // [0] pulls out non-jquery dom node

    expect(spy).toHaveBeenCalledWith(109);
  })

  it('should call not call onSetCountdown if invalid input is entered', () => {
    var spy = expect.createSpy(); // create the spy to pass into the component

    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>)
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = 'humanity first';
    TestUtils.Simulate.submit($el.find('form')[0]); // [0] pulls out non-jquery dom node

    expect(spy).toNotHaveBeenCalled();
  })
});
