"use client"
 
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form";
import * as z from "zod"

const formSchema = z.object({
    input: z.string().min(2).max(50),
})

function SearchInput() {
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          input: "",
        },
      })

      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }
  return (
    <div>SearchInput</div>
  )
}

export default SearchInput