"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "./ui/dialog";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
// import { formSchema } from "@/schemas/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ImSpinner2 } from "react-icons/im";
import { toast } from "./ui/use-toast";
import { CreateForm } from "@/actions/form";
import { formSchema } from "@/schemas/form";
import { useRouter } from "next/navigation";


function CreateFormBtn() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  const router = useRouter();

  const { setValue } = form;


  const onSubmit = async (values) => {
    try {
      // If validation is successful, proceed with form submission
      const formId = await CreateForm(values);
      toast({
        title: "Success",
        description: "Form created successfully",
      });
        router.push(`/builder/${formId}`);
      // Reset form
      setValue("name", "");
      setValue("description", "");

    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong, please try again later",
        variant: "destructive"
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'outline'} className="group border border-primary/20 h-[190px] flex justify-center flex-col items-center  hover:cursor-pointer border-dashed hover:border-primary  gap-4">
          <BsFileEarmarkPlus className=" h-8 w-8 text-muted-foreground group-hover:text-primary text-4xl " />
          <p className='font-bold text-xl text-muted-foreground group-hover:text-primary'>Create new form</p>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create form</DialogTitle>
          <DialogDescription>
            Create a form to start collecting responses
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea rows={5} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <DialogFooter>
          <Button
            onClick={form.handleSubmit(onSubmit)}
            disabled={form.formState.isSubmitting}
            className="w-full mt-4"
          >
            {!form.formState.isSubmitting && <span>Save</span>}
            {form.formState.isSubmitting && (
              <ImSpinner2 className="animate-spin" />
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CreateFormBtn;
