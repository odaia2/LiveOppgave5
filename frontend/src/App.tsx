import { useState } from "react";
import Grid from "./components/Grid";
import Total from "./components/Total";
import type { Student } from "./components/Types";

const initialStudents = [
    { id: "1", name: "Ola Normann" },
    { id: "2", name: "Kari Normann" },
];

function App() {
    
    const [students, setStudents] = useState<Student[]>(initialStudents ?? []);
    const [nextId, setNextId] = useState<number>(initialStudents.length + 1); 

    
    const onAddStudent = (student: { name: string }) => {
        const newStudent = { id: nextId.toString(), ...student }; 
        setStudents((prev) => [...prev, newStudent]);
        setNextId((prevId) => prevId + 1); 
    };

    
    const onDeleteStudent = (id: string) => {
        setStudents((prev) => prev.filter((student) => student.id !== id));
    };

    return (
        <main>
            <Grid students={students} onAddStudent={onAddStudent} onDeleteStudent={onDeleteStudent} />
            <Total total={students.length} />
        </main>
    );
}

export default App;
