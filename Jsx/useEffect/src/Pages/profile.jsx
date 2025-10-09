import { useParams } from "react-router-dom"

export const Profile = () => {

    const {id} = useParams();
    return (
        <h1>Perfil {id}</h1>
    )
    
}                