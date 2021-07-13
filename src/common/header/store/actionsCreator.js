import axios from 'axios';
import { fromJS } from 'immutable';

export const searchFocus = () => ({ 
    type : 'search_focus'});

export const searchBlur = () => ({ 
    type : 'search_blur'});

export const getList = ()=>{
    return (dispatch)=>{
        axios.get('/apis/headerlist.json')
        .then((res)=>{
            dispatch({ type:'initialise_list', 
                        value: fromJS(res.data.data),
                        totalPage: Math.ceil(res.data.data.length / 10)})
        })
        .catch((err)=>{
            alert(err);
        });
    }
}

export const mouseEnter = () => ({
    type: 'mouse_enter',
});
export const mouseLeave = () => ({
    type: 'mouse_leave',
});
export const updateList = (e) => ({ 
    type:'update_list',
    value: e,
});

export const changeNightMode = ()=>({
    type:'change_night_mode'
})

export const changeDefaultFont = ()=>({
    type: 'change_default_font'
})

export const changeWidgetPopup = ()=>({
    type:'popup_widget'
})

export const mouseEnterAa = ()=>({
    type:'mouse_enter_Aa'
})

export const mouseLeaveAa = ()=>({
    type:'mouse_leave_Aa'
})
