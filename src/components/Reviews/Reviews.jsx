import { Component } from 'react';
import ReviewsApi from '../api/reviews-api';
import Review from './Review';

import './Reviews.scss';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    try {
      const response = await ReviewsApi.fetchReviews(movieId);
      this.setState({ reviews: response });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    if (this.state.reviews.length === 0) {
      return (
        <h2 className="ReviewsList__noReviews">
          There are no reviews for this movie yet
        </h2>
      );
    }
    return (
      <ul className="ReviewsList">
        {this.state.reviews.map(({ id, author, content, created_at }) => {
          created_at = created_at.substring(0, 10);
          return (
            <li key={id}>
              <Review
                author={author}
                content={content}
                created_at={created_at}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Reviews;
