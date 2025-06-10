"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

type ProjectContextType = {
  projectId: string;
  projectName: string;
  setProject: (id: string, name: string) => void;
};

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [projectId, setProjectId] = useState("");
  const [projectName, setProjectName] = useState("");

  // Load from localStorage
  useEffect(() => {
    const savedId = localStorage.getItem("projectId");
    const savedName = localStorage.getItem("projectName");
    if (savedId) setProjectId(savedId);
    if (savedName) setProjectName(savedName);
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (projectId) localStorage.setItem("projectId", projectId);
    if (projectName) localStorage.setItem("projectName", projectName);
  }, [projectId, projectName]);

  const setProject = (id: string, name: string) => {
    setProjectId(id);
    setProjectName(name);
  };

  return (
    <ProjectContext.Provider value={{ projectId, projectName, setProject }}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  const context = useContext(ProjectContext);
  if (!context) throw new Error("useProject must be used within ProjectProvider");
  return context;
}
