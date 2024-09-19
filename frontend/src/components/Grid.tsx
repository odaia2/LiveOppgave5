import { useState } from "react";
import Student from "./Student";
import AddStudentForm from "./AddStudentForm"; 
import type { Student as StudentProp } from "./Types";

type GridProps = {
  students: StudentProp[];
};

export default function Grid({ students }: GridProps) {
  const [studentList, setStudentList] = useState<StudentProp[]>(students ?? []);

  const onAaddStudent = (student: {name: string}) => {
    setStudentList(prev => [...prev, {id: crypto.randomUUID(), ...student}]);
  };

  return (
    <section>
      <article className="grid">
        {studentList.map((student) => (
          <Student key={student.id} name={student.name} id={student.id} />
        ))}
      </article>

      <AddStudentForm onAddStudent={onAaddStudent} />
      </section>
  );
}
