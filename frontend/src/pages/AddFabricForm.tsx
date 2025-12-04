import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Group,
  Field,
  Input,
  NativeSelect,
  Button,
  Fieldset,
  Box,
  VStack,
  Flex,
  Heading,
  NumberInput,
  Center,
  Spinner,
  IconButton,
} from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";
import { ImArrowLeft } from "react-icons/im";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { addFabric } from "../database/fabrics";

const schema = z.object({
  name: z.string().min(1, "Zadej jméno."),
  meters: z.number().min(0.1, "Musí být alespoň 0.1 m."),
  type: z.string().min(1, "Vyber typ látky."),
  image: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, "Nahraj obrázek."),
});

type FabricFormData = z.infer<typeof schema>;

function AddFabricForm() {
  const [submitting, isSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FabricFormData>({
    resolver: zodResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit = async (data: FabricFormData) => {
    isSubmitting(true);
    await addFabric(data);
    isSubmitting(false);
    reset();
    navigate("/fabrics");
  };

  const handleCancel = () => reset();

  return (
    <div>
      <Heading color="blackAlpha.700" fontSize="2rem">
        | New fabric
      </Heading>

      <Flex minH="100vh" justify="center" margin="5rem" gap="2rem">
        <Link to="/fabrics">
          <IconButton bg="chocolate">
            <ImArrowLeft />
          </IconButton>
        </Link>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Box bg="ivory" color="teal.950" width="35rem">
            <VStack gap="2" p="1rem">
              <Fieldset.Root>
                <Field.Root invalid={!!errors.name}>
                  <Field.Label>Name</Field.Label>
                  <Input
                    {...register("name", {
                      required: "This is required",
                      minLength: { value: 2, message: "Min length is 4" },
                    })}
                    type="text"
                    placeholder="Write a name of your new project"
                    h="8rem"
                  />
                  <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
                </Field.Root>

                <Field.Root invalid={!!errors.meters}>
                  <Field.Label>Počet metrů</Field.Label>
                  <NumberInput.Root min={0} step={0.1} defaultValue="1">
                    <NumberInput.Input
                      {...register("meters", { valueAsNumber: true })}
                    />
                    <NumberInput.Control>
                      <NumberInput.IncrementTrigger />
                      <NumberInput.DecrementTrigger />
                    </NumberInput.Control>
                  </NumberInput.Root>
                  <Field.ErrorText>{errors.meters?.message}</Field.ErrorText>
                </Field.Root>

                <Field.Root invalid={!!errors.type}>
                  <Field.Label>Type</Field.Label>
                  <NativeSelect.Root>
                    <NativeSelect.Field
                      {...register("type", {
                        required: "Vyber typ látky",
                      })}
                    >
                      <option value=""> --Vyber typ -- </option>
                      <option value="Tkanina">Tkanina</option>
                      <option value="Úplet">Úplet</option>
                      <option value="Speciální látka">Speciální látka</option>
                      <option value="Dekorativní látka">
                        Dekorativní látka
                      </option>
                      <option value="Funkční látka">Funkční látka</option>
                    </NativeSelect.Field>
                  </NativeSelect.Root>

                  <Field.ErrorText>{errors.type?.message}</Field.ErrorText>
                </Field.Root>

                <Field.Root>
                  <Field.Label>Image</Field.Label>

                  <Input
                    {...register("image", { required: "" })}
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    h="8rem"
                    alignContent="center"
                  />
                </Field.Root>

                <Group grow>
                  <Button bg="chocolate" type="button" onClick={handleCancel}>
                    Zrušit
                  </Button>
                  <Button bg="chocolate" type="submit">
                    Přidej látku
                  </Button>
                </Group>
              </Fieldset.Root>
            </VStack>
            {submitting && (
              <Center h="full">
                <Spinner color="teal.500" />
              </Center>
            )}
          </Box>
        </form>
      </Flex>
    </div>
  );
}

export default AddFabricForm;
