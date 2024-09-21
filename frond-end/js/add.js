document.getElementById("forms").addEventListener("submit",async(e)=>{
    e.preventDefault();
    let name=document.getElementById("name").value
    let age=document.getElementById("age").value
    let dob=document.getElementById("dob").value
    let phone=document.getElementById("phone").value
    let place=document.getElementById("place").value
    let bgroup=document.getElementById("Bgroup").value
    console.log(name,age,dob,phone,place,bgroup);
    

    await fetch("http://localhost:3000/api/adddonor",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name,age,dob,phone,place,bgroup}),
    }).then((res)=>{
        console.log(res);
        
        if(res.status==201){
            alert("Success")
            window.location.href="../index.html"

        }
        else{
            alert("Failed")
        }
    }).catch((error)=>{
        
        console.log(error);
        
    })
    
    
    

})

function validatePhone(phone){
    // console.log(phone);
    let regEx=/^[6-9]\d{2}\d{3}\d{4}/
    console.log(regEx.test(phone));
    
    if ((regEx.test(phone))){
         document.getElementById("phone").style.borderColor="green"
    }
    else{
        document.getElementById("sphone").textContent="Phone Number Is Invalid"
        document.getElementById("phone").style.borderColor="red"
        document.getElementById("sphone").style.color="red"
        document.getElementById("sphone").style.fontSize=13+"px"
    }
}
function validateAge(age){
    let regEx=/^[2-6][0-9]|[1][8-9]/
    if (!(regEx.test(age))){
        document.getElementById("sage").textContent="Not Eligible"
        document.getElementById("sage").style.color="red"
        document.getElementById("sage").style.fontSize=13+"px"

    }
    else{
        document.getElementById("sage").textContent="Eligible"
         document.getElementById("sage").style.color="green"
        document.getElementById("sage").style.fontSize=13+"px"
    }
}
function validateName(name){
    let regEx=/^[A-Z,a-z]{3,}/
    if (!(regEx.test(name))){
        document.getElementById("sname").textContent="Invalid"
        document.getElementById("sname").style.color="red"
        document.getElementById("sname").style.fontSize=13+"px"
    }
    else{
        document.getElementById("sname").textContent=""


    }

}
function validatePlace(place){
    let regEx=/^[A-Z,a-z]{3,}/
    if (!(regEx.test(place))){
        document.getElementById("splace").textContent="Invalid"
        document.getElementById("splace").style.color="red"
        document.getElementById("splace").style.fontSize=13+"px"

    }
    else{
       document.getElementById("splace").textContent=""

    }
}
function validateDOB(dob){
    let regEx=/^([0][1-9]|[1-2]\d|[3][1-2])-([0][1-9]|[1][0-2])-([1][9]\d{2}|[2][0][1-2][1-4])/
    if (!(regEx.test(dob))){
        document.getElementById("sdob").textContent="Eligible"
        document.getElementById("sdob").style.color="green"
        document.getElementById("sdob").style.fontSize=13+"px"

    }
    else{
        document.getElementById("sdob").textContent="Not eligible"
        document.getElementById("sdob").style.color="red"
        document.getElementById("sdob").style.fontSize=13+"px"
    }
}