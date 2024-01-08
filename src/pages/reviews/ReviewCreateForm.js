import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";


import styles from "../../styles/ReviewCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";


import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";

function ReviewCreateForm() {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});

  const [reviewData, setReviewData] = useState({
    title: "",
    content: "",
    rating: 0,
    album: "",
  });


  const [albums, setAlbums] = useState([]);
  const history = useHistory();

  useEffect(() => {
    // Fetch the list of albums when the component mounts
    const fetchAlbums = async () => {
      try {
        let allAlbums = [];
        let nextUrl = "/albums/";
  
        // Fetch all pages until there are no more pages
        while (nextUrl) {
          const response = await axiosReq.get(nextUrl);
          allAlbums = [...allAlbums, ...response.data.results];
          nextUrl = response.data.next;
        }
  
        setAlbums(allAlbums);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };
  
    fetchAlbums();
  }, []);
  
  const { title, content, rating, album } = reviewData;

  const handleChange = (event) => {
    setReviewData({
      ...reviewData,
      [event.target.name]: event.target.value,
    });
  };

  const handleAlbumChange = (event) => {
    const selectedAlbumId = event.target.value;
    setReviewData({
      ...reviewData,
      album: selectedAlbumId,
    });
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    formData.append("rating", rating);
    formData.append("album", album || "");
  
    try {
      const { data } = await axiosReq.post("/reviews/", formData);
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
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group >
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="content"
          value={content}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label >Rating (1-5)</Form.Label>
        <Form.Control
          type="number"
          name="rating"
          value={rating}
          onChange={handleChange}
        />
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
        Create
      </Button>
    </div>
  );

  const albumDropdown = (
    <Form.Group>
      <Form.Label>Album</Form.Label>
      {Array.isArray(albums) && albums.length > 0 ? (
        <Form.Control
          as="select"
          name="album"
          value={album}
          onChange={handleAlbumChange}
        >
          <option value="" disabled>Select an album</option>
          {albums.map((album) => (
            <option key={album.id} value={album.id}>
              {album.title}
            </option>
          ))}
        </Form.Control>
      ) : (
        <p>No albums available</p>
      )}
    </Form.Group>
  );
  
  
  
  

  return (
    <Container className={`${styles.CenteredContainer} ${styles.font}`}>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit} className={styles.Form}>
            {albumDropdown}
            {textFields}
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ReviewCreateForm;
