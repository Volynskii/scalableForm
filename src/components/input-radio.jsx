import React, {useEffect, useState} from 'react';

const InputRadio = ({
                        errors,
                        valueName,
                        register,
                        setValues,
                        rules
                    }) => {

    useEffect(() => {
        setValues(prevState => {
            return {
                ...prevState,
                [valueName]: {
                    'name': '',
                    'required': rules.required ? rules.required : false
                }
            };
        });
    }, [setValues, valueName, rules.required]);
    const [rating, setRating] = useState(0);
    return (
        <>
             <span className="star-cb-group">
                                    {[5, 4, 3, 2, 1].map((item) => {
                                        return (
                                            <React.Fragment key={item}>
                                                <input
                                                    className="rating__input"
                                                    id={`star-${item}`}
                                                    type={'radio'}
                                                    value={item}
                                                    checked={item === rating}
                                                    onChange={(e) => {
                                                        register(e.target.value, valueName, {...rules})
                                                        setRating(item)
                                                    }}/>
                                                <label
                                                    htmlFor={`star-${item}`}>
                                                    {`Rating ${item}`}
                                                </label>
                                            </React.Fragment>
                                        );
                                    })}
                                </span>
            {errors[valueName] && errors[valueName].type === 'required' &&
            <p className="mb-3 text-red-500 text-left">{valueName} is required</p>}
        </>
    );
};

export default InputRadio;
