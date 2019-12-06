import React from 'react';
import styled from 'styled-components';


const Link = styled.a`
font-family: "Open Sans", Tahoma, Geneva, sans-serif;
color: rgb(0, 106, 255);
font-weight: 600;
font-size: 14px;
line-height: 21px;
letter-spacing: 0px;
text-transform: none;
margin: 0px;
cursor: pointer;
text-decoration: none;
`;


const Qualified = (props) => (
  <span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="20"
      height="20"
      viewBox="0 0 172 172"
      style={{ fill: '#000000' }}
    >
      <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
        <path d="M0,172v-172h172v172z" fill="none" />
        <g>
          <path d="M86,165.55c-43.8643,0 -79.55,-35.6857 -79.55,-79.55c0,-43.8643 35.6857,-79.55 79.55,-79.55c43.8643,0 79.55,35.6857 79.55,79.55c0,43.8643 -35.6857,79.55 -79.55,79.55z" fill="#006aff" />
          <path d="M86,8.6c42.6775,0 77.4,34.7225 77.4,77.4c0,42.6775 -34.7225,77.4 -77.4,77.4c-42.6775,0 -77.4,-34.7225 -77.4,-77.4c0,-42.6775 34.7225,-77.4 77.4,-77.4M86,4.3c-45.1199,0 -81.7,36.5801 -81.7,81.7c0,45.1199 36.5801,81.7 81.7,81.7c45.1199,0 81.7,-36.5801 81.7,-81.7c0,-45.1199 -36.5801,-81.7 -81.7,-81.7z" fill="#006aff" />
          <path d="M111.8,100.62c0,-23.7317 -37.2939,-21.9214 -37.2939,-35.26c0,-4.3 3.8571,-8.0109 11.7863,-8.0109c8.9784,0 15.4413,2.5456 20.4637,5.59v-14.5125c-3.6507,-2.0296 -9.1504,-3.2293 -16.4561,-3.6163v-10.4103h-8.6v10.6339c-6.4242,0.6837 -11.61,2.9627 -15.5316,6.8628c-3.9775,3.9603 -5.9684,8.7505 -5.9684,14.3749c0,22.231 37.3111,22.919 37.3111,35.1009c0,4.3344 -5.4309,7.6841 -11.4896,7.6841c-15.0672,0 -23.7403,-5.2503 -25.8172,-6.9316v14.8866c6.1963,3.2207 14.2932,4.8547 21.5,4.9278v11.3606h0.2709h7.8475h0.4773v-11.7476c6.8112,-0.8385 12.0959,-3.0057 15.8111,-6.5532c3.7883,-3.6378 5.6889,-8.4323 5.6889,-14.3792z" fill="#ffffff" />
        </g>
      </g>

    </svg>
    <Link href="https://bit.ly/2DVghkg" target="blank"> Get pre-qualified </Link>
  </span>
);


export default Qualified;
