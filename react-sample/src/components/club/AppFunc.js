import './AppFunc.css';
import '../../css/components/common/common-table.css';
import Tr from '../book/Tr';

export default function({club, clubs, inputTitle, inputShaft, inputPrice, addClub, deleteClub}){
    const lists = clubs.map(club =>
        <Tr club={club}/>
    );
    return(
        <div>
            <header className="header">
                <h1>クラブセッティング</h1>
            </header>
            <table>
                <tr>
                    <th>クラブ名</th>
                    <th>シャフト</th>
                    <th>価格</th>
                </tr>
                {lists}
            </table>
            <p>
                <label>CLUB:</label>
                <input type="text" onChange={(e) => {inputTitle(e.target.value)}} value={club.title}/>
            </p>
            <p>
                <label>SHAFT:</label>
                <input type="text" onChange={(e) => {inputShaft(e.target.value)}} value={club.shaft}/>
            </p>
            <p>
                <label>PRICE:</label>
                <input type="number" onChange={(e) => {inputPrice(e.target.value)}} value={club.price}/>
            </p>
            <p>
                <button onClick={() => addClub(club)}>Regist</button>
            </p>
            <p>
                <button onClick={() => deleteClub()}>Delete</button>
            </p>
        </div>
    )
}