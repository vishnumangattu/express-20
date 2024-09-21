async function getData(){
    let res=await fetch("http://localhost:3000/api/getdonors");
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
                        <td> <a href="./pages/editDoner.html?id=${donor._id}"><button class="edit-btn" >EDIT</button></a>
                            <button class="delete-btn" onclick="deleteDonor('${donor._id}')">DELETE</button></td>
                    </tr>`
        
    })
    document.getElementById("details").innerHTML=str
    }
}

getData()



async function deleteDonor(id){
    console.log(id);
    
    const res=await fetch(`http://localhost:3000/api/deletedonor/${id}`,{
        method:"DELETE",
        headers:{"Content-Type":"application/json"}
    }).then((res)=>{
        console.log(res);
        if(res.status==201){
            alert("Deleted successfully")
            window.location.href="../index.html"
        }
        else{
            alert("Error")
            window.location.href="../index.html"
        }
        
    }).catch((error)=>{
        console.log(error);
        
    })

}


