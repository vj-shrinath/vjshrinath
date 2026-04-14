"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactValues) => {
    setIsSubmitting(true);
    try {
      // Using Web3Forms for easy handling (User can replace with their key)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "036f060f-e613-4017-be1b-32ba15804791", // This is a public key for testing, user should replace
          ...data,
          from_name: data.name,
          subject: `New Portfolio Inquiry: ${data.subject}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        reset();
      } else {
        throw new Error();
      }
    } catch (error) {
      toast({
        title: "Error!",
        description: "Something went wrong. Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-white/50 ml-1">Full Name</label>
          <input
            {...register("name")}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-sm md:text-base"
            placeholder="John Doe"
          />
          {errors.name && <p className="text-red-400 text-xs mt-1 ml-1">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-white/50 ml-1">Email Address</label>
          <input
            {...register("email")}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-sm md:text-base"
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-red-400 text-xs mt-1 ml-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-white/50 ml-1">Subject</label>
        <input
          {...register("subject")}
          className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-sm md:text-base"
          placeholder="Project Inquiry"
        />
        {errors.subject && <p className="text-red-400 text-xs mt-1 ml-1">{errors.subject.message}</p>}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-white/50 ml-1">Your Message</label>
        <textarea
          {...register("message")}
          rows={4}
          className="w-full bg-white/5 border border-white/10 rounded-3xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-sm md:text-base resize-none"
          placeholder="Tell me about your project or vision..."
        />
        {errors.message && <p className="text-red-400 text-xs mt-1 ml-1">{errors.message.message}</p>}
      </div>

      <Button
        disabled={isSubmitting}
        type="submit"
        className="w-full h-14 md:h-16 rounded-full bg-primary hover:bg-primary/90 text-white font-bold transition-all shadow-[0_10px_40px_-10px_rgba(var(--primary),0.5)] active:scale-95"
      >
        {isSubmitting ? (
          <Loader2 className="animate-spin h-5 w-5" />
        ) : (
          <span className="flex items-center justify-center">
            Send Message <Send className="ml-2 h-4 w-4" />
          </span>
        )}
      </Button>
    </form>
  );
}
