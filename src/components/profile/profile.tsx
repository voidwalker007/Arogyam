/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"
import { account } from "../../lib/appwrite"
import { useNavigate, Link} from 'react-router-dom'

export const Profile = () => {
  const navigate = useNavigate();
   
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const getData = account.get(); 
  
    getData.then((response) => {
      if(response != null)
        setUser(response); 
    }, (error) => {
      console.log(error);
      
    })

    return () => {
      
    }
  }, [])
  

  const handleLogout = async() => {
    try {
      await account.deleteSession('current')
      navigate('/')
    } catch (error) {
      console.log(error );
    }
  } 
  

  
  return (
      <>
      {user ? (
        <>
          <div className="min-h-min max-w-7xl mx-auto shadow-md flex justify-between text-right py-3 px-3 mt-2 rounded-md">
            <div>
              <p className="text-xl">Hello {user.name}</p>
            </div>
            <div>
              <button
                className="bg-red-400 text-white p-1 rounded-md"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
          {/* TODO FORM */}
          {/* <TodoForm /> */}
          {/* TODOS BOX */}
          {/* <Todos /> */}
        </>
      ) : (
        <p className="mt-4">
          Please Login To see Profile{" "}
          <Link to="/login">
            <span className="bg-blue-300 p-2 cursor-pointer text-white rounded-md">
              Login
            </span>
          </Link>
        </p>
      )}
    </>
  )
}
