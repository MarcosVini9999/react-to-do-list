import { ActivityCard, ToDoList } from "@/components";
import React from "react";

export const Inbox: React.FC = () => {
  const projects = [
    { label: "The Shawshank Redemption" },
    { label: "The Godfather" },
    { label: "The Godfather: Part II" },
    { label: "The Dark Knight" },
    { label: "12 Angry Men" },
    { label: "Schindler's List" },
    { label: "Pulp Fiction" },
    {
      label: "The Lord of the Rings: The Return of the King",
    },
    { label: "The Good, the Bad and the Ugly" },
    { label: "Fight Club" },
    {
      label: "The Lord of the Rings: The Fellowship of the Ring",
    },
    {
      label: "Star Wars: Episode V - The Empire Strikes Back",
    },
    { label: "Forrest Gump" },
    { label: "Inception" },
    {
      label: "The Lord of the Rings: The Two Towers",
    },
    { label: "One Flew Over the Cuckoo's Nest" },
    { label: "Goodfellas" },
    { label: "The Matrix" },
    { label: "Seven Samurai" },
    {
      label: "Star Wars: Episode IV - A New Hope",
    },
  ];

  return (
    <React.Fragment>
      <ActivityCard actionType="add" projects={projects} />
      <ToDoList
        tasks={[
          {
            title: "test",
            dateTime: "2018-01-01T00:00",
            project: projects[1],
          },
          {
            title: "test",
            dateTime: "2018-01-01T00:00",
            project: projects[3],
          },
        ]}
        projects={projects}
      />
    </React.Fragment>
  );
};
