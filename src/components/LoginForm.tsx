
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import CustomFormField from "./FormField";
import { Mail, Lock } from "lucide-react";

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginForm: React.FC = () => {
  const { toast } = useToast();
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log(data);
    toast({
      title: "Login Successful!",
      description: "You have been logged in successfully.",
    });
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-auth-text mb-2">Welcome back</h2>
      <p className="text-auth-muted mb-6">Sign in to your account to continue</p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-auth-primary mb-1">
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
            
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="rounded border-gray-300 text-auth-primary focus:ring-auth-primary/25"
                />
                <label htmlFor="remember" className="text-sm text-auth-muted ml-2">
                  Remember me
                </label>
              </div>
              
              <a href="#" className="text-sm font-medium text-auth-primary hover:underline">
                Forgot password?
              </a>
            </div>
          </div>
          
          <Button
            type="submit"
            className="w-full bg-auth-primary hover:bg-auth-secondary text-white font-medium py-2 px-4 rounded-md transition-colors h-11"
          >
            Sign In
            <Lock size={16} className="ml-2" />
          </Button>
          
          <div className="relative mt-8 mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-auth-muted">Or continue with</span>
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

export default LoginForm;
