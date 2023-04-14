import React, { createContext, useState } from "react";

interface HomeContextProps {
  projectList: {
    name: string;
    iconColor: string;
  }[];

  taskList: {
    priority: string;
    icon: string;
    title: string;
    description: string;
    projectName: string;
  }[];

  convertToIcon: (taskList: TaskListProps) => void;
}

interface TaskListProps {
  priority: string;
  icon: string;
  title: string;
  description: string;
  projectName: string;
}

interface HomeProviderProps {
  children: React.ReactNode;
}

const HomeContext = createContext<HomeContextProps>({} as HomeContextProps);

export const HomeProvider = ({ children }: HomeProviderProps) => {
  const [projectList, setProjectList] = useState([
    {
      name: "LD Website",
      iconColor: "#DB54FD",
    },
    {
      name: "LD Website Marketing",
      iconColor: "#61D26F",
    },
    {
      name: "Roundrush",
      iconColor: "#1FAAE9",
    },
    {
      name: "Roundrush Website",
      iconColor: "#4086E0",
    },
    {
      name: "Marketing",
      iconColor: "#7A6FEF",
    },
    {
      name: "Roundrush Dev Ops",
      iconColor: "#EEC301",
    },
    {
      name: "Social LD",
      iconColor: "#61D26F",
    },
    {
      name: "Machine Learning",
      iconColor: "#FD612C",
    },
  ]);

  const [taskList, setTaskList] = useState([
    {
      priority: "",
      icon: "",
      title: "",
      description: "",
      projectName: "",
    },
  ]);

  const handleTaskPriority = (string: string) => {};

  const handleTaskIcons = (string: string) => {};

  const convertToIcon = (taskList: TaskListProps) => {
    handleTaskPriority(taskList.priority);
    handleTaskIcons(taskList.icon);
  };

  return (
    <HomeContext.Provider value={{ projectList, taskList, convertToIcon }}>
      {children}
    </HomeContext.Provider>
  );
};

export default HomeContext;
