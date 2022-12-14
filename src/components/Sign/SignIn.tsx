import React from 'react';
import { useForm, SubmitHandler} from 'react-hook-form';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';



interface FromInputTypes {
    userLogin: string;
    userPass: number;
}

export const SingIn = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const fromPage = location.state?.['fromPage']
    
    const userPass = 123456
    const userLogin = 'abbbass'

    const {
        register,
        reset,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm <FromInputTypes> ()

    const onSubmit: SubmitHandler <FromInputTypes> = (data) => {
        reset()
        navigate(fromPage)
    }


    return (
        <div className="form-sign">
            <h1>SignIn Page</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    type="button"
                    className="sign-back"
                    value="Назад"
                    onClick={() => navigate(fromPage)}
                />
                <fieldset className="form-sign__filedset">
                <label>
                <span className="fontawesome-user"></span>
                    <input 
                        {...register('userLogin', {
                            required:'Поле обязательно к заполнению',
                            validate: value => value === userLogin
                        })}
                        className="login"
                        placeholder='Логин'
                    /> 
                    
                    <div className="error">
                        {errors?.userLogin && <p>{'Неверный логин'}</p>}
                    </div>
                </label>
                
                <label>
                <span className="fontawesome-lock"></span>
                    <input 
                        type='password'
                        placeholder='Пароль'
                        {...register('userPass', {
                            required:'Поле обязательно к заполнению',
                            validate: value => value === userPass,
                        })}
                        className="password"
                    /> 
                    <div className="error">
                        {errors?.userPass && <p>{'Неверный пароль'}</p>}
                    </div>
                </label>
                <input 
                type="submit"
                value="Войти"
                />
                </fieldset>
               
            </form>
            <p className="form-bottom">Нет аккаунта? &nbsp;&nbsp;
            <NavLink to='/signUp' state={{fromPage:fromPage}}>Регистрация<span className="fontawesome-arrow-right"></span></NavLink></p>
        </div>
    )
}