import { useMutation } from "@tanstack/react-query";
import { signup } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useSignup() {
  const { mutate, isPending } = useMutation({
    mutationFn: signup,
    onSuccess: () => {
      toast.success(
        "Account successfully created! Please verify your account from the user email address.",
      );
    },
    onError: () => {
      toast.error("");
    },
  });

  return { mutate, isPending };
}

export default useSignup;
