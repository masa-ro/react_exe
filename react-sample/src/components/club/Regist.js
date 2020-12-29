import '../../css/components/common/common-table.css';

export default function({club, addClub, inputPrice, inputShaft, inputTitle}){
    return(
        <div>
            <p>
            <lebel>CLUB:</lebel>
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
        </div>
    );
}