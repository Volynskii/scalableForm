import React, {useEffect} from 'react';

const TextField = ({ label, register, rules, placeholder, errors, name, type,setValues }) => {
// TODO put usefull props to customhookstate
    // put usefull props to customhook state
    useEffect(()=>{
        setValues(prevState => {
            return {
                ...prevState,
                [label]: {'name': '',
                'required': rules.required ? rules.required: false
                }
            };
        });
    },[setValues,label,rules.required]);
    return (
        <div>
            <p className="text-gray-500 text-sm text-left">{name}</p>
            <input placeholder={placeholder} type={type} className="w-full border-indigo-500 mb-2 p-2 border rounded"
                  onChange={(e) => register(e.target.value,label, {...rules})}
            />
            {errors[label] && errors[label].type === 'required' && <p className="mb-3 text-red-500 text-left">{name} is required</p>}
            {errors[label] &&errors[label].type === 'maxLength' && <p className="mb-3 text-red-500 text-left">{name} should be have maximum of {rules.maxLength} characters</p>}
            {errors[label] && errors[label].type === 'min' && <p className="mb-3 text-red-500 text-left">{name} should be contain atleast {rules.min} characters</p>}
            {errors[label] && errors[label].type === 'pattern' && <p className="mb-3 text-red-500 text-left">{name} is invalid</p>}
        </div>
    );
};
export default TextField;
