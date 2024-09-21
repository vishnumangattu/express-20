const url=window.location.href
const urlParams= new URLSearchParams(url.split("?")[1]);
const id=urlParams.get("id");

async function getDonor(){
    const res=await fetch(`http://localhost:3000/api/getdonor/${id}`)
    const donor=await res.json()
    console.log(donor);

    document.getElementById("frm").innerHTML=`
    
        <tr><td><label for="name">Name</label> </td>
        <td class="input" > <input type="text" name="name" id="name" value="${donor.name}"></td> </tr>
        <tr><td><label for="age">Age</label> </td>
        <td class="input" ><input type="number" name="age" id="age" min="18" max="50" value="${donor.age}"></td></tr>
        <tr><td><label for="dob">Date Of Birth</label></td>
        <td class="input" ><input type="date" name="dob" id="dob" value="${donor.dob}"></td></tr>
        <tr><td><label for="phone">Phone</label></td>
        <td class="input"><input type="number" name="phone" id="phone" value="${donor.phone}"></td></tr>
        <tr><td><label for="Bgroup">Blood Group</label></td><td class="input">
        <select name="Bgroup" id="Bgroup">
                <option value="${donor.bgroup}">${donor.bgroup}</option>
                <option value="O-">O-ve</option>
                <option value="A+">A+ve</option>
                <option value="A-">A-ve</option>
                <option value="B+">B+ve</option>
                <option value="B-">B-ve</option>
                <option value="AB+">AB+ve</option>
                <option value="AB-">AB-ve</option>
                </select>
</td></tr>
        <tr><td><label for="place">Address</label></td>
        <td class="input" ><input type="text" name="place" id="place" value="${donor.place}"></td></tr>              
        <tr><td><input type="submit" value=UPDATE class="button"></td></tr>
 `
    
}



document.getElementById("bhh").addEventListener('submit',async(e)=>{
        e.preventDefault();
        let name=document.getElementById("name").value
    let age=document.getElementById("age").value
    let dob=document.getElementById("dob").value
    let phone=document.getElementById("phone").value
    let place=document.getElementById("place").value
    let bgroup=document.getElementById("Bgroup").value
    console.log(name,age,dob,phone,place,bgroup);
    
        const res =await fetch(`http://localhost:3000/api/editdonor/${id}`,{
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({name,age,dob,phone,place,bgroup})
            })
            if (res.status==201){
                alert("Updated Succesfully")
                window.location.href="../index.html"
                const data=await res.json()
                alert(data.data)
            }
        
        })
        getDonor();


        