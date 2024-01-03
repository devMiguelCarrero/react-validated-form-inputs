import React, { FC } from 'react';

interface SVGStyle extends React.CSSProperties {
  enableBackground?: string;
}

const IconPDF: FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      x="0px"
      y="0px"
      width={32}
      height={32}
      viewBox="0 0 64 64"
      style={{ enableBackground: 'new 0 0 64 64' } as SVGStyle}
      xmlSpace="preserve"
    >
      <g>
        <g>
          <defs>
            <path
              id="574330325_SVGID_1_"
              d="M14,5c-1.657,0-3,1.343-3,3v48c0,1.657,1.343,3,3,3h36c1.657,0,3-1.343,3-3V21.821L43.289,5H14z"
            />
          </defs>
          <use
            xlinkHref="#574330325_SVGID_1_"
            className="stshockcolor"
            style={{
              fill: '#DE7047',
              overflow: 'visible',
              fillRule: 'evenodd',
              clipRule: 'evenodd',
            }}
            data-st="fill:#DE7047;;overflow:visible;fill-rule:evenodd;clip-rule:evenodd;"
          />
          <clipPath id="574330325_SVGID_2_">
            <use
              xlinkHref="#574330325_SVGID_1_"
              style={{ overflow: 'visible' }}
            />
          </clipPath>
          <g className="st2" style={{ clipPath: 'url(#574330325_SVGID_2_)' }}>
            <polygon
              className="st4"
              points="53,3 11,3 11,4 53,28.249    "
              style={{
                opacity: '0.1',
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                fill: '#050200',
              }}
            />
          </g>
        </g>
        <g>
          <path
            className="stshockcolor"
            d="M39.927,10.819l3.353-5.813L53,21.821l-11.973-6.904C39.592,14.089,39.099,12.255,39.927,10.819z"
            style={{ fill: '#DE7047' }}
            data-st="fill:#DE7047;;"
          />
          <path
            className="st1"
            d="M39.927,10.819l3.353-5.813L53,21.821l-11.973-6.904C39.592,14.089,39.099,12.255,39.927,10.819z"
            style={{ opacity: '0.5', fill: '#FFFFFF' }}
          />
        </g>
      </g>
      <path
        className="st0"
        d="M32.5,39h-3.484L29,37.5V25h3.5c3.235,0,5.5,2.165,5.5,7C38,37.166,35.498,39,32.5,39z M32,28.026v7.947  c1.5,0,3-0.212,3-3.974C35,28.238,33.5,28.026,32,28.026z"
        style={{ fill: '#E6E6E6' }}
      />
      <polygon
        className="st0"
        points="40,38.998 40,25 47,25 47,27.998 43,27.998 43,30 46,30 46,32.998 43,32.998 43,39 "
        style={{ fill: '#E6E6E6' }}
      />
      <path
        className="st0"
        d="M21.5,25c4.546,0,5.5,2.031,5.5,4.563c0,2.5-1.5,4.438-5.5,4.438c-0.469,0-0.5,0-0.5,0v5h-3V25H21.5z M21,31  h1.5c1.27,0,1.5-0.813,1.5-1.5c0-0.771-0.23-1.5-1.5-1.5H21V31z"
        style={{ fill: '#E6E6E6' }}
      />
    </svg>
  );
};
export default IconPDF;
