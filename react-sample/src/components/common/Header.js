import './Header.css'
import PropTypes from 'prop-types';

function Header(props){
    if (props.admin){
        return(
            <header className="common-header">
                <h1>本のクロノス堂（管理者）</h1>    
            </header>
            )
    }else{
        return (
            <header className="common-header">
                <h1>本のクロノス堂</h1>    
            </header>
        )
    }
}

Header.propTypes = {
    admin: PropTypes.bool
}

export default Header;