import React from 'react';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

interface InputOTPPatternProps {
  value: string;
  onChange: (value: string) => void;
}

export function InputOTPPattern({ value, onChange }: InputOTPPatternProps): React.ReactElement {
  return (
    <InputOTP 
      maxLength={6} 
      pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
      value={value}
      onChange={onChange}
    >
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
}