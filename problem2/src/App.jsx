import React, { useState, useEffect } from 'react';
import axios from 'axios';


const App = () => {
    

    

    const add=()=>{
        var randomnumber=Math.floor(Math.random()*(50-1)+1);
        console.log(randomnumber);
        return randomnumber;

        // newUser((prevUsers)=>[...prevUsers,data.name])
       
    }

    const url = `https://swapi.dev/api/people/${add()}`;

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(url).then(json => setData(json.data))
        // setData((prevdata)=>{
        //     console.log(prevdata);
        // })
    }, [])
    

    
    // const renderTable = () => {
    //     return data.map(user => {
    //         return (
    //             <tr>
    //                 <td>{user.name}</td>
                    
    //             </tr>
    //         )
    //     })
    // }

    return (
        <div>
            <h1 id="title">API Table</h1>
            <button onClick={add}>Add</button>
            <table id="users">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{data.name}</td>
                    <td><button>Delete</button></td>
                </tr>
                
                
                </tbody>
                
                {/* <tbody>{renderTable()}</tbody> */}
            </table>
        </div>
    )


}


export default App;