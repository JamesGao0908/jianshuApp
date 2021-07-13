import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused : false,
    mouseIn: false,
    list: [],
    page: 0,
    totalPage: 0,

    AaMouseIn:false,
    nightMode: false,
    fontDefault: true,
});

export default function reducer (state = defaultState, action ) {
    switch (action.type) {
        case 'search_focus' :{
            return state.set('focused',true);
        }
        case 'search_blur' :{
            return state.set('focused',false);
        }
        case 'initialise_list':{
            return (state.set('list',action.value)
                        .set('totalPage',action.totalPage));
        }
        case 'mouse_enter':{
            return state.set('mouseIn',true);
        }
        case 'mouse_leave' :{
            return state.set('mouseIn',false);
        }
        case 'update_list':{
            if( (action.value+1) >= state.toJS().totalPage )
                return state.set('page',0);
            else
                return state.set('page', action.value+1);
        }
        case 'change_night_mode':{
            return state.set('nightMode', fromJS(!state.toJS().nightMode));
        }
        case 'change_default_font':{
            return state.set('fontDefault', fromJS(!state.toJS().fontDefault)); 
        }
        case 'popup_widget' :{
            return state.set('AaMouseIn', true);  
        }
        case 'mouse_enter_Aa' : {
            return state.set('AaMouseIn', true);  
        }
        case 'mouse_leave_Aa' : {
            return state.set('AaMouseIn', false);  
        }
        default :
            return state;
    }
   
}