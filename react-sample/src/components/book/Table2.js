import '../../css/components/common/common-table.css';
import PropTypes from 'prop-types';

function Table2 (props){
    const lists = props.books.map(book =>
        <tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.price}</td>
        </tr>
    );

    return (
        <table>
            <tr>
                <th>書籍名</th>
                <th>価格</th>
            </tr>
            {lists}
        </table>
    );
};

Table2.propTypes = {
    books: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.number
    }))
}

export default Table2;