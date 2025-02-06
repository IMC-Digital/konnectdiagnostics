// import axios from "axios";
// import { useEffect } from "react";
// import { Outlet, useNavigate } from "react-router-dom";
// import BASE_URL from '../api/index';

// const PrivateRoutes = ({ auth, setAuth, setUserId }) => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const userToken = localStorage.getItem('token');

//     // If doctorToken is not found in localStorage, navigate to login
//     if (!userToken) {
//       navigate('/login');
//       return;
//     }

//     axios.get(`${BASE_URL}/user`, {
//       headers: {
//         Authorization: `Bearer ${userToken}`
//       }
//     }).then((res) => {
//       console.log(res.data)
//       if (res.data.Status === "ok") {
//         setAuth(true);
//         setUserId(res.data.userId);
//       } else {
//         setAuth(false);
//         navigate('/login');
//       }
//     })
//       .catch((err) => {
//         console.log("e1 catched!");
//       })
//   }, [setAuth, setUserId, navigate]);

//   return (<Outlet />)
// }

// export default PrivateRoutes;


import axios from "axios";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import BASE_URL from '../api/index';

const PrivateRoutes = ({ auth, setAuth, setUserId }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Function to extract the token from cookies
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
      return null;
    };

    const userToken = getCookie('token'); // Fetch the 'token' from cookies

    // If token is not found in cookies, navigate to login
    if (!userToken) {
      navigate('/login');
      return;
    }

    axios
      .get(`${BASE_URL}/user`, {
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.Status === "ok") {
          setAuth(true);
          setUserId(res.data.userId);
        } else {
          setAuth(false);
          navigate('/login');
        }
      })
      .catch((err) => {
        console.error("Error while verifying token:", err);
        setAuth(false);
        navigate('/login');
      });
  }, [setAuth, setUserId, navigate]);

  return <Outlet />;
};

export default PrivateRoutes;
