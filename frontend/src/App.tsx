import { useState } from "react";
import Grid from "./components/Grid";
import Total from "./components/Total";
import type { Student } from "./components/Types";

const intitalStudent = [
    { id: "1", name: "Ola Normann" },
    { id: "2", name: "Kari Normann" },
];

function App() {
    // students ?? []
    const [students, setStudents] = useState<Student[]>(intitalStudent ?? []);

    const onAddStudent = (student: { name: string }) => {
        setStudents((prev) => [...prev, { id: crypto.randomUUID(), ...student }]);
    };

    return (
        <main>
            {/* <Student name="Marius" id="123" /> */}
            <Grid students={students} onAddStudent={onAddStudent} />
            <Total total={students.length} />
        </main>
    );
}

export default App;