import Avatar from "./Avatar";
import type { Student as StudentsProps } from "./Types";
import { useState } from "react";

export default function Student(props: StudentsProps & { onDelete: (id: string) => void }) {
  const { id, name, onDelete } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="student-item"
    >
      <Avatar name={name} />
      <p className="id">{id}</p>
      <p className="student-name">{name}</p>

      {isHovered && (
        <button className="delete-button" onClick={() => onDelete(id)}>
          Slett
        </button>
      )}
    </div>
  );
}
