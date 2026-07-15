"use client";

import { useState } from "react";

import { Button } from "@heroui/react";
import { Pencil } from "lucide-react";

import EditProfileModal from "./EditProfileModal";

export default function EditProfileButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onPress={() => setOpen(true)}
        className="flex items-center gap-2"
      >
        <Pencil size={16} />
        Edit Profile
      </Button>

      <EditProfileModal
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}