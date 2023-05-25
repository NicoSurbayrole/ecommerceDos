import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'

const Footer = () =>{
    return (
        <Container className='container'>
          <Row md={3}>
            <Col className='col'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52621.68398997744!2d-58.58474493026731!3d-34.4811961479231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb0f1da12bce7%3A0xf0a25a34b83a795e!2sNike%20Store%20Unicenter!5e0!3m2!1ses!2sar!4v1684984325071!5m2!1ses!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='nike'></iframe></Col>
            <Col className='col'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52621.68398997744!2d-58.58474493026731!3d-34.4811961479231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb1b32d0b5cdf%3A0x8792af4674269e62!2sNike%20NTC%20San%20isidro!5e0!3m2!1ses!2sar!4v1684984015838!5m2!1ses!2sar" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Ubicaion'>Ubicacion</iframe></Col>
            <Col className='col'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52621.68398997744!2d-58.58474493026731!3d-34.4811961479231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5651165da8f%3A0x6b2198f1362e51be!2sNike%20Alcorta!5e0!3m2!1ses!2sar!4v1684984356532!5m2!1ses!2sar" title='nike' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></Col>
          </Row>
        </Container>
      );
}

export default Footer