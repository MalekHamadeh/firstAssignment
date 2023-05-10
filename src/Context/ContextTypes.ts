//#region Authentication Context Types

export interface UserProviderProps {
  children: React.ReactNode;
}

export interface UserContextProps {
  screen: string | undefined;
  canLogin: boolean;
  isSuccessfulSignUp: boolean;
  isSuccessfulPassword: boolean;
  isError: boolean;
  showAlert: boolean;
  step: number;
  signUpTitle: string[];
  passwordTitle: string[];
  signUpData: SignUpData;
  canContinueSignUp: boolean;
  canContinuePassword: boolean;
  handleScreens: (screen: string) => void;
  setIsSuccessfulSignUp: (isSuccessfulSignUp: boolean) => void;
  setIsSuccessfulPassword: (isSuccessfulPassword: boolean) => void;
  setIsError: (isError: boolean) => void;
  setShowAlert: (showAlert: boolean) => void;
  setStep: (step: number) => void;
  setSignUpData: (signUpData: SignUpData) => void;
  LoginUser: (emaiil: string, password: string) => {};
}

export interface SignUpData {
  email: string;
  fullName: string;
  password: string;
  companyName: string;
  space: string;
  industry: string;
  nbOfEmployees: string;
  accpetTerms: boolean;
}

export interface PasswordData {
  email: string;
  password: string;
}

//#endregion

//#region Drawer Context Types

export interface DrawerProviderProps {
  children: React.ReactNode;
}

export type handleDataChanages = (
  title: string,
  component: JSX.Element
) => void;

export interface mainItems {
  icon: string;
  title: string;
  component: JSX.Element;
}
export interface subItems {
  text: string;
  iconColor: string;
  title: string;
}

export interface NeededData {
  title: string;
  component?: JSX.Element | null;
}

export interface subItemsArray extends Array<subItems> {}
export interface mainItemsArray extends Array<mainItems> {}

export interface DrawerContextProps {
  mainItems: mainItemsArray;
  subItems: subItemsArray;
  data: NeededData;
  handleChanges: handleDataChanages;
}

//#endregion

//#region Home Context Types

export interface HomeProviderProps {
  children: React.ReactNode;
}

export interface HomeContextProps {
  projectList: {
    name: string;
    iconColor: string;
  }[];
  taskList: TaskListProps[];
  selectedContent: string;
  members: Members[];

  handleSelectedContent: (selected: string) => void;
  handleTaskPriority: (priority: string) => string;
  handleTaskIcons: (icon: string) => string;
}

export interface TaskListProps {
  priority: string;
  icon: string;
  title: string;
  description: string;
  projectName: string;
  projectNameColor: string;
}

export interface Members {
  avatar: string;
  name: string;
  owner: boolean;
  email: string;
  status: string;
}
//#endregion
