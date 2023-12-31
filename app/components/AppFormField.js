import React from 'react'
import AppTextInput from './AppTextInput'
import ErrorMsg from './ErrorMsg'
import { useFormikContext } from 'formik'

const AppFormField = ({name, ...otherProps}) => {

const {setFieldTouched, handleChange, errors, touched} = useFormikContext()


  return (
    <>
        <AppTextInput 
            onBlur={()=> setFieldTouched(name)}
            onChangeText={handleChange(name)}
            {...otherProps}
        />
        <ErrorMsg error={errors[name]} visible={touched[name]}/>
    </>
  )
}

export default AppFormField