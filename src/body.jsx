import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import egg from './images/desktop/image-transform.jpg'
import Navv from './navv';
import cup from './images/desktop/image-stand-out.jpg'
import Card from 'react-bootstrap/Card';
import photography from './images/desktop/image-photography.jpg'
import graphic from './images/desktop/image-graphic-design.jpg'






const Body = () => {
    return ( 
        <>
        <Navv />
        <Container className='px-0' fluid>
    
            <Row className='pe-0'>
                <Row>
                <Col xs={12} md={6}><h1>Transform your brand</h1>
                <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clints through compelling visuals that do most of the marketing for you.
                    <h3>LEARN MORE</h3>
                </p>
                </Col>
                <Col className='p-0'  xs={12} md={6}>
                    <Image className='w-100 ' src={egg} />
                </Col>
                </Row>

                <Row>
                
                    <Col xs={12} md={6} className='p-0'>
                        <Image fluid className='w-100' src={cup} />
                    </Col>
                    <Col xs={12} md={6}>
                    <h1>Stand out to the right audience</h1>
                <p> Using a collaborative formular of designers,researchers,photographers,videographers,and copywriters.We'll build and extend your brand in digital places.
                    <h3>LEARN MORE</h3>
                </p>
                    </Col>
                    </Row>
                <Col xs={12} md={6} className='p-0'> <Card className="p-0 text-white">
      <Card.Img src={graphic} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card></Col>
                <Col xs={12} md={6} className='p-0'>
                <Card className="p-0 text-white">
      <Card.Img src={photography} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
                </Col>
            </Row>
        </Container>
        </>
     );
}
 
export default Body;