import '../../css/components/common/common-table.css';
import React from 'react';
import PropTypes from 'prop-types';
import Tr from './Tr';

class Table extends React.Component{
    render(){
        const list = [];
        // for(let i = 0; i < props.array.length; i++) {
        //     list.push(
        //         <tr key={props.array[i].id}>
        //             <td>{props.array[i].title}</td>
        //             <td>{props.array[i].price}</td>
        //         </tr>
        //     );
        // }
        // keyがないと警告が出る（WEBサイトには表示されないが）
        const rows = this.props.books.map(book => 
        //     <tr key={book.id}>
        //         <td>{book.title}</td>
        //         <td>{book.price}</td>
        //     </tr>
        Tr(book={book})
        );
    
        return (
            <table>
            <tr>
                <th>書籍名</th>
                <th>価格</th>
            </tr>
            {rows}
            </table>
        );
    }
}

Table.propTypes = {
    array: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.number
    }))
}

export default Table;