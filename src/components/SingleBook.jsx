import { Card } from "react-bootstrap";
import  CommentArea  from "./CommentArea"


const SingleBook = ({bookData, select}) => {
    const {asin, title, img, category, price } = bookData
    
  return (
    <div className="col">
      <Card onClick={()=>{select(asin)}}  key={asin}  className="bg-dark" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>            
          <Card.Title className="text-light">{title}</Card.Title>
          <Card.Text className="text-light">{price}</Card.Text>
          <Card.Text className="text-light">{category}</Card.Text>
          
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleBook;
