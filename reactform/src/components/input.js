import '../App.css'
const Input=({id,lable,name,type,placeholder,register,errorMessage})=>{
    return(
        <div className="input-grup">
         <lable htmlFor={id}>
         {lable}
          </lable>

          <input id={id} type={type} name={name} placeholder={placeholder} {...register}/>
          {errorMessage && <span className="error-mesg">{errorMessage}</span>}
        </div>
    )
}
export default Input;