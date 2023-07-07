import CardHome from "../CardHome";
import sommeliers from "./TeamData";

function Team() {
  return (
    <div className="flex flex-col justify-center">
      <h4 className="text-3xl text-center py-10">
        Notre équipe d'incroyables sommeliers
      </h4>
      <div className="block md:flex justify-around">
        {sommeliers.map((sommelier) => (
          <CardHome key={sommelier.id} props={sommelier} />
        ))}
      </div>
    </div>
  );
}

export default Team;
