import React, { createContext, useState } from "react";

import { UserContextProps } from "../ContextTypes";

const UserContext = createContext<UserContextProps>({
  screen: "Login",
} as UserContextProps);

export default UserContext;
