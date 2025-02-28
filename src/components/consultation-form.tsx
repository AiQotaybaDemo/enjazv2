"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { sendEmail } from "../lib/actions/send-email"


const defaultDict = {
  consultation: {
    title: "Get Free Consultation",
    description: "Fill out the form below and we'll get back to you shortly.",
    form: {
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      message: "How can we help?",
      submit: "Submit Request",
    },
    success: "Thank you! We'll contact you soon.",
    error: "Something went wrong. Please try again.",
  },
}

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(8, {
    message: "Please enter a valid phone number.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export function ConsultationForm({ dict }: any) {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const content = dict?.consultation ?? defaultDict.consultation

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    try {
      const result = await sendEmail(values)

      if (result.success) {
        toast({
          title: content.success,
          className: "bg-[#14697d] text-white",
        })
        form.reset()
      } else {
        throw new Error(result.error)
      }
    } catch (error) {
      console.log(error);

      toast({
        title: content.error,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="consultation" className="bg-gray-50 py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-zinc-900 md:text-4xl">{content.title}</h2>
            <p className="text-lg text-zinc-600">{content.description}</p>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-lg">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{content.form?.name}</FormLabel>
                      <FormControl>
                        <Input placeholder={content.form?.name} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid gap-6 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{content.form?.email}</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder={content.form?.email} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{content.form?.phone}</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder={content.form?.phone} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{content.form?.message}</FormLabel>
                      <FormControl>
                        <Textarea placeholder={content.form?.message} className="min-h-[120px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-[#14697d] to-[#1a8ba7] py-6 text-lg font-semibold shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {content.form?.submit}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}

