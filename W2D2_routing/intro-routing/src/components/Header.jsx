import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <fieldset>
            <legend>Header.jsx</legend>
            <Link to="/">home</Link> |
            <Link to="/cool">😎</Link> |
            <Link to="/form">Search for a Hero</Link>
            {/* <Link to="/hero/70">batman</Link> */}
        </fieldset>
    );
};

export default Header;