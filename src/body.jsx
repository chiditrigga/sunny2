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
import './body.css'
import emily from './images/image-emily.jpg'
import jennie from './images/image-jennie.jpg'
import thomas from './images/image-thomas.jpg'
import bottle from './images/desktop/image-gallery-milkbottles.jpg'
import orange from './images/desktop/image-gallery-orange.jpg'
import cone from './images/desktop/image-gallery-cone.jpg'
import sugar from './images/desktop/image-gallery-sugarcubes.jpg'
import fb from './images/icon-facebook.svg'
import ig from './images/icon-instagram.svg'
import twitter from './images/icon-twitter.svg'
import pint from './images/icon-pinterest.svg'






const Body = () => {
    return ( 
        <>
         <Navv /> 
       <Container fluid>
        <Row>
        <Col xs={12} md={6}>
        <h1>Transform your brand</h1>
                <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clints through compelling visuals that do most of the marketing for you.
                    <h3>LEARN MORE</h3>
                </p>
        </Col>

        <Col xs={12} md={6} className='p-0'>
        <Image fluid className='w-100' src={egg} />
        </Col>
           </Row>

           <Row>
            <Col xs={12} md={6} className='px-0'>
            <Image fluid className='w-100' src={cup} />

            </Col>

            <Col xs={12} md={6}>
            <h1>Stand out to the right audience</h1>
                <p> Using a collaborative formular of designers,researchers,photographers,videographers,and copywriters.We'll build and extend your brand in digital places.
                    <h3>LEARN MORE</h3>
                </p>

            </Col>
           </Row>
           <Row>
            <Col xs={12} md={6} className='graphic '>
              <div className="down pb-0 absolute">
                down
              </div>
            </Col>
            <Col xs={12} md={6} className='photo'>

            </Col>
           </Row>


           <Row >
            <Row>
              <Col xs={12} className='text-center pb-5 pt-5 mt-5'> <h3>CLIENT TESTIMONIALS</h3> </Col>
            </Row>

            <Col xs={12} md={4}>
            <Card className='bor gap-4'>
        <Card.Img className='asia mx-auto' variant="top" fluid src={emily} />
        <Card.Body >
          <Card.Text>
           We put our sunnyside and they delivered,making sure our needs were met and deadlines were always hit.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-center let"><h4>Emily R. </h4> Marketing Director </Card.Footer>
      </Card>
      
     
            </Col>

            <Col xs={12} md={4}>
            <Card className='bor gap-3'>
        <Card.Img className='asia mx-auto' variant="top" fluid src={thomas} />
        <Card.Body>
          <Card.Text>
           Sunnyside's enthusiasm coupled with their keen intrest in our brand's success made it a satisfying and enjoyable experience.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-center let"><h4>Thomas S. </h4> Chief Operating Officer </Card.Footer>
      </Card>
            </Col>

            <Col xs={12} md={4} >
            <Card className='bor gap-4'>
        <Card.Img className='asia mx-auto'  variant="top" fluid src={jennie} />
        <Card.Body>
          <Card.Text>
           Incredible and result! Our sales increased over 400% when we worked with sunnyside.Highly recommended!
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-center let"><h4>Jennie F. </h4> Business Owner </Card.Footer>
      </Card>
            </Col>
           </Row>

          <Row>
            <Col xs={12} md={3} className='px-0'>
              <Image  className='px-0 w-100' fluid src={bottle} />
            </Col>
            <Col  xs={12} md={3}  className='px-0'>
              <Image  className='px-0 w-100' fluid src={orange} />
            </Col>
            <Col  xs={12} md={3}  className='px-0'>
              <Image  className='px-0 w-100' fluid src={cone} />
            </Col>
            <Col  xs={12} md={3}  className='px-0'>
              <Image  className='px-0 w-100' fluid src={sugar} />
            </Col>
          </Row>
      <Row>

        <Col xs={12} className='text-center pt-5 pb-4'>Sunnyside</Col>
        <Col xs={12} className='text-center pb-5'> <span className='p-5'>About</span> <span className='p-5'>Services</span> <span className='p-5'>  Projects</span> </Col>
        <Col xs={12} className='text-center'>
        <span className='px-2'><Image src={fb} /></span> <span className='px-2'><Image src={ig} /></span> <span className='px-2'><Image src={twitter} /></span> <span className='px-2'><Image src={pint} /></span>  
        </Col>
      </Row>
      
       </Container>
        </>
     );
}
 
export default Body;