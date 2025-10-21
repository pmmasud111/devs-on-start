"use client";
import { signIn } from "next-auth/react";
import {
  Anchor,
  Button,
  ButtonGroup,
  Checkbox,
  Divider,
  Group,
  Paper,
  PaperProps,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { upperFirst, useToggle } from "@mantine/hooks";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

export function AuthenticationForm(props: PaperProps) {
  const [type, toggle] = useToggle(["login", "register"]);
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
    },

    validate: {
      email: val => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: val =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  const handleSocialLogin = () => {
    signIn("google", { callbackUrl: "http://localhost:3000/home" });
  };

  return (
    <Paper
      className="w-[400px] mx-auto"
      radius="md"
      p="lg"
      withBorder
      {...props}
    >
      <Text size="lg" fw={500}>
        Welcome to Dev&apos;s On Start, {type} with
      </Text>

      <ButtonGroup
        mb="md"
        mt="md"
        className="flex items-center justify-center gap-2"
      >
        <Button
          onClick={handleSocialLogin}
          variant="outline"
          className="text-2xl font-bold flex justify-center items-center border p-1 rounded-lg cursor-pointer hover:bg-black-50 transparent "
        >
          <FcGoogle size={20} className="inline mr-2" />
          Google
        </Button>
        <Button
          variant="outline"
          className="text-2xl font-bold flex justify-center items-center border p-1 rounded-lg cursor-pointer hover:bg-black-50 transparent"
        >
          <BsFacebook size={20} className="inline mr-2" />
          Facebook
        </Button>
      </ButtonGroup>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      <form
        onSubmit={form.onSubmit(values => {
          console.log(values);
        })}
      >
        <Stack>
          {type === "register" && (
            <TextInput
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              onChange={event =>
                form.setFieldValue("name", event.currentTarget.value)
              }
              radius="md"
            />
          )}

          <TextInput
            required
            label="Email"
            placeholder="hello@mantine.dev"
            value={form.values.email}
            onChange={event =>
              form.setFieldValue("email", event.currentTarget.value)
            }
            error={form.errors.email && "Invalid email"}
            radius="md"
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={event =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            error={
              form.errors.password &&
              "Password should include at least 6 characters"
            }
            radius="md"
          />

          {type === "register" && (
            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={event =>
                form.setFieldValue("terms", event.currentTarget.checked)
              }
            />
          )}
        </Stack>

        <Group justify="space-between" mt="xl">
          <Anchor
            component="button"
            type="button"
            c="dimmed"
            onClick={() => toggle()}
            size="xs"
          >
            {type === "register"
              ? "Already have an account? Login"
              : "Don't have an account? Register"}
          </Anchor>
          <Button type="submit" radius="xl">
            {upperFirst(type)}
          </Button>
        </Group>
      </form>
    </Paper>
  );
}
