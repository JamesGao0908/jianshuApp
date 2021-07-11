const defaultState = {
    focused : false,
}

export default function reducer (state = defaultState, action ) {
    switch (action.type) {
        case 'search_focus' :{
            return {
                focused: true,
            }
        }
        case 'search_blur' :{
            return {
                focused: false,
            }
        }
        default :
            return state;
    }
   
}