import { useState } from "react";

type AddStudentFormProps = {
    onAddStudent: ({ name }: { name: string }) => void;
  };

export default function AddStudentForm({ onAddStudent }: AddStudentFormProps) {

  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return
      onAddStudent({ name });
      setName("");
    
  };

  return (
    <form className="add-student-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Navne</label>
      <input
        type="text"
        id="name"
        placeholder="Studentens navn"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit">legge til student</button>
    </form>
  );
}
