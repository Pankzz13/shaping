
import { useForm, SubmitHandler } from "react-hook-form";
import { useActions } from "../hooks/use-actions";
import { Inputs } from "../types/loginFormAuthType";
import { useTypedSelector } from "../hooks/use-typed-selector";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



export default function App() {

  const navigate = useNavigate();


  const { loginAction } = useActions();

  const shows = useTypedSelector(({ user }) => user);


  useEffect(() => {
    console.log(shows)
  }, [shows])



  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (user) => {
    loginAction(user);
    navigate("/")
  }

  //   console.log(watch("example")) // watch input value by passing the name of it

  //  Button Css Not SET IN LOGIN PAGE


  return (

    <div className="login-area">
      <div className="container">
        <div className="login-box ptb--100">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="login-form-head">
              <h4>Sign In</h4>
            </div>
            <div className="login-form-body">
              <div className="form-gp">
                <input type="text" id="exampleInputEmail1" placeholder="Enter Your Email" {...register("username", { required: true })} />
                {errors.username && <span>This field is required</span>}
              </div>
              <div className="form-gp">
                <input type="password" id="exampleInputPassword1" placeholder="Enter Your Password" {...register("password", { required: true })} />
                {errors.password && <span>This field is required</span>}
              </div>
            </div>

            <div className="submit-btn-area">
              <button style={{ border: '2px solid blue', padding: '10px', borderRadius: '25px' }}
              >Submit </button>
              {/* <i className="ti-arrow-right"></i> */}
              {/* <span className="text-danger" style={{fontSize:'large'}}></span> */}
            </div>

            {/* <input type="submit" /> */}
          </form>
        </div>
      </div>
    </div>

  );
}