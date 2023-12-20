import React, { useState } from 'react'
import './App.css'

const App = () => {

    const[open,setOpen]=useState(false)
    const[user,setUser]=useState({name:"",email:"",Address:""})
    const[userData,setUserData]=useState([])
    const[update,setUpdate]=useState(null)        
  function openModal(){
    setOpen(true)
  }

  function closeModel(){
    setOpen(false)
  }

  function adduser(){
    setUserData([...userData,user])
    closeModel()
  }

function handleDelete(index){
    const del= userData.filter((v,i)=>i!==index)
    setUserData(del)
}

function updateData(index){
    openModal(true)
    setUser({...userData[index]})
    setUpdate(index)
}
function updated(){
    const updatedRecorde = [...userData]
    updatedRecorde[update]={...user}
    setUserData(updatedRecorde)
    setUser({'name':"",'email':"",'Address':""})
    setUpdate(null)
    closeModel()
}




  return (
    <div className='main'>
      <section className='sec'>
        <h1>Crud App</h1>
        <button className='btn'onClick={openModal}>Add User</button>
        </section>
        <hr />
        <center>
        <table border={1} rules='all'>
            <thead>
                <tr>
                    <td><b>Name</b></td>
                    <td><b>Email</b></td>
                    <td><b>Address</b></td>
                    <td><b>Action</b></td>
                </tr>
            </thead>
            
            
            <tbody>
               {userData.length>0 && userData.map((user,index)=>{
                return(
                    <tr key={user.name}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.Address}</td>
                        <td>
                            <button className='edit' onClick={()=>updateData(index)}>Edit</button>     
                            <button className='del' onClick={()=>handleDelete(index)}>Delete</button>
                        </td>

                    </tr>
                )
               })}
             </tbody>


            <tfoot>
                <tr>
                    <td colspan={4}>@CopyRightSumanRana</td>
                </tr>
            </tfoot>
        </table>
        </center>

         {open&&(
            <form className='form'>
                <input className='inp1' type="text" placeholder='Enter Your Name' name='name' onChange={(e)=>setUser({...user,name:e.target.value})}/>
                <br /><br />
                <input className='inp2' type="email" placeholder='Enter Your Email' name='email' onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})}/>
                <br /><br />
                <input className='inp3' type="Address" placeholder='Enter Your Place' name='Address' onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})}/>
                <br /><br />
                {update==null ? (<button className='btn1' onClick={adduser}>Submit</button>):(<button onClick={updated}>Update</button>)}
            </form>
         )}

       </div>
  )
}

export default App