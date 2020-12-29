import {connect} from 'react-redux';
import { addClub, inputPrice, inputShaft, inputTitle } from "../../actions/club/App";
import Regist from '../../components/club/Regist';

function mapStateToProps({club, clubs}){
    return{
        club, clubs,
    };
};

function mapDispatchToProps(dispatch){
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
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Regist);