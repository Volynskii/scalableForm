import React from 'react';

type formValuesProps = {
    handleChange: () => void,
    errors: ''| any,
    name: string,
    id: string,
    placeholder: string
    }

const InputTextarea: React.FC<formValuesProps> = ({handleChange,
                                                      errors,
                                                      name,
                                                      id,
                                                      placeholder
}) => {
    console.log('errors',errors)

    return (
        <>
            <>
                <textarea
                    name={name}
                    onChange={handleChange}
                    className="form-reviews__textarea"
                    id={id}
                    placeholder={placeholder}/>
                {errors[name] && <p className="error-message">{errors[name]}</p>}
            </>
        </>
    );
};

export default InputTextarea;
