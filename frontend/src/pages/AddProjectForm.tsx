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
} from "@chakra-ui/react";
import { useNavigate, Link } from "react-router";
import { ImArrowLeft } from "react-icons/im";
import { IconButton } from "@chakra-ui/react";

type ProjectFormData = {
  name: string;
  status: string;
  image?: FileList;
};

function AddProjectForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProjectFormData>();
  const navigate = useNavigate();

  const onSubmit = (data: ProjectFormData) => {
    const newProject = {
      id: Date.now(),
      name: data.name,
      status: data.status,
      image: data.image,
    };

    const existingProjects = JSON.parse(
      localStorage.getItem("projects") || "[]"
    );

    const updatedProjects = [...existingProjects, newProject];

    localStorage.setItem("projects", JSON.stringify(updatedProjects));

    reset();
    navigate("/projects");
  };

  const handleCancel = () => reset();

  return (
    <div>
      <Heading color="blackAlpha.700" fontSize="2rem">
        | New project
      </Heading>

      <Flex minH="100vh" justify="center" margin="5rem" gap="2rem">
        <Link to="/projects">
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

                <Field.Root invalid={!!errors.status}>
                  <Field.Label>Status</Field.Label>
                  <NativeSelect.Root>
                    <NativeSelect.Field
                      placeholder="-- Vyber status --"
                      {...register("status", {
                        required: "Vyber status projektu",
                      })}
                    >
                      <option value=""> --Choose a status -- </option>
                      <option value="idea">Idea</option>
                      <option value="in_process">In Progress</option>
                      <option value="done">Done</option>
                    </NativeSelect.Field>
                  </NativeSelect.Root>

                  <Field.ErrorText>{errors.status?.message}</Field.ErrorText>
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
                    Cancel
                  </Button>
                  <Button bg="chocolate" type="submit">
                    Add project
                  </Button>
                </Group>
              </Fieldset.Root>
            </VStack>
          </Box>
        </form>
      </Flex>
    </div>
  );
}

export default AddProjectForm;
