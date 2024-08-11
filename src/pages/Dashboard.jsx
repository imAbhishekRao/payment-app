import axios from "axios";
import { useEffect, useState } from 'react';

import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import { useNavigate, useSearchParams } from "react-router-dom"



    // const name=searchParams.get("name");


// export const Dashboard = () => {
//     return <div>
//         <Appbar />
//         <div className="m-8">
//             <Balance value={"10,000"} />
//             <Users />
//         </div>
//     </div>
// }




export const Dashboard = () => {
    const [balance, setBalance] = useState(null);
    const [searchParams]=useSearchParams();
        const id=searchParams.get("id");

    useEffect(() => {
        
        
    
        const fetchBalance = async () => {
            // try {
            //     const response = await fetch('YOUR_BACKEND_ROUTE');
            //     const data = await response.json();
            //     setBalance(data.balance); // Adjust according to your backend response structure
            // } catch (error) {
            //     console.error('Error fetching balance:', error);
            // }
            try{
            const res=await axios.get("http://localhost:3000/api/v1/account/balance",{
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                    id:id
                  }
                }
            );
            setBalance(res.data.balance);
        } catch{error}{
            console.log('Error fetching balance ' , error);
            
        }
    
        
    
        };
    
        fetchBalance();
    }, []);
    

    return (
        <div>
            <Appbar />
            <div className="m-8">
                <Balance value={balance !== null ? balance : "Loading..."} />
                <Users />
            </div>
        </div>
    );
};

