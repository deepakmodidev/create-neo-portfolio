import { SKILLS } from "@/app/constants/data";

const Skills = () => (
  <section id="skills">
    <div className="flex items-center py-2 px-4 border-b border-dashed border-border">
      <h2 className="text-2xl font-semibold flex items-center">
        technical skills.
      </h2>
    </div>
    <div className="relative p-4">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(40px,1fr))] gap-1">
        {SKILLS.map((skill) => (
          <button
            key={skill}
            aria-label={skill}
            title={skill}
            className="w-10 h-10 rounded-full flex items-center justify-center"
          >
            <img
              src={`https://skillicons.dev/icons?i=${skill}`}
              alt={skill}
              width={32}
              height={32}
              decoding="async"
            />
          </button>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
