
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import CustomFormField from "./FormField";
import { Mail, Sparkles, User, Droplet, Calendar, Palette, FlowerIcon, LeafIcon } from "lucide-react";

const skincareSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  age: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Please enter a valid age",
  }),
  skinType: z.string().min(1, { message: "Please select your skin type" }),
  concerns: z.string().min(1, { message: "Please share your skin concerns" }),
  allergies: z.string().optional(),
});

type SkincareFormValues = z.infer<typeof skincareSchema>;

const SkincareSignupForm: React.FC = () => {
  const { toast } = useToast();
  const form = useForm<SkincareFormValues>({
    resolver: zodResolver(skincareSchema),
    defaultValues: {
      name: "",
      email: "",
      age: "",
      skinType: "",
      concerns: "",
      allergies: "",
    },
  });

  const onSubmit = (data: SkincareFormValues) => {
    console.log(data);
    toast({
      title: "Profile created!",
      description: "Your skincare profile has been created successfully.",
    });
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-[#7E69AB] mb-2">Create your skincare profile</h2>
      <p className="text-[#8E9196] mb-6">Tell us about your skin to get personalized recommendations</p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#9b87f5] mb-1">
              <User size={18} />
              <span className="font-medium">Personal Information</span>
            </div>
            
            <CustomFormField
              control={form.control}
              name="name"
              label="Full Name"
              placeholder="Jane Doe"
              required
            />
            
            <CustomFormField
              control={form.control}
              name="email"
              label="Email Address"
              placeholder="jane@example.com"
              required
            />
            
            <CustomFormField
              control={form.control}
              name="age"
              label="Age"
              placeholder="25"
              required
            />
            
            <div className="flex items-center gap-2 text-[#9b87f5] mb-1 mt-6">
              <Droplet size={18} />
              <span className="font-medium">Skin Profile</span>
            </div>
            
            <div className="mb-4">
              <label className="text-[#222222] font-medium mb-1.5 block">
                Skin Type <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {["Dry", "Oily", "Combination", "Normal", "Sensitive", "Acne-Prone"].map((type) => (
                  <div key={type} className="flex items-center space-x-2 bg-[#F2FCE2] p-2 rounded-md hover:bg-[#E5DEFF] transition-colors">
                    <Checkbox 
                      id={`skin-${type.toLowerCase()}`}
                      onCheckedChange={() => form.setValue("skinType", type)}
                      checked={form.getValues("skinType") === type}
                    />
                    <label 
                      htmlFor={`skin-${type.toLowerCase()}`} 
                      className="text-sm cursor-pointer"
                    >
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <CustomFormField
              control={form.control}
              name="concerns"
              label="Skin Concerns"
              placeholder="Dryness, Fine lines, Dark spots, etc."
              required
            />
            
            <CustomFormField
              control={form.control}
              name="allergies"
              label="Known Allergies or Sensitivities"
              placeholder="Optional: List any ingredients you're allergic to"
            />
            
            <div className="flex items-center gap-2 text-[#9b87f5] mb-1 mt-6">
              <Palette size={18} />
              <span className="font-medium">Product Preferences</span>
            </div>
            
            <div className="mb-4">
              <label className="text-[#222222] font-medium mb-1.5 block">
                What are your skincare goals?
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: "Anti-Aging", icon: <LeafIcon size={14} /> },
                  { label: "Hydration", icon: <Droplet size={14} /> },
                  { label: "Brightening", icon: <Sparkles size={14} /> }, 
                  { label: "Calming", icon: <FlowerIcon size={14} /> }
                ].map((item) => (
                  <div key={item.label} className="flex items-center space-x-2 bg-[#F2FCE2] p-2 rounded-md hover:bg-[#E5DEFF] transition-colors">
                    <Checkbox id={`goal-${item.label.toLowerCase()}`} />
                    <label 
                      htmlFor={`goal-${item.label.toLowerCase()}`} 
                      className="text-sm cursor-pointer flex items-center"
                    >
                      <span className="mr-1 text-[#9b87f5]">{item.icon}</span>
                      {item.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center mt-2">
              <Checkbox
                id="terms"
              />
              <label htmlFor="terms" className="text-sm text-[#8E9196] ml-2">
                I agree to the <a href="#" className="text-[#9b87f5] hover:underline">Terms of Service</a> and <a href="#" className="text-[#9b87f5] hover:underline">Privacy Policy</a>
              </label>
            </div>
          </div>
          
          <Button
            type="submit"
            className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white font-medium py-2 px-4 rounded-md transition-colors h-11"
          >
            Create My Skincare Profile
            <Sparkles size={16} className="ml-2" />
          </Button>
          
          <div className="mt-4 p-3 bg-[#F2FCE2] rounded-md text-sm text-[#8E9196] flex items-start">
            <Droplet className="text-[#9b87f5] mt-0.5 mr-2 shrink-0" size={16} />
            <p>Your skin profile helps us recommend products and routines that work best for your unique needs.</p>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SkincareSignupForm;
