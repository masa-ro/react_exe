import './Header.css';
import PropTypes from 'prop-types';

function Header2(props){
    // const admin = props.admin ? '（管理者）' : '';
    return (
        <div className="common-header">
            <h1>クラブセッティング</h1>
        </div>
    );
};

Header2.propTypes = {
    admin: PropTypes.bool
}

export default Header2;