import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import styles from "../../styles/ReviewCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

function ReviewEditForm() {
  const [errors, setErrors] = useState({});
  const [reviewData, setReviewData] = useState({
    title: "",
    content: "",
    rating: 0,
  });

  const { title, content, rating } = reviewData;
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/reviews/${id}/`);
        const { title, content, rating, is_owner } = data;

        is_owner ? setReviewData({ title, content, rating }) : history.push("/");
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [history, id]);

  const handleChange = (event) => {
    setReviewData({
      ...reviewData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axiosReq.put(`/reviews/${id}/`, reviewData);
      history.push(`/reviews/${data.id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="title" value={title} onChange={handleChange} />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control as="textarea" rows={6} name="content" value={content} onChange={handleChange} />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Rating (1-5)</Form.Label>
        <Form.Control type="number" name="rating" value={rating} onChange={handleChange} />
      </Form.Group>
      {errors?.rating?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.Button} ${btnStyles.Black}`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Black}`} type="submit">
        Save
      </Button>
    </div>
  );

  return (
    <Container className={`${styles.CenteredContainer} ${styles.font}`}>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit} className={styles.Form}>
            {textFields}
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ReviewEditForm;
