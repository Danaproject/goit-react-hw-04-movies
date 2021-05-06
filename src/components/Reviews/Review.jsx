import PropTypes from 'prop-types';
import './Reviews.scss';

const Review = ({ author, content, created_at }) => (
  <div className="Review__card--body">
    <h3>{author}:</h3>
    <p className="Review__card--name">{content}</p>
    <p className="Review__card--gender">{`Created: ${created_at}`}</p>
  </div>
);

Review.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
};
export default Review;
