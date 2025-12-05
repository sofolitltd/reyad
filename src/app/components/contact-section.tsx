'use client';

import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {useToast} from '@/hooks/use-toast';

import {Button} from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Card, CardContent} from '@/components/ui/card';
import {Loader2, Mail, Phone, Send} from 'lucide-react';
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
} from 'react-icons/fa';

import Link from 'next/link';

const contactFormSchema = z.object({
  name: z.string().min(2, {message: 'Name must be at least 2 characters.'}),
  email: z.string().email({message: 'Please enter a valid email.'}),
  message: z.string().min(10, {message: 'Message must be at least 10 characters.'}),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/sofolitltd',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/asifuzzamanreyad',
    icon: FaLinkedin,
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/asifuzzamanreyad',
    icon: FaFacebook,
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@sofolitltd',
    icon: FaYoutube,
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/+8801704340860',
    icon: FaWhatsapp,
  },
];

export function ContactSection() {
  const {toast} = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    const {name, email, message} = data;
    const whatsappMessage = `Hello, I'm ${name} (${email}).\n\nMessage:\n${message}`;
    const whatsappUrl = `https://wa.me/+8801704340860?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp link in a new tab
    window.open(whatsappUrl, '_blank');

    toast({
      title: 'Redirecting to WhatsApp',
      description: 'Please send your message through WhatsApp.',
    });

    form.reset();
  };

  return (
    <section id="contact" className="scroll-mt-20 pb-8">
      <Card className="max-w-4xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* Left Side: Contact Info */}
          <div className="p-8 bg-muted/30 flex flex-col justify-between md:col-span-2">
            <div>
              <h2 className="text-2xl font-bold font-headline mb-2 text-foreground">
                Let's Connect
              </h2>
              <p className="text-muted-foreground text-sm mb-8">
                I'm happy to chat about new projects, collaborations, or just say hello!
              </p>
              <div className="space-y-4 text-sm">
                <a
                  href="mailto:asifreyad1@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  <span>asifreyad1@gmail.com</span>
                </a>
                <a
                  href="tel:+8801704340860"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  <span>01704340860</span>
                </a>
              </div>
              <div className="flex gap-3 mt-8">
                {socialLinks.map(link => (
                  <Link
                    key={link.name}
                    href={link.href}
                    aria-label={link.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-muted hover:bg-border transition-colors"
                  >
                    <link.icon className="w-4 h-4 text-muted-foreground" />
                  </Link>
                ))}
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-8">
              I reply to most messages within 24 hours.
            </p>
          </div>

          {/* Right Side: Form */}
          <div className="p-8 md:col-span-3">
            <h2 className="text-2xl font-bold font-headline mb-6">Send a Message</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({field}) => (
                    <FormItem>
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
                  render={({field}) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Your Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({field}) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Your Message"
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="mr-2 h-4 w-4" />
                  )}
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </Card>
    </section>
  );
}
