const initialState = {
    club: {
        id: '',
        title: '',
        shaft: '',
        price: 0,
    },
    clubs: [
        {
            id: 1,
            title: 'PING G410 PLUS 1W',
            shaft: 'PING TOUR 173-65',
            price: 70000
        },
        {
            id: 2,
            title: 'PING G410 5W',
            shaft: 'PING TOUR 173-65',
            price: 50000
        },
        {
            id: 3,
            title: 'PING G410 4UT',
            shaft: 'PING TOUR 173-85',
            price: 40000
        },
        {
            id: 4,
            title: 'PING G410 5UT',
            shaft: 'PING TOUR 173-85',
            price: 40000
        },
        {
            id: 5,
            title:'MIZUNO MP-55 irons 5i〜PW',
            shaft: 'Dynamic Gold SL S300',
            price: 120000 
        },
        {
            id: 6,
            title:'Titleist Vokey COLD FORGED Wedges 52, 58',
            shaft:'Dynamic Gold S200',
            price: 40000
        }
    ],
    uniqueId: 7,
}

export default function clubsReducer(state = initialState, action){
    switch(action.type){
        case 'INPUT_TITLE':
            return{
                ...state,
                club: {
                    ...state.club,
                    title: action.payload.title,
                }
            };
        case 'INPUT_SHAFT':
            return{
                ...state,
                club: {
                    ...state.club,
                    shaft: action.payload.shaft,
                }
            }
        case 'INPUT_PRICE':
            return{
                ...state,
                club: {
                    ...state.club,
                    price: action.payload.price,
                }
            }
        case 'ADD_CLUB':
            return{
                ...state,
                clubs: state.clubs.concat(state.club),
            }
        case 'DELETE_CLUB':
            return{
                ...state,
                clubs: state.clubs.slice(0, -1),
            }
        default:
            return state;
    };
}