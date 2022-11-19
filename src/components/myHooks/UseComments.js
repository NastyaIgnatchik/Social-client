
import axios from "axios";


export default async function UseComments ( id ) {

    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`,{
        params:{
            _id: id
        }
    } );
    return response;

}





