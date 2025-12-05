"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "../actions";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const initialState = {
  message: "",
  errors: {},
};

function SubmitButton() {
    // This is a placeholder for a pending state. 
    // In a real app, you might use useFormStatus from react-dom.
    const pending = false;
    return (
      <Button type="submit" className="w-full" disabled={pending}>
        {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Send Message
      </Button>
    );
  }

export function ContactSection() {
  const { toast } = useToast();
  const [state, formAction] = useFormState(submitContactForm, initialState);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    if (state.message) {
      if (state.errors && Object.keys(state.errors).length > 0) {
        toast({
          variant: "destructive",
          title: "Error",
          description: state.message,
        });
      } else {
        toast({
          title: "Success!",
          description: state.message,
        });
        form.reset();
      }
    }
  }, [state, toast, form]);

  return (
    <section id="contact" className="scroll-mt-20">
      <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-12 font-headline">
        Get In Touch
      </h2>
      <Card className="max-w-xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center font-headline">Contact Me</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form action={formAction} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Your message..."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <SubmitButton />
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}
