import React, { FC } from 'react';

interface SVGStyle extends React.CSSProperties {
  enableBackground?: string;
}

const IconDoc: FC = () => {
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
              id="574330322_SVGID_1_"
              d="M14,5c-1.657,0-3,1.343-3,3v48c0,1.657,1.343,3,3,3h36c1.657,0,3-1.343,3-3V21.821L43.289,5H14z"
            />
          </defs>
          <use
            xlinkHref="#574330322_SVGID_1_"
            className="stshockcolor"
            style={{
              fill: '#93C1CF',
              overflow: 'visible',
              fillRule: 'evenodd',
              clipRule: 'evenodd',
            }}
            data-st="fill:#93C1CF;;overflow:visible;fill-rule:evenodd;clip-rule:evenodd;"
          />
          <clipPath id="574330322_SVGID_2_">
            <use
              xlinkHref="#574330322_SVGID_1_"
              style={{ overflow: 'visible' }}
            />
          </clipPath>
          <g className="st2" style={{ clipPath: 'url(#574330322_SVGID_2_)' }}>
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
            style={{ fill: '#93C1CF' }}
            data-st="fill:#93C1CF;;"
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
        d="M43,39c2.193,0,3.925-1.533,4.633-4.102l-2.893-0.797C44.394,35.361,43.808,36,43,36c-1.579,0-2-2.514-2-4  c0-1.486,0.421-4,2-4c0.808,0,1.394,0.639,1.74,1.898l2.893-0.797C46.925,26.533,45.193,25,43,25c-3.037,0-5,2.748-5,7  C38,36.252,39.963,39,43,39z"
        style={{ fill: '#E6E6E6' }}
      />
      <path
        className="st0"
        d="M20.5,39h-3.484L17,25h3.5c3.235,0,5.5,2.165,5.5,7C26,37.166,23.498,39,20.5,39z M20,28.026v7.947  c1.5,0,3-0.212,3-3.974C23,28.238,21.5,28.026,20,28.026z"
        style={{ fill: '#E6E6E6' }}
      />
      <path
        className="st0"
        d="M32,39c-3.037,0-5-2.748-5-7s1.963-7,5-7s5,2.748,5,7S35.037,39,32,39z M32,28c-1.578,0-2,2.514-2,4  s0.422,4,2,4c1.579,0,2-2.514,2-4S33.579,28,32,28z"
        style={{ fill: '#E6E6E6' }}
      />
    </svg>
  );
};
export default IconDoc;
