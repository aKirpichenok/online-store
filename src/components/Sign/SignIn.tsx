import React from 'react';
import {useForm} from 'react-hook-form';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';

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
    } = useForm ()

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
        reset()
        navigate(fromPage)
    }


    return (
        <div className="form-sign">
            <h1>SignIn Page</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="form-sign__filedset">
                <label>
                <span className="fontawesome-user"></span>
                    <input 
                        {...register('userLogin', {
                            required:'Поле обязательно к заполнению',
                            validate: value => value === userLogin
                        })}
                        className="login"
                    /> 
                    
                    <div className="error">
                        {errors?.userLogin && <p>{'Неверный логин'}</p>}
                        {console.log(errors)}
                    </div>
                </label>
                
                <label>
                <span className="fontawesome-lock"></span>
                    <input 
                        type='password'
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
            <NavLink to='/signUp'>Регистрация<span className="fontawesome-arrow-right"></span></NavLink></p>
        </div>
    )
}