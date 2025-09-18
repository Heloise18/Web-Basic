import { useParams, Link } from "react-router-dom"

export const UserList = () => {
    const  {id} = useParams();

    const users = [1,2,3,4,5];
    return (
        <>
        <h1>Lista {id}</h1>
        <ul>
            {users.map((id) => (
                <li key={id}>
                    <Link to={`/userlist/${id}`}>Usuario {id}</Link>
                </li>
            ))}
        </ul>
        </>
    )
    
}