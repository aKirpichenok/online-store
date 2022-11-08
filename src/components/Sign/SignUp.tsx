import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {useForm, SubmitHandler } from 'react-hook-form';

interface FormInputTypes {
    mail: string;
    password: number;
    repeatPassword: number;
}



export const SignUp = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const fromPage = location.state?.['fromPage']
    

    const {
        register,
        reset,
        handleSubmit,
        watch,
        formState: {
            errors,
        }
    } = useForm <FormInputTypes> ({
        mode:'onChange'
    })

    const watchAllFileds = watch()

    const onSubmit: SubmitHandler <FormInputTypes> = (data) => {
        reset()
        navigate('/')
    }
    return (
        <div className="login_page">
        <div className="form-sign">
            <h1>SignUp Page</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="form-sign__fieldset">
                <input 
                    type="button"
                    className="sign-back"
                    value="Назад"
                    onClick={() => navigate(fromPage)}
                />
                    <label>
                        <span className="fontawesome-user"></span>
                        <input 
                            {...register('mail', {
                                required:'Неверный mail',
                                pattern: /^[\w-.]+@[\w-]+\.[a-z]{2,4}$/i,
                            })}
                            placeholder="qwe@mail.ru"
                            className="login"
                        /> 
                    
                        <div className="error">
                            {errors?.mail && <p>{errors?.mail?.message || 'Неверный mail'}</p>}
                        </div>
                    </label>

                    <label>
                        <span className="fontawesome-lock"></span>
                        <input
                            {...register('password', {
                                required:'Слишком ненадёжный пароль',
                                pattern: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/g
                            })}
                            type="password"
                            placeholder="Введите пароль"
                            className="password"
                        />

                        <div className="errors">
                            {errors?.password && <p>{errors?.password?.message || 'Слишком ненадёжный пароль'}</p>}
                        </div>
                    </label>
                    <label>
                        <span className="fontawesome-lock"></span>
                        <input 
                            {...register('repeatPassword', {
                                required: true,
                                validate: value => value === watchAllFileds.password
                            })}
                            type='password'
                            placeholder="Повторите пароль"
                            className="password"
                        />

                        <div className="errors">
                            {errors?.repeatPassword && <p>{errors?.repeatPassword?.message || 'Пароль не совпадает'}</p>}
                        </div>
                    </label>
                    <input 
                        type="submit"
                        value="Регистрация"
                    />
                </fieldset>
            </form>
        </div>
        </div>
    )
}