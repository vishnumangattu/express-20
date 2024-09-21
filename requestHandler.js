import donorSchema from "./donor.model.js"
export async function addDonors(req,res){

    try {
        console.log(req.body);
        const{name,age,dob,phone,place,bgroup}=req.body
        if(!(name&&age&&dob&&phone&&place&&bgroup)){
            return res.status(404).send({msg:"Fields Are Empty"})
        }
        let exist=await donorSchema.findOne({phone})
        if(!exist){
        donorSchema.create({name,age,dob,phone,place,bgroup}).then((data)=>{
            res.status(201).send({msg:data})            
        }).catch((error)=>{
            res.status(404).send({msg:error})            

        })
    }
    else{
        res.status(404).send({msg:"Phone Number Already Exist"})    

    }   
    } catch (error) {
        res.status(404).send({msg:error})            

    }
    
}
export async function getDonors(req,res){
    try{
        const donors=await donorSchema.find();
        res.status(200).send(donors);
    }
    catch{
        res.status(404).send({msg:error})
    }
}
export async function getDonor(req,res) {
    try {
        const{id}=req.params;
        const data=await donorSchema.findOne({_id:id});
        console.log(data);
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send(error)
    }
    
}
export async function editDonor(req,res){
    const {_id}=req.params;
    const {...donor}=req.body;
    const data=await donorSchema.updateOne({_id},{$set:{...donor}}).then(()=>{
    res.status(201).send("succesfully updated");
}).catch((error)=>{
    res.status(404).send(error);
})
}
export async function deleteDonor(req,res) {
    const {_id}=req.params;
    const data=await donorSchema.deleteOne({_id});
    res.status(201).send("deleted successfully");
}