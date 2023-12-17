import React, {useState} from 'react';

export const UserOption = React.createContext();

export const UserConsumer = () => {
  return React.useContext(UserOption);
};

export const UserProvider = ({children}) => {
  const [option, setOption] = useState('0');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState(null)
  const [token, setToken] = useState(null)
  return (
    <UserOption.Provider
      value={{
        option,
        setOption,
        username,
        setUsername,
        email,
        setEmail,
        name,
        setName,
        id,
        setId,
        token,
        setToken
      }}>
      {children}
    </UserOption.Provider>
  );
};

export default UserProvider;
