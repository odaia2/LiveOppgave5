import Avatar from "./Avatar";
import type { Student as Studentsprops } from "./Types";




export default function Student(props: Studentsprops) {

    const {id, name} = props;
  return (
    <div>
        <Avatar name={name}/>
        <p className="id">{id}</p>
        <p className="student-name">{name}</p>
        
    </div>
  )
}
