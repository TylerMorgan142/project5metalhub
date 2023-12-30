import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useParams} from "react-router-dom";
import { axiosReq} from "../../api/axiosDefaults";
import Review from "./Review";
import PopularProfiles from "../profiles/PopularProfiles";

function ReviewPage() {
  const { id } = useParams();
  const [review, setReview] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/reviews/${id}`);
        setReview({ results: [data] });
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2 lg={8}">
        <PopularProfiles mobile />
        {review.results.map((reviewItem) => (
          <Review key={reviewItem.id} {...reviewItem} reviewPage>
          </Review>
        ))}
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default ReviewPage;
