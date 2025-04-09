
import React, { useState } from 'react';
import { 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";

interface CustomFormFieldProps {
  control: any;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}

const CustomFormField: React.FC<CustomFormFieldProps> = ({ 
  control, 
  name, 
  label, 
  placeholder = "", 
  type = "text",
  required = false
}) => {
  const [showPassword, setShowPassword] = useState(false);
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isPasswordField = type === "password";
  
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="mb-4">
          <FormLabel className="text-[#222222] font-medium">
            {label}{required && <span className="text-red-500 ml-1">*</span>}
          </FormLabel>
          <FormControl>
            <div className="relative">
              <Input
                placeholder={placeholder}
                type={isPasswordField && showPassword ? "text" : type}
                className="bg-white border-[#F2FCE2] focus:border-[#9b87f5] focus:ring-[#9b87f5]/20 rounded-md p-2 h-10"
                {...field}
              />
              {isPasswordField && (
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#8E9196] hover:text-[#7E69AB]"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              )}
            </div>
          </FormControl>
          <FormMessage className="text-red-500 text-sm mt-1" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
