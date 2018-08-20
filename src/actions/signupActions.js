import axios from 'axios';

export default function signupRequest({name, email, password, password2}) {
    return dispatch=> {
        const url = '/api/users/register';
        console.log(name, email, password, password2);
        return axios.post(url, {
            name, email, password, password2
        })
        //    .then((res)=>{
        //       console.log("response from post of /api/users/register", res);
        //    })
        //Can't use then and catch here because using them in SignupForm component
    }
}