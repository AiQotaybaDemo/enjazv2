"use client"

import type React from "react"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { sendEmail } from "../lib/actions/send-email"
import { useLocale, useTranslations } from "next-intl"
import { cn } from "@/lib/utils"


export function ConsultationDialog({ trigger, className }: any) {
  const [isLoading, setIsLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const { toast } = useToast()
  const t: any = useTranslations("consultation")
  const isRTL = useLocale() === "ar"


  const formSchema = z.object({
    name: z.string().optional(),
      
    email: z.string().min(5, { message: t("errors.PleaseEnterValidEmail") }),
    phone: z.string().min(8, { message: t("errors.PleaseEnterValidPhone") }),
    message: z.string().optional(),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: " ",
      email: " ",
      phone: " ",
      message: " ",
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema | any>) {
    setIsLoading(true)
    try {
      const result = await sendEmail(values)

      if (result?.success) {
        toast({ title: t("success"), className: "bg-[#1289A6] text-white", })
        form.reset()
        setOpen(false)
      } else {
        throw new Error(result?.error)
      }
    } catch (error) {
      console.log(error);

      toast({ title: t("error"), variant: "destructive", })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger || <Button className={className}>{t("title")}</Button>}</DialogTrigger>
      <DialogContent className={cn("sm:max-w-[500px] bg-white")} dir={isRTL ? "rtl" : "ltr"}>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">{t("title")}</DialogTitle>
          <DialogDescription className="text-base text-center ">{t("description")}</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("form.name")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("form.name")} {...field} />
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
                  <FormLabel>{t("form.email")}</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder={t("form.email")} {...field} />
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
                  <FormLabel>{t("form.phone")}</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder={t("form.phone")} {...field} />
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
                  <FormLabel>{t("form.message")}</FormLabel>
                  <FormControl>
                    <Textarea placeholder={t("form.message")} className="min-h-[100px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full text-white bg-gradient-to-r from-[#1289A6] to-[#1a8ba7] py-6 text-lg font-semibold shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {t("form.submit")}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

