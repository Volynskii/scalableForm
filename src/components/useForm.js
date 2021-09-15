import {useState} from 'react'

const useForm = (validate) => {

    const [values, setValues] = useState({});
    const [errors,setErrors] = useState({});

    const allRules = {
        required: 'required',
        maxLength: 'maxLength',
        min: 'min',
        pattern: 'pattern'
    };

    const handleChange = (value, label,rules) => {
        
        // change values after function get input value
        setValues({
            ...values,
                [label]: {
                    'name': value,
                    'required': rules.required ? rules.required : false
                }
        });
        delete errors[label];

        // check maximum length
        if(value.split('').length >=rules[allRules.maxLength] ) {
            setErrors(
                {
                ...errors,
                [label]: {'type': allRules.maxLength}
            }
            );
        }

        // check minumum length
        if(value.split('').length < rules[allRules.min] ) {
            setErrors({
                ...errors,
                [label]: {'type': allRules.min}
            });
        }

        // check pattern
        if(!!rules[allRules.pattern] && !rules[allRules.pattern].test(value)) {
            setErrors({
                ...errors,
                [label]: {'type': allRules.pattern}
            });
        }

    };

    const handleCheckRequiredFields = (evt) => {
        evt.preventDefault();
        const unfilledInputs = {};
        for (const [key, value] of Object.entries(values)) {
            if(value['name'] === '' && value['required'] === true ) {
                unfilledInputs[key] = {'type': allRules.required}
            }
        }
        setErrors({...errors, ...unfilledInputs});
        return {...errors, ...unfilledInputs};
    };

    return { handleChange, values,setValues, errors, handleCheckRequiredFields }
};
export default useForm;
