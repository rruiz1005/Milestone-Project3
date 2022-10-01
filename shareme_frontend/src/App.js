import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Login from './components/Login';
import Home from './container/Home';

const App = () => {
    return (
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="/*" element={<Home />} />
            </Routes>
        </GoogleOAuthProvider>
    )
}

export default App



// import React from 'react'
// import { Routes, Route, useNavigate } from 'react-router-dom';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import { useEffect, useState } from 'react'
// import jwt_decode from 'jwt-decode'


// import Login from './components/Login';
// import Home from './container/Home';

// const App = () => {
//     const [user, setUser] = useState({})

//     const handleCallbackResponse = (response) => {
//         console.log('Encoded JWT ID token:' + response.credential);
//         var userObject = jwt_decode(response.credential);
//         console.log(userObject)
//     }

//     useEffect(() => {
//         GoogleOAuthProvider.accounts.id.initialize({
//             client_id: '430486707210-raor6gkrc2913k9hos9appaugmbmoclp.apps.googleusercontent.com',
//             callback: handleCallbackResponse
//         })
//     })

//     return (
//         <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
//             <Routes>
//                 <Route path="login" element={<Login />} />
//                 <Route path="/*" element={<Home />} />
//             </Routes>
//         </GoogleOAuthProvider>
//     )
// }

// export default App