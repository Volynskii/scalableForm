import React, {useEffect} from 'react';

const SelectInput = React.forwardRef(({
                                          valueName,
                                          defaultValue,
                                          register,
                                          name,
                                          label,
                                          options,
                                          setValues,
                                          errors,
                                          rules
                                      }, ref) => {

    // put usefull props to customhook state
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
    }, [valueName, setValues, label, rules.required]);
    return (
        <div>
            <p className="text-gray-500 text-sm text-left">{label}</p>
            <select
                defaultValue={defaultValue}
                name={name}
                ref={ref}
                className="w-full border-indigo-500 mb-2 p-2 border rounded"
                onChange={(e) => register(e.target.value, valueName, {...rules})}
            >
                {options && options.map((item, key) => (
                    <option disabled={item === defaultValue} key={key} value={item}>{item}</option>
                ))}
            </select>
            {errors[valueName] && errors[valueName].type === 'required' &&
            <p className="mb-3 text-red-500 text-left">{valueName} is required</p>}
        </div>
    )
});
export default SelectInput;
