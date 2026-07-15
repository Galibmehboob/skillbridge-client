"use client";

import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";

import { Pencil } from "lucide-react";

import { useEffect, useState } from "react";

import {
  useForm,
  Controller,
} from "react-hook-form";
import { useSession } from "@/lib/auth-client";



import {
  profileSchema,
  type ProfileFormValues,
} from "@/lib/validations/profile.schema";

import { useMyProfile } from "@/hooks/useMyProfile";
import { zodResolver } from "@hookform/resolvers/zod";
import { uploadImage } from "@/services/image/uploadImage";
import { useUpdateProfile } from "@/hooks/useUpdateProfile";
import { toast } from "sonner";
import { X } from "lucide-react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function EditProfileModal({
  isOpen,
  onClose,
}: Props) {
  const { data: profile } = useMyProfile();
  const { mutateAsync: updateProfile } = useUpdateProfile();


const { refetch } = useSession();

const [uploading, setUploading] =
  useState(false);

const {
  register,
  handleSubmit,
  reset,
  setValue,
  watch,
  formState: {
    errors,
    isSubmitting,
  },
} = useForm<ProfileFormValues>({
  resolver: zodResolver(profileSchema),
  defaultValues: {
    image: "",
    name: "",
    bio: "",
    location: "",
    github: "",
    linkedin: "",
    portfolio: "",
    skills: [],
  },
});

const skills = watch("skills") || [];

const [skillInput, setSkillInput] = useState("");

useEffect(() => {
  if (!profile) return;

  reset({
    image: profile.image || "",
    name: profile.name || "",
    bio: profile.bio || "",
    location: profile.location || "",
    github: profile.github || "",
    linkedin: profile.linkedin || "",
    portfolio: profile.portfolio || "",
    skills: profile.skills || [],
  });

 
}, [profile, reset]);

const preview = watch("image");

const handleImageChange = async (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const file = e.target.files?.[0];

  if (!file) return;

  try {
    setUploading(true);

    const imageUrl = await uploadImage(file);

    setValue("image", imageUrl);

    
  } finally {
    setUploading(false);
  }
};

const addSkill = () => {
  const value = skillInput.trim();

  if (!value) return;

  if (skills.includes(value)) {
    setSkillInput("");
    return;
  }

  setValue("skills", [...skills, value]);

  setSkillInput("");
};

const removeSkill = (skill: string) => {
  setValue(
    "skills",
    skills.filter((item) => item !== skill)
  );
};

const onSubmit = async (values: ProfileFormValues) => {
  try {
    await updateProfile(values);

await refetch();

    

    onClose();
  } catch (error) {
    toast.error(
      error instanceof Error
        ? error.message
        : "Failed to update profile."
    );
  }
};

 

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={(value) => {
        if (!value) onClose();
      }}
    >
      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="max-h-[90vh] w-full max-w-3xl overflow-y-auto">
            <Modal.Header>
              <Modal.Icon className="bg-primary/10 text-primary">
                <Pencil className="size-5" />
              </Modal.Icon>

              <Modal.Heading>
                Edit Profile
              </Modal.Heading>

              <p className="mt-2 text-sm text-foreground/60">
                Update your profile information.
              </p>

              <Modal.CloseTrigger />
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface
                variant="default"
                className="rounded-2xl p-6"
              >
                <form
                  id="edit-profile-form"
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5"
                >
<div className="flex flex-col items-center gap-4">

  <img
  src={preview || "/avatar-placeholder.png"}
  alt="Profile"
  className="h-28 w-28 rounded-full border object-cover"
/>

  <input
    type="file"
    accept="image/*"
    onChange={handleImageChange}
  />

</div>



                                      <TextField
                    name="name"
                    variant="secondary"
                  >
                    <Label>Full Name</Label>
                    <Input
                      placeholder="Enter your full name"
                      {...register("name")}
                    />
                  </TextField>

                  <TextField
                    name="bio"
                    variant="secondary"
                  >
                    <Label>Bio</Label>
                    <TextArea
                      placeholder="Tell us about yourself..."
                      {...register("bio")}
                    />
                  </TextField>

                  <TextField
                    name="location"
                    variant="secondary"
                  >
                    <Label>Location</Label>
                    <Input
                      placeholder="Bangladesh"
                      {...register("location")}
                    />
                  </TextField>

                  <TextField
                    name="github"
                    variant="secondary"
                  >
                    <Label>Github</Label>
                    <Input
                      placeholder="https://github.com/username"
                      {...register("github")}
                    />
                  </TextField>

                  <TextField
                    name="linkedin"
                    variant="secondary"
                  >
                    <Label>LinkedIn</Label>
                    <Input
                      placeholder="https://linkedin.com/in/username"
                      {...register("linkedin")}
                    />
                  </TextField>

                  <TextField
                    name="portfolio"
                    variant="secondary"
                  >
                    <Label>Portfolio</Label>
                    <Input
                      placeholder="https://yourportfolio.com"
                      {...register("portfolio")}
                    />
                  </TextField>

<div className="space-y-3">
  <Label>Skills</Label>

  <div className="flex gap-2">
    <Input
      value={skillInput}
      placeholder="React"
      onChange={(e) => setSkillInput(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          addSkill();
        }
      }}
    />

    <Button
      type="button"
      onPress={addSkill}
    >
      Add
    </Button>
  </div>

  <div className="flex flex-wrap gap-2">
    {skills.map((skill) => (
      <div
        key={skill}
        className="flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-sm text-white"
      >
        {skill}

        <button
          type="button"
          onClick={() => removeSkill(skill)}
        >
          <X size={14} />
        </button>
      </div>
    ))}
  </div>
</div>

                </form>
              </Surface>
            </Modal.Body> 
                        <Modal.Footer>
              <Button
                slot="close"
                variant="secondary"
              >
                Cancel
              </Button>

              <Button
                type="submit"
                form="edit-profile-form"
                isPending={isSubmitting}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}