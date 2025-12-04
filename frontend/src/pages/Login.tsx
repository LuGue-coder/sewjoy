import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../database/db"; // cesta podle toho, kde máš config
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Fieldset, Field, Button, Stack, Input } from "@chakra-ui/react";

const schema = z.object({
  email: z.email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
type LoginForm = z.infer<typeof schema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(schema),
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: LoginForm) => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, data.email, data.password);

      navigate("/projects"); //redirect do aplikace
    } catch (error: any) {
      let message = "Něco se pokazilo";
      if (error.code === "auth/user-not-found") message = "Uživatel neexistuje";
      if (error.code === "auth/wrong-password") message = "Špatné heslo";
      if (error.code === "auth/invalid-email") message = "Neplatný email";
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Fieldset.Root size="lg" maxW="md">
        <Stack>
          <Fieldset.Legend color="orange">Přihlášení</Fieldset.Legend>
        </Stack>

        <Fieldset.Content>
          <Field.Root invalid={!!errors.email}>
            <Field.Label color="orange">Email</Field.Label>
            <Input color="orange" type="email" {...register("email")} />
            <Field.ErrorText color="orange">
              {errors.email?.message}
            </Field.ErrorText>
          </Field.Root>

          <Field.Root invalid={!!errors.password}>
            <Field.Label color="orange">Heslo</Field.Label>
            <Input color="orange" type="password" {...register("password")} />
            <Field.ErrorText color="orange">
              {errors.password?.message}
            </Field.ErrorText>
          </Field.Root>
        </Fieldset.Content>

        <Button type="submit" alignSelf="flex-start" loading={loading}>
          Submit
        </Button>
      </Fieldset.Root>
    </form>
  );
}
