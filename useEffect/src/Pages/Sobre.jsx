import { useNavigate } from "react-router-dom"

export const Sobre = () => {

    const navigate = useNavigate();

    const handleNavigate = ()=>
    {
        console.log("Navegar")
        alert('teste')
        navigate('/')
    }


    return (
        <>
            <h1>Sobre</h1>
            <button onClick={handleNavigate}>Clique em mim </button>
        </>
    )
}