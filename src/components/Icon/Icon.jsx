import PropTypes from 'prop-types';

import ReactIcon from './IconComponents/ReactIcon';

const IconTypes = {
  React: ReactIcon,
};

const Icon = ({ type, fill, width, height, className }) => {
  if (type) {
    const IconComponent = IconTypes[type];
    return (
      <IconComponent
        width={width}
        height={height}
        fill={fill}
        className={className}
      />
    );
  }
  return null;
};

export default Icon;

Icon.propTypes = {
  type: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};

Icon.defaultProps = {
  type: '',
  fill: '#000000',
  width: 20,
  height: 20,
  className: '',
};
