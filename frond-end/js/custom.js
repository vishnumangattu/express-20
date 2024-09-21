async function getData(){
    let res=await fetch("http://localhost:3000/api/getdonor");
    if(res.status==200){
        const donors=await res.json();
        
    str=``;
    donors.map((donor)=>{
        str+=`
        <tr>
                        <td>${donor.name}</td>
                         <td>${donor.age}</td>
                         <td>${donor.dob}</td>
                        <td>${donor.phone}</td>
                        <td>${donor.bgroup}</td>
                        <td>${donor.place}</td>
                        <td> <a href="./pages/editDoner.html"><button class="edit-btn" >EDIT</button></a>
                            <button class="delete-btn" >DELETE</button></td>
                    </tr>`
        
    })
    document.getElementById("details").innerHTML=str
    }
}

getData()



// async function handleDelete(id){
    

//     const res=await fetch("http://localhost:3000/delete",{
//         method:"delete",
//         headers:{"Content-Type":"text/plain"},
//         body:id
//     })

//     const data=await res.text();
//     res.status==200?alert(data):alert(data);
//     getData();
   
// }



