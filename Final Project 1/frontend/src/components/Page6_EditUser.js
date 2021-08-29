import React ,{  useState , useEffect} from 'react';
import axios from 'axios'


const Page6_EditUser = (props) => {
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [userName, setuserName] = useState("")
    const [sessionTimeOut, setsessionTimeOut] = useState("")
    const [permissions, setpermissions] = useState({
        ViewSubscriptions:"",
        CreateSubscriptions:"",
        DeleteSubscriptions:"",
        UpdateSubscriptions:"",
        ViewMovies:"",
        CreateMovies:"",
        DeleteMovies:"",
        UpdateMovies:""
    })
    


    let updateUser = async(e) => {
        e.preventDefault()
        let currentId = props.data.id
        let updatedInfo = {
            FirstName: firstName.value,
            LastName: lastName.value,
            UserName: userName.value,
            SessionTimeOut: sessionTimeOut.value,
            Permissions: permissions.checked
        }
        await axios.put(`http://localhost:8000/Users/${currentId}`, updatedInfo)
        props.history.push('/MainPage')
    }


    let cancelUser = (props) => {
        props.history.push('/MainPage')
    }



    return (
        <div>
            <br/>
            <form>
                First Name: <input type="text" onChange = {e => setfirstName ({firstName:e.target.value})}/><br/>
                Last Name: <input type="text" onChange = {e => setlastName ({lastName:e.target.value})}/><br/>
                UserName: <input type="text" onChange = {e => setuserName ({userName:e.target.value})}/><br/>
                Session Time Out: <input type="number" onChange = {e => setsessionTimeOut ({sessionTimeOut:e.target.value})}/><br/>
                Permissions:
                <div>
                    View Subscriptions: <input type="checkbox" onChange={e => setpermissions ({...permissions,ViewSubscriptions:e.target.checked})}/><br/>
                    Create Subscriptions: <input type="checkbox" onChange={e => setpermissions ({...permissions,CreateSubscriptions:e.target.checked})}/><br/>
                    Delete Subscriptions: <input type="checkbox" onChange={e => setpermissions ({...permissions,DeleteSubscriptions:e.target.checked})}/><br/>
                    Update Subscriptions: <input type="checkbox" onChange={e => setpermissions ({...permissions,UpdateSubscriptions:e.target.checked})}/><br/>
                    View Movies: <input type="checkbox" onChange={e => setpermissions ({...permissions,ViewMovies:e.target.checked})}/><br/>
                    Create Movies: <input type="checkbox" onChange={e => setpermissions ({...permissions,CreateMovies:e.target.checked})}/><br/>
                    Delete Movies: <input type="checkbox" onChange={e => setpermissions ({...permissions,DeleteMovies:e.target.checked})}/><br/>
                    Update Movies: <input type="checkbox" onChange={e => setpermissions ({...permissions,UpdateMovies:e.target.checked})}/>
                </div>

                <br/>
                <input type="button" value="Update" onClick = {updateUser}/>
                <input type="button" value="Cancel" onClick = {cancelUser}/>
            </form>

        </div>
    )
}

export default Page6_EditUser;