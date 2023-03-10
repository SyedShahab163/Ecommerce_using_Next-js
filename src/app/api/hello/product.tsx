import iniDB from "@/helper/initDB";


iniDB();


export default (res)=>{
    res.json({message:"hello world"})
};