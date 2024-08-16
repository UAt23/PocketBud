// CustomInput.tsx
import React, {useState, useRef} from 'react';
import {
  TextInput,
  View,
  Text,
  TextInputProps,
  KeyboardTypeOptions,
} from 'react-native';
import styles from './styles';
import {Controller} from 'react-hook-form';

interface CustomInputProps extends TextInputProps {
  label?: string;
  errorMessage?: string;
  keyboard?: KeyboardTypeOptions;
  control: any;
  name: string;
  rules: any;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  errorMessage,
  placeholder,
  keyboard,
  control,
  name,
  rules,
  ...props
}) => {
  // const [textValue, setTextValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  // const textChange = (newText: string) => setTextValue(newText);
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, onBlur, value}}) => (
        <View style={styles.inputContainer}>
          <Text style={styles.labelText}>{label}</Text>
          <View style={styles.inputWrapper}>
            <View style={{flex: 1}}>
              <TextInput
                ref={inputRef}
                style={[styles.inputField, isFocused && styles.inputActive]}
                onFocus={() => {
                  handleFocus();
                  onBlur(); // Handle onBlur from React Hook Form
                }}
                onBlur={handleBlur}
                onChangeText={onChange} // Bind onChange from React Hook Form
                value={value} // Bind value from React Hook Form
                {...props}
                keyboardType={keyboard ? keyboard : 'default'}
              />
              {!isFocused && !value && (
                <Text style={styles.placeholderText}>{placeholder}</Text>
              )}
            </View>
          </View>
          {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
        </View>
      )}
    />
  );
};

export default CustomInput;
