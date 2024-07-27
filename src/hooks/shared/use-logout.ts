import useSWRMutation from "swr/mutation";
import toast from "react-hot-toast";
import { mutate } from "swr";

import { apiBaseUrl } from "src/constants";
import { User } from "src/models";
import { HttpService } from "src/utils";
import { deleteCookie } from "src/utils/shared/cookie";

export function useLogout() {
  const { trigger, isMutating: loggingOut } = useSWRMutation(
    `${apiBaseUrl}/auth/logout`,
    async (url) => {
      const response = new HttpService().get<User>(url).then((res) => res.data);
      toast.promise(response, {
        loading: "Loggin out...",
        success: "Logged out",
        error: "Filed to logout",
      });
      return response;
    },
    {
      onSuccess: () => mutate(`${apiBaseUrl}/user/me`, undefined),
    },
  );
  const logout = () => {
    trigger();
    deleteCookie("token");
  };
  return { logout, loggingOut };
}
