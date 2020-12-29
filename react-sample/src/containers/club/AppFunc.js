import {connect} from 'react-redux';
import {inputTitle, inputShaft, inputPrice, addClub, deleteClub} from '../../actions/club/App';
import AppFunc from '../../components/club/AppFunc';

function mapStateToProps({club, clubs}){
    return{
        club,
        clubs,
    };
};

function mapDispathToProps(dispatch){
    return{
        inputTitle(title){
            dispatch(inputTitle(title))
        },
        inputShaft(shaft){
            dispatch(inputShaft(shaft))
        },
        inputPrice(price){
            dispatch(inputPrice(price))
        },
        addClub(club){
            dispatch(addClub(club))
        },
        deleteClub(){
            dispatch(deleteClub())
        }
    };
};

export default connect(mapStateToProps, mapDispathToProps)(AppFunc);