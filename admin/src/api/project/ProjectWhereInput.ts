import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectWhereInput = {
  createdAt?: Date;
  description?: string | null;
  dueDate?: Date | null;
  foo?: string | null;
  id?: string;
  name?: string | null;
  owner?: UserWhereUniqueInput;
  startDate?: Date | null;
  updatedAt?: Date;
};
