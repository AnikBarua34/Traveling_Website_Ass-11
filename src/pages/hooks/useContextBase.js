import { useContext } from "react"
import { AuthContext } from "../Context/AuthProvider";




const useContextbase =()=>{
    
return useContext(AuthContext);

}

export default useContextbase;