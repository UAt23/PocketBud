// CustomInput.tsx
import React, {useState, useRef} from 'react';
import {TextInput, View, Text, TextInputProps} from 'react-native';
import styles from './styles';

interface CustomInputProps extends TextInputProps {
  label?: string;
  errorMessage?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  errorMessage,
  placeholder,
  value,
  ...props
}) => {
  const [textValue, setTextValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const textChange = (newText: string) => setTextValue(newText);
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.labelText}>{label}</Text>
      <View style={styles.inputWrapper}>
        <View style={{flex: 1}}>
          <TextInput
            ref={inputRef}
            style={[styles.inputField, isFocused && styles.inputActive]}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={newText => textChange(newText)}
            value={textValue}
            {...props}
          />
          {!isFocused && !value && (
            <Text style={styles.placeholderText}>{placeholder}</Text>
          )}
        </View>
      </View>
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};

export default CustomInput;
