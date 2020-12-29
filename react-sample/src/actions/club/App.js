export const inputTitle = (title) => ({
    type: 'INPUT_TITLE',
    payload: {
        title: title,
    }
});

export const inputShaft = (shaft) => ({
    type: 'INPUT_SHAFT',
    payload: {
        shaft: shaft,
    }
});

export const inputPrice = (price) => ({
    type: 'INPUT_PRICE',
    payload: {
        price: price,
    }
});

export const addClub = (club) => ({
    type: 'ADD_CLUB',
    payload: {
        club: club,
    }
})

export const deleteClub = () => ({
    type: 'DELETE_CLUB',
})