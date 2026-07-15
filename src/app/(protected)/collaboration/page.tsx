"use client";

import { Button, Card } from "@heroui/react";

import { useReceivedRequests } from "@/hooks/useReceivedRequests";
import { CollaborationRequest } from "@/features/auth/types/collaboration";
import { toast } from "sonner";
import { useUpdateRequest } from "@/hooks/useUpdateRequest";


export default function CollaborationPage() {
  const { data, isPending } = useReceivedRequests();
  const { mutate, isPending: isUpdating } =
  useUpdateRequest();

  if (isPending) {
    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">
          Collaboration Requests
        </h1>

        <Card className="p-6">
          Loading...
        </Card>
      </div>
    );
  }

  const requests = data?.data ?? [];
  const handleUpdate = (
  id: string,
  status: "accepted" | "rejected"
) => {
  mutate(
    {
      id,
      status,
    },
    {
      onSuccess: () => {
        toast.success(
          `Request ${status}`
        );
      },

      onError: (error) => {
        toast.error(error.message);
      },
    }
  );
};

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Collaboration Requests
        </h1>

        <p className="text-default-500">
          Manage incoming collaboration requests.
        </p>
      </div>

      {requests.length === 0 ? (
        <Card className="p-6 text-center">
          <p>No collaboration requests found.</p>
        </Card>
      ) : (
        <div className="space-y-4">
          {requests.map(
            (request: CollaborationRequest) => (
              <Card
                key={request._id}
                className="p-5"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-lg font-semibold">
                      {request.sender.name}
                    </h2>

                    <p className="text-sm text-default-500">
                      {request.sender.email}
                    </p>

                    <p className="mt-2 text-sm">
                      Status:
                      <span className="ml-2 font-medium capitalize">
                        {request.status}
                      </span>
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <Button
  variant="primary"
  isDisabled={isUpdating}
  onPress={() =>
    handleUpdate(
      request._id,
      "accepted"
    )
  }
>
  Accept
</Button>

                  <Button
  variant="danger"
  isDisabled={isUpdating}
  onPress={() =>
    handleUpdate(
      request._id,
      "rejected"
    )
  }
>
  Reject
</Button>
                  </div>
                </div>
              </Card>
            )
          )}
        </div>
      )}
    </div>
  );
}