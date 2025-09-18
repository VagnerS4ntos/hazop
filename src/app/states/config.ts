import { create } from "zustand";
import { userStateT } from "@/app/types/config";

/********************* USERS  *************************/
export const useUserDatabase = create<userStateT>((set) => ({
  users: [],
  getUsersDatabase: (data) => set({ users: data }),
}));
