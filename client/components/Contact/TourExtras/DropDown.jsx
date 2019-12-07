import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Select = styled.select`
background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAABUCAYAAACLOrcbAAAAyElEQVRYw+3YwQ3DIAyF4d8TZBiSzNSyQI/JMRuUoZgJ95KoUQoJqLfWPuMPgSz0hDDpgvAgX0En7pyUABSQwIxXRa+BTyQw40FU9bR/B7yRbmsGaAMyZYABBvwPcLXgqqRml6oj5BARabuD/WIRsTkwwAAD2oAY4wLlnOicu86JBSSkhB8GV5cTD0hICT+OfVtOXJFua7Y5MMAAAywnNubEr+/AAAMM+BkgwhO4FXOiakVOzCOhR+v/Ew9I6NH2/8QVYWuueRNfuFY7aInJEKAAAAAASUVORK5CYII=);
background-repeat: no-repeat;
padding: 0 23px 0 6px;
line-height: 20px
border-radius: 0;
width: 100%;
border: 1px solid #A7A6AB;
background-color: #fff;
height: 30px;
box-shadow: inset 0 2px 2px #F9F9FB, 0 0 0 #62aef7;
margin-bottom: 10px;
`;

const DropDown = (props) => {
  const { times } = props;
  return (
    <Select>
      <option value="choose">Choose a time</option>
      {times.map((time) => <option value={time} key={time}>{time}</option>)}
    </Select>
  );
};

DropDown.propTypes = {
  times: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DropDown;
