import {Wrapper, Container} from './Footer-styled';

const Footer = () => {
    return (
        <Wrapper>
            <Container className='terms'>
                <p>Terms and conditions</p>
                <p>Privacy policy</p>
            </Container>
            <Container className='title'>
                <h2>Grand Detour</h2>
            </Container>
            <Container className='designer'>
                <p>Design: Jennifer Susan</p>
            </Container>
        </Wrapper>
    )
};

export default Footer;