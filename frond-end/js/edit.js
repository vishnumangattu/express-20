// async function getDonors(){

//     const url=window.location.href;
//     const urlParams=new URLSearchParams(url.split("?")[1]);
//     const id=urlParams.get("id");
//     const res=await fetch(`http//localhost:3000/api/getdonors/${id}`)
//     const donors=await res.json()
//     console.log(donors);

//     document.getElementById("frm").innerHTML=`
    
//         <tr>
//                     <td>
//                             <label for="name">Name</label>
//                     </td>
//                     <td class="input" >
//                             <input type="text" name="name" id="name" value="${donors.name}">
//                     </td>
//             </tr>
//             <tr>
//                 <td>
//                         <label for="age">Age</label>
//                 </td>
//                 <td class="input" >
//                         <input type="number" name="age" id="age" min="18" max="50" value="${donors.age}">
//                 </td>
//         </tr>
//          <tr>
//             <td>
//                     <label for="dob">Date Of Birth</label>
//             </td>
//             <td class="input" >
//                     <input type="date" name="dob" id="dob" value="${donors.dob}">
//             </td>
//         </tr>
//             <tr>
//                     <td>
//                         <label for="phone">Phone</label>
//                     </td>
//                     <td class="input">
//                         <input type="number" name="phone" id="phone" value="${donors.phone}">
//                     </td>
//             </tr>
//             <tr>
//                     <td>
//                             <label for="Bgroup">Blood Group</label>
//                     </td>
//                     <td class="input">
//                         <select name="Bgroup" id="Bgroup">
//                             <option value="${donors.Bgroup}">${donors.Bgroup}</option>
//                             <option value="O-">O-ve</option>
//                             <option value="A+">A+ve</option>
//                             <option value="A-">A-ve</option>
//                             <option value="B+">B+ve</option>
//                             <option value="B-">B-ve</option>
//                             <option value="AB+">AB+ve</option>
//                             <option value="AB-">AB-ve</option>
//                         </select>
//                     </td>
//             </tr>
//             <tr>
//                 <td>
//                         <label for="place">Address</label>
//                 </td>
//                 <td class="input" >
//                         <input type="text" name="place" id="place">
//                 </td>
//             </tr>              
//                 <tr>
//                     <td>
//                      <input type="submit" value="Add" class="button">

//                     </td>                
//                 </tr>
                
//     `
    
// }