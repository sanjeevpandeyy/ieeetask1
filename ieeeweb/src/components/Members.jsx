import FacultyMembers from "./members/FacultyMembers";
import TeamHeads from "./members/TeamHeads";
import TeamMembers from "./members/TeamMembers";

export default function Members() {
  return (
    <section className="py-20 px-6 bg-[#dfe4f3]">

    
      <FacultyMembers />
    
      <TeamHeads />

      <TeamMembers />

    </section>
  );
}