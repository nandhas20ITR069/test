const listmodel = require('../models/purchaselist')


exports.list = async(req,res)=>{
    const newList = new listmodel({
        department: req.body.department,
        productname: req.body.productname,
        quantity: req.body.quantity,
        amount: req.body.amount
    })

    try{
       const saved=  await newList.save();
        res.status(200).json(saved)

    }catch(error){
        res.json(error)
    }

}

exports.display=async(req,res)=>{

    const data = await listmodel.find();
    res.json(data);

}

exports.deleteid=async(req,res)=>{
    await listmodel.findByIdAndDelete({_id:req.params.id})
    res.json("successfully deleted")
}

exports.statuss=async(req,res)=>{
const status = req.body.status
listmodel.findById(req.params.id,(err,user)=>{
    user.status=status
    user.save()

})
res.json({msg:"status Approved"})
}

exports.statusss=async(req,res)=>{
    const statuss = req.body.statuss
    listmodel.findById(req.params.id,(err,user)=>{
        user.statuss=statuss
        user.save()
    
    })
    res.json({msg:"status Approved"})
    }