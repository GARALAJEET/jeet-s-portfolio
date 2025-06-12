import { Card } from "@/components/ui/card"

const technologies = [
  {
    category: "Languages",
    skills: ["Java ", "Python", "SQL"],
  },
  {
    category: "Core Concepts",
    skills: ["Object-Oriented Programming ", "SQL Query Writing", "Data Structures and Algorithms","Software Engineering"],
  },
  {
    category: "Frontend ",
    skills: ["HTML ", "CSS", "JavaScript","TailwindCSS" , "React", "Next.js","Bootstrap"],
  },
  {
    category: "Backend",
    skills: [ "Spring boot","Spring Framework","Spring MVC", "Spring Security","Node.js", "Express","REST APIs"],
  },
  {
    category: "Database and ORMs",
    skills: ["MySql", "PostgreSQL", "Hibernate(ORM)","SQLite"],
  },
  {
    category: "Tools and Platforms",
    skills: ["Git", "GitHub", "Maven", "Postman", "Vercel", "VSCode", "IntelliJ IDEA"],
  },
 
]

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6">
          <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}
