import { useState } from "react";
import { } from "react-bootstrap";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import "../../css/Registration.css"
import "../../css/Login1.css";

const Login1 = () => {
        const {
            register,
            handleSubmit,
            formState: { errors },
            reset,
        } = useForm();

        const onSubmit = (data) => {
            swal("Login Successfully!", "clicked the button!", "success");
            console.log(data);
            reset();
        };

        const [state, setState] = useState(false);

        const toggleBtn =() =>{
            setState(prevState => !prevState);
        }

    return (
        <>
            <div className="container">
                <div className="forms">
                    <div className="form">
                        <span className="title">Login</span>
                        <form onSubmit={handleSubmit(onSubmit)} action="" name="loginForm" className="form1">
                            <div className="input-field">
                                <input
                                    type=""
                                    name="email"
                                    id=""
                                    placeholder="Enter your email" 
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid Eemail address"
                                        }
                                    })} />
                                <i className="fa-solid fa-envelope icon"></i>
                            </div>
                            {errors.email && (<div className="err1">{errors.email.message}</div>)}

                            <div className="input-field">
                                <input
                                    type={state ? "text" : "password"}
                                    name="password"
                                    className="password"
                                    placeholder="Enter password" 
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 5,
                                            message: "Minimum 5 character required",
                                        },
                                        maxLength: {
                                            value: 16,
                                            message: "Maximum 16 character Required",
                                        },
                                        pattern: {
                                            value: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                                            message: "eight character,one uppercase,one special char & Number"
                                        }
                                    })}
                                />
                                <i className="fa-solid fa-lock icon"></i>
                                <i className={`fa-solid ${state ? "fa-eye" : "fa-eye-slash"} showhidepw`} onClick={toggleBtn}></i>
                            </div>
                            {errors.password && (<div className="err2">{errors.password.message}</div>)}

                            <div className="checkbox-text">
                                <div className="checkbox-content">
                                    <input type="checkbox" name="" id="logcheck" />
                                    <label for="locheck" className="text">Remember me</label>
                                </div>

                                <a href="../Registration/Registration1.js" className="text">Forgot password?</a>
                            </div>

                            <div className="input-field button">
                                <input type="submit" value="Login" />
                            </div>
                        </form>

                        <div className="login-signin">
                            <span className="text">Not a member ??
                                <a href="../Registration" className="text sign-link">Sing up</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login1;
