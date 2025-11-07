import { useForm, type SubmitHandler } from "react-hook-form";
import {
  Group,
  Field,
  Input,
  NativeSelect,
  Button,
  Fieldset,
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { ImArrowLeft } from "react-icons/im";
import { Link } from "react-router";

type FormFields = {
  name: string;
  metres: number;
  typeOfFabric: string;
  image: FileList;
};

function AddFabricForm() {
  const { register, handleSubmit } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Heading color="blackAlpha.700" fontSize="2rem">
        | Add Fabric
      </Heading>

      <Flex minH="100vh" justify="center" margin="5rem" gap="2rem">
        <Link to="/projects">
          <IconButton bg="chocolate">
            <ImArrowLeft />
          </IconButton>
        </Link>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Box bg="ivory" color="teal.950" width="35rem">
            <Fieldset.Root>
              <Field.Root>
                <Field.Label>Name</Field.Label>
                <Input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Write a name of your new project"
                />
              </Field.Root>

              <label>Metres</label>
              <input
                type="number"
                step="0.1"
                {...register("metres", { required: true, min: 0.1 })}
              />

              <Field.Root>
                <Field.Label>Typ látky</Field.Label>
                <NativeSelect.Root>
                  <NativeSelect.Field
                    {...register("typeOfFabric", { required: true })}
                    placeholder="-- Vyber status --"
                  >
                    <option value=""> --Vyber typ látky -- </option>
                    <option value="Tkanina">Tkanina</option>
                    <option value="Úplet">Úplet</option>
                    <option value="Funkční">Funkční látka</option>
                    <option value="Dekor">Dekorační látka</option>
                    <option value="Special">Speciální látka</option>
                  </NativeSelect.Field>
                </NativeSelect.Root>
              </Field.Root>

              <Field.Root>
                <Field.Label>Image</Field.Label>

                <Input
                  {...register("image", { required: true })}
                  type="file"
                  accept=".jpg,.jpeg,.png,.pdf"
                />
              </Field.Root>

              <Group grow>
                <Button bg="chocolate" type="button">
                  Cancel
                </Button>
                <Button bg="chocolate" type="submit">
                  New project
                </Button>
              </Group>
            </Fieldset.Root>
          </Box>
        </form>
      </Flex>
    </div>
  );
}

export default AddFabricForm;
