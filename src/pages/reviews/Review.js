import React from "react";
import styles from "../../styles/Review.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";

const Review = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    title,
    content,
    rating,
    updated_at,
    reviewPage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/reviews/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/reviews/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={styles.Review}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && reviewPage && (
              <MoreDropdown
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
            )}
          </div>
        </Media>
      </Card.Body>
      <Card.Body>
        {title && (
          <Link to={`/reviews/${id}`}>
            <Card.Title className={`${styles.font} text-center`}>{title}</Card.Title>
          </Link>
        )}
        {content && (
          <Link to={`/reviews/${id}`}>
            <Card.Text className="text-center">{content}</Card.Text>
          </Link>
        )}
        {rating && (
          <Link to={`/reviews/${id}`}>
            <Card.Text className="text-center">{rating} <i className="fa-solid fa-star"></i></Card.Text>
          </Link>
        )}
      </Card.Body>
    </Card>
  );
};

export default Review;
