import { useForm } from "react-hook-form";
import { axiosInstance } from "../config/axiosInstance";
import { useDispatch } from "react-redux";
import { addUser } from "../state/authReducer";

export let useAuth = () =>{
    let dispatch = useDispatch();
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onLogin = async (data) => {
    // console.log("Login Data:", data);
    try {
        let res = await axiosInstance.post('/api/auth/login' , data)
        console.log('res from login:' , res);
        dispatch(addUser(res.data.user));
        
    } catch (error) {
        console.log("error in login:", error);
        
    }
  };

   const password = watch("password");

  const onRegister = async (data) => {
    // console.log("Registration Data:", data);
     try {
        let res = await axiosInstance.post('/api/auth/register' , data)
        console.log('res from Register:' , res);
        
    } catch (error) {
        console.log("error in register:", error);
        
    }
  };

  return{
    register,
    handleSubmit,
    errors,
    onLogin,
    onRegister,
    password
  }
}