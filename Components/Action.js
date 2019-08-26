export const PLACE_ORDER = 'PLACE_ORDER';
const local='http://localhost:3000';
export function placedOrder(firstname,lastname,email,phoneNumber,Password,CPassword){
    console.log('Adding to check', email)
    return(dispatch)=>{
        fetch(local+'/api/users',{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({firstname:firstname,lastname:lastname,email:email,phoneNumber:phoneNumber,password:Password,CPassword:CPassword})
        }).then((response) =>response.json()).then(result=>{
            console.log('Testing',result.response);
            dispatch(postData(PLACE_ORDER,result.response))
        }).catch((error)=>{
            console.log('Error ',error);
        })
    }
}
export function postData(type,results) {
    return {
        type : type,
        payload : results
    }
}

export const place_Order=(data)=>{
    return{
        type:"PLACEORDER",
        payload:data,
    };
};


/*

export const PLACE_ORDER = 'PLACE_ORDER';
export const placeOrder = (data) => dispatch => {
fetch('localhost:3000/placeOrder')
    .then(res => res.json())
    .then(result => {
        return (dispatch({
            type:PLACE_ORDER,
            body:data,
            payload:result
        }))}
    );
};

*/









