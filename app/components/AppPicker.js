import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'

const AppPicker = () => {

    const [selectedLanguage, setSelectedLanguage] = useState()

  return (
    <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
    >
        <Picker.Item label="Java" value="Java" />
        <Picker.Item label="JavaScript" value="javascript" />
        <Picker.Item label="HTML" value="HTML" />
        <Picker.Item label="CSS" value="CSS" />
        <Picker.Item label="C#" value="C#" />
        <Picker.Item label="React" value="React" />
        <Picker.Item label="Angular" value="Angular" />
    </Picker>
  )
}

export default AppPicker