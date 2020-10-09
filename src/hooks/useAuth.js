import { useContext } from "react"
import AuthContext from "../auth/context"
import authStorage from '../auth/storage'
import jwtDecode from 'jwt-decode'


export default useAuth = () => {
  const {user, setUser } = useContext(AuthContext)

  const logIn = (authToken) => {
    const user = jwtDecode(authToken);
    setUser(user)
    authStorage.storeToken(authToken)
  }

  const logOut = () => {
    setUser(null);
    authStorage.removeToken()
  }

  return { user, logIn, logOut }
}