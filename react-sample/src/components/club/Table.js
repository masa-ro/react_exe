import Tr from "../book/Tr";
import '../../css/components/common/common-table.css';

export default function({clubs, deleteClub}){
    const lists = clubs.map(club =>
        <Tr club={club}/>
    );
    return(
        <div>
            <table>
                <tr>
                    <th>クラブ名</th>
                    <th>シャフト</th>
                    <th>価格</th>
                </tr>
                {lists}
            </table>
            <p>
                <button onClick={() => deleteClub()}>Delete</button>
            </p>
        </div>
    );
}