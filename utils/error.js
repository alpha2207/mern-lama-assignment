export const errorHandler=(status,message)=>{
    let err=new Error();
    err.status=status||500;
    err.message=message||"Something went Wrong";
    return err;
}