import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectUpdateInput = {
  description?: string | null;
  dueDate?: Date | null;
  foo?: string | null;
  name?: string | null;
  owner?: UserWhereUniqueInput;
  startDate?: Date | null;
};
