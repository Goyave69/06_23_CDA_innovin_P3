import PropTypes from "prop-types";

const WinePropTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  wine_type: PropTypes.string.isRequired,
  origin_country: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  grape_variety: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  best_seller: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number,
};

export default WinePropTypes;
