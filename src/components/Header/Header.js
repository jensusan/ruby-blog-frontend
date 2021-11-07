import {Wrapper, Title, Nav} from './Header-styled';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <Wrapper>
            <Title>
                <h1>
                    <span className='main'>Grand Detour</span>
                    <span className='sub'> It's about the detours on the way</span>
                </h1>
            </Title>
            <Nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Travel</li>
                    <li>Recipes</li>
                </ul>
            </Nav>
        </Wrapper>
    )
};

export default Header;