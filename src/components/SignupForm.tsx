
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import CustomFormField from "./FormField";
import { Mail, Lock, User, UserPlus } from "lucide-react";

const signupSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  confirmPassword: z.string().min(6, { message: "Password must be at least 6 characters" }),
})
.refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type SignupFormValues = z.infer<typeof signupSchema>;

const SignupForm: React.FC = () => {
  const { toast } = useToast();
  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: SignupFormValues) => {
    console.log(data);
    toast({
      title: "Account created!",
      description: "Your account has been created successfully.",
    });
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-auth-text mb-2">Create your account</h2>
      <p className="text-auth-muted mb-6">Sign up to get started with our platform</p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-auth-primary mb-1">
              <User size={18} />
              <span className="font-medium">Personal Information</span>
            </div>
            
            <CustomFormField
              control={form.control}
              name="name"
              label="Full Name"
              placeholder="John Doe"
              required
            />
            
            <div className="flex items-center gap-2 text-auth-primary mb-1 mt-6">
              <Mail size={18} />
              <span className="font-medium">Account Information</span>
            </div>
            
            <CustomFormField
              control={form.control}
              name="email"
              label="Email Address"
              placeholder="your@email.com"
              required
            />
            
            <CustomFormField
              control={form.control}
              name="password"
              label="Password"
              type="password"
              placeholder="••••••••"
              required
            />
            
            <CustomFormField
              control={form.control}
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              placeholder="••••••••"
              required
            />
            
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                id="terms"
                className="rounded border-gray-300 text-auth-primary focus:ring-auth-primary/25"
              />
              <label htmlFor="terms" className="text-sm text-auth-muted ml-2">
                I agree to the <a href="#" className="text-auth-primary hover:underline">Terms of Service</a> and <a href="#" className="text-auth-primary hover:underline">Privacy Policy</a>
              </label>
            </div>
          </div>
          
          <Button
            type="submit"
            className="w-full bg-auth-primary hover:bg-auth-secondary text-white font-medium py-2 px-4 rounded-md transition-colors h-11"
          >
            Create Account
            <UserPlus size={16} className="ml-2" />
          </Button>
          
          <div className="relative mt-8 mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-auth-muted">Or register with</span>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            {["Google", "GitHub", "Twitter"].map((provider) => (
              <Button
                key={provider}
                type="button"
                variant="outline"
                className="bg-white hover:bg-auth-accent border border-gray-200 text-auth-text font-medium py-2 px-4 rounded-md transition-colors"
              >
                {provider}
              </Button>
            ))}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignupForm;
