var React = require('react');

var CountdownForm = React.createClass({

    onSubmit: function(e) {
      e.preventDefault();
      var strSeconds = this.refs.seconds.value;

      if (this._isValidStringOfNumbers(strSeconds)) {
        this.refs.seconds.value = '';

        // pass the seconds to the container component
        this.props.onSetCountdown(parseInt(strSeconds, 10));
      }
    },

    _isValidStringOfNumbers: function(str) {
      return (str).match(/^[0-9]*$/);
    },

    render: function() {
      return (
        <div>
          <form ref='form' onSubmit={this.onSubmit} className='countdown-form'>
            <input type='text' ref='seconds' placeholder='time in seconds'/>
            <button className='button expanded'>Start</button>
          </form>
        </div>
      )
    }
})

module.exports = CountdownForm;
