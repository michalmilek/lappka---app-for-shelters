import { useQuery } from "@tanstack/react-query";
import { getManagement } from "./management";
import { Role } from "./managementTypes";

export const useShelterManagement = (role: Role) => {
  return useQuery(["management", role], () => getManagement(role));
};
