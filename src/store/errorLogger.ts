import { isRejectedWithValue } from "@reduxjs/toolkit";
import { toast } from "sonner";

export const rtkQueryErrorLogger =
  (api: any) => (next: any) => (action: any) => {
    if (isRejectedWithValue(action)) {
      const message =
        action.payload?.data?.message ||
        action.payload?.error ||
        "Unexpected error";

      toast.error(message);
    }
    return next(action);
  };
