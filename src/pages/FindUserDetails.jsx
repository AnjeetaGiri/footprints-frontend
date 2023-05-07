import React from "react";
import "./FindUserDetails.css";
// import { Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import styles from "../myStyles.module.css";

// const FindUserDetails = () => {
//   const Popup = () => {};
//   const [user, setUser] = useState({
//     userID: "",
//   });
//   const handleInputs = (e) => {
//     console.log(e);
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };
//   return (
//     <div className="user-detail">
//       <h2>Find User Details</h2>
//       {/* ------Previous code:------ */}
//       <label>
//         <input
//           className="input-text"
//           type="text"
//           name="userID"
//           value={user.userID}
//           onChange={handleInputs}
//           placeholder="Enter userId"
//         />
//         <br />
//       </label>
//       <br />
//       <Button className={styles.button} onClick={Popup}>
//         PROCEED
//       </Button>
//       {/* <div className="btn">
//       <button class="btn" type="button" onClick={Popup}>Submit</button>
//       </div> */}
//     </div>
//   );
// };

// export default FindUserDetails;

import axios from "axios";



// const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
// const baseURL = "https://footprints-api.onrender.com/students";

// export default function FindUserDetails() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(baseURL).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   if (!post) return null;

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//     </div>
//   );
// }


export default function FindUserDetails() {
  // const[data,setData]=useState([]);
  var myHeaders = new Headers();
myHeaders.append('Content-Type','application/json');
myHeaders.append('Access-Control-Allow-Origin','*');
myHeaders.append('Access-Control-Allow-Origin','http://localhost:3000');

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://footprints-api.onrender.com/students/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  // const [post, setPost] = React.useState(null);
  // React.useEffect(()=>{
  //   axios.get("https://footprints-api.onrender.com/students/")
  //   .then((response)=>{
  //     setPost(response.data);
  //     // console.log(response);
  //   })  
  // },[]);
  return (
    <div>
      Axios Demoss
    </div>
  )
}
