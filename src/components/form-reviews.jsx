import React from "react";
import './form-reviews.scss';
import useForm from "./useForm";
import TextField from "./TextField";
import SelectInput from "./SelectField";
import InputRadio from "./input-radio";



export const FormReviews = () => {

    const { handleChange, values, setValues, handleCheckRequiredFields, errors} = useForm();

    const onSubmit =  (evt) => {
        // check if errors exist
        const errorsAmount = Object.keys(handleCheckRequiredFields(evt)).length;
        console.log('errorsAmount',errorsAmount);
        console.log('values', values);
        if (errorsAmount === 0) {
console.log('no errors');
console.log('VALUES ARE', values);
            evt.currentTarget.reset();
        }
    };
    return (
        <>

            <div  className="popup">
                <form className="form-popup"  noValidate={true}
                      onSubmit={(evt) => onSubmit(evt)}>
                    <section className="form-reviews__personal-data">
                        <div className="form-reviews__personal-data__wrapper">
                            <ul className="form-reviews__personal-data__list">
                                <TextField
                                    label="firstName"
                                    placeholder="John"
                                    register={handleChange}
                                    name="First name"
                                    errors={errors}
                                    rules={{ maxLength: 20, required: true, min: 3 }}
                                    setValues={setValues}
                                />
                                <TextField
                                    label="lastName"
                                    placeholder="Johnson"
                                    register={handleChange}
                                    name="Last name"
                                    errors={errors}
                                    rules={{ maxLength: 20, required: true, min: 3 }}
                                    setValues={setValues}
                                />
                                <TextField
                                    label="email"
                                    placeholder="Email"
                                    register={handleChange}
                                    name="Email"
                                    errors={errors}
                                    rules={{ required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ }}
                                    setValues={setValues}
                                />
                                <TextField
                                    label="tel"
                                    placeholder="Tel"
                                    register={handleChange}
                                    name="Tel"
                                    errors={errors}
                                    rules={{ required: true, pattern: /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/ }}
                                    setValues={setValues}
                                />
                                <SelectInput
                                    valueName={'Role'}
                                    defaultValue={''}
                                    register={handleChange}
                                    label="Select role"
                                    errors={errors}
                                    rules={{ required: true }}
                                    options={['Male', 'Femail', '']}
                                    setValues={setValues}
                                />
                                <InputRadio
                                    errors={errors}
                                    valueName={'Rating'}
                                    register={handleChange}
                                    setValues={setValues}
                                    rules={{ required: true }}
                                />
                                <div className="form-reviews__button-container">
                                    <input type="submit" className="form-reviews__button-container__button"
                                           value="Оставить отзыв"/>
                                    <strong className="form-reviews__button-container__span">*Поля обязательны<br/> для
                                        заполнения</strong>
                                </div>
                            </ul>
                        </div>
                    </section>
                </form>
            </div>
        </>
    );
};
