'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Session } from '@supabase/auth-helpers-nextjs'

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useUpdateProfile } from "@/lib/react-query"
import { useRouter } from "next/navigation"
import FileUploader from "@/components/shared/FileUploader"
import { userFormSchema } from "@/lib/validators/users"
import { User } from "../../../supabase/user"


export default function AccountForm({ session, profile}: {
    session: Session | null,
    profile: User
}) {

   const user = session?.user
   const {mutateAsync: updateProfile, isPending: isUpdating} = useUpdateProfile()
   const router = useRouter()

    
    const form = useForm<z.infer<typeof userFormSchema>>({
        resolver: zodResolver(userFormSchema),
        defaultValues: {
          username: profile?.username || "",
          first_name: profile?.first_name || "",
          last_name: profile?.last_name || "",
          email: user?.email,
          phone: profile?.phone || "",
          avatar: profile?.image_url || "",
        },
      })

      async function onSubmit(values: z.infer<typeof userFormSchema>) {
        updateProfile({...values, userId: user?.id || "", avatar: values.avatar, onboarded: true}, {
          onSuccess: () => {
             router.push("/")
          },
          onSettled: () => {
            form.reset()
          }
        })
        // console.log(values)
      }
    
      form.watch()
    

  return(
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
    <FormField
        control={form.control}
        name="avatar"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="shad-form_label">Add Photos</FormLabel>
            <FormControl>
              <FileUploader fieldChange={field?.onChange} isProfile mediaUrl={profile?.image_url as string} />
            </FormControl>
            <FormMessage className="shad-form_message" />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input placeholder="Username here..." {...field} />
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="first_name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Firstname</FormLabel>
            <FormControl>
              <Input placeholder="Firstname here..." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="last_name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Lastname</FormLabel>
            <FormControl>
              <Input placeholder="Lastname here..." {...field} />
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
              <Input placeholder="youemail@example.com" {...field} />
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
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="070 1234 5678" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      <Button type="submit" className=" bg-red-400">{isUpdating ? "Please wait..." : "Submit"}</Button>
    </form>
  </Form>
    )
}