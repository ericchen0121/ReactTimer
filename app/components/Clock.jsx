var React = require('react');

var Clock = React.createClass({
  getDefaultProps: function() {
    return {
      totalSeconds: 0
    }
  },

  propTypes: {
    totalSeconds: React.PropTypes.number
  },

  _formatWithLeadingZero: function(number) {
    if (number < 10) {
      return '0' + number;
    } else {
      return String(number);
    }
  },

  formatSeconds: function(totalSeconds) {
    var minutes = this._formatWithLeadingZero(Math.floor(totalSeconds / 60));
    var seconds = this._formatWithLeadingZero(totalSeconds % 60);

    return minutes + ':' + seconds;
  },

  render: function() {
    var {totalSeconds} = this.props;

    return  (
      <div className='clock'>
        <span className='clock-text'>
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>

    )
  }
})

module.exports = Clock;
