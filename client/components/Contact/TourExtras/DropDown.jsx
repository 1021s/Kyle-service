import React from 'react';
import PropTypes from 'prop-types';


const DropDown = (props) => {
  const { times } = props;
  return (
    <select>
      <option value="choose">Choose a time</option>
      {times.map((time) => <option value={time} key={time}>{time}</option>)}
    </select>
  );
};

DropDown.propTypes = {
  times: PropTypes.arrayOf(PropTypes.string).isRequired,
};
// given a list of times, render a bunch of options to choose from

export default DropDown;
