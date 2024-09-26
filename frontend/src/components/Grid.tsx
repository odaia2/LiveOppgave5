import Student from "./Student";
import type { Student as StudentProp } from "./Types";
import AddStudentForm from "./AddStudentForm";

type GridProps = {
    students: StudentProp[];
    onAddStudent: ({ name }: { name: string }) => void;
};

export default function Grid(props: GridProps) {
    const { students, onAddStudent } = props;
    // props.students ?? []
    //     const [students, setStudents] = useState<StudentProp[]>(props.students ?? []);

    // const onAddStudent = (student: { name: string }) => {
    //     setStudents((prev) => [...prev, { id: crypto.randomUUID(), ...student }]);
    // };

    return (
        <section>
            <article className="grid">
                {students.map((student) => (
                    <Student key={student.id} name={student.name} id={student.id} />
                ))}
            </article>
            <AddStudentForm onAddStudent={onAddStudent} />
        </section>
    );
}