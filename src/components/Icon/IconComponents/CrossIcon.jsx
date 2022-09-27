import PropTypes from 'prop-types';

const CrossIcon = ({ width, height, fill, className }) => (
  <svg
    className={className}
    width={`${width}px`}
    height={`${height}px`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1024 1024"
    role="img"
  >
    <path
      fill={fill}
      d="M602.51 512l402.745-402.745a64 64 0 00-90.51-90.51L512 421.49 109.255 18.745a64
    64 0 00-90.51 90.51L421.49 512 18.745 914.745a64 64 0 0090.51 90.51L512 602.51l402.745 402.745a64 64 0 0090.51-90.51z"
    />
  </svg>
);

export default CrossIcon;

CrossIcon.propTypes = {
  fill: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

CrossIcon.defaultProps = {
  fill: '#ffffff',
  className: '',
  width: 20,
  height: 20,
};
