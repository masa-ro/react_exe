import {connect} from 'react-redux';
import {deleteClub} from '../../actions/club/App';
import Table from '../../components/club/Table';

function mapStateToProps({club, clubs}){
    return{
        club, clubs,
    };
};

function mapDispatchToProps(dispatch){
    return{
        deleteClub(){
            dispatch(deleteClub())
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);