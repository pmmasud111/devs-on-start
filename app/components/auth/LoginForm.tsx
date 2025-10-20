"use client";
import { useForm } from "@mantine/form";
import { TextInput, Button } from "@mantine/core";

function LoginForm() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: { user: "", password: "" },

    // functions will be used to validate values at corresponding key
    validate: {
      user: (value) =>
        value.length < 2 ? "User must have at least 2 letters" : null,
      password: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid password  ",
    },
  });

  return (
    <form onSubmit={form.onSubmit(console.log)}>
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key("name")}
        {...form.getInputProps("name")}
      />
      <TextInput
        mt="sm"
        label="Email"
        placeholder="Email"
        key={form.key("email")}
        {...form.getInputProps("email")}
      />
      <Button type="submit" mt="sm">
        Submit
      </Button>
    </form>
  );
}
export default LoginForm;
