import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import LeetCodeStats from "./components/leetcode-stats"
import AboutMe from "./components/about-me"
import ResumeDownload from "./components/resume-download"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Jeet.dev</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about-me" className="transition-colors hover:text-foreground/80">
                About Me
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
               <Link href="#Tech_stack" className="transition-colors hover:text-foreground/80">
                Tech stack
              </Link>
               <Link href="#LeetCode_Progress" className="transition-colors hover:text-foreground/80">
                LeetCode Progress
              </Link>
            </nav>
          </div>
          <ResumeDownload />
        </div>
      </header>

      <main className="container px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                 Hi, I'm Jeet Garala 👋
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Building digital experiences with modern technologies. Focused on creating elegant solutions to complex problems.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="https://github.com/GARALAJEET" target="_blank">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/jeet-garala-9235602bb/" target="_blank">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://x.com/jeet_garala" target="_blank">
                  <Button variant="outline" size="icon">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
                <Link href="mailto:jeetgarala2603@gmail.com" target="_blank">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="about-me" className="py-12 md:py-24 lg:py-32">
          <AboutMe />
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="AuthSystem"
                description="AuthSystem is a secure user authentication platform that supports user registration with email verification, login with validation, and secure password handling. It includes a structured backend with layered validation and email service integration. The frontend delivers smooth user interactions, and user data is managed and stored securely. The system is designed for reliability and scalability."
                image="D:\Project\portfolio\app\components\oauth.jpeg"
                link="https://github.com/GARALAJEET/authSystem"
                tags={["Spring boot", "MySql", " basic Web development", "API"]}
              />
              <ProjectCard
                title="The Task Tracker"
                description="The Task Tracker CLI is a simple command-line interface (CLI) application built using Java Spring Boot. This project allows users to track tasks efficiently by performing CRUD operations such as adding, updating, deleting, and displaying tasks. The task list is stored in a MySQL database, and tasks are categorized into different statuses: To-Do, In-Progress, and Done."
                image="D:\Project\portfolio\app\components\oauth.jpeg/"
                link="https://github.com/GARALAJEET/Task-Tracker-CLI"
                tags={["Spring boot", "API", "MySql"]}
              />
              <ProjectCard
                title="Rio Writes"
                description="
Rio Writes is a backend system built for a blogging and content management platform. It supports user registration with email OTP verification and provides full CRUD functionality for users, posts, categories, and comments. The application is tested via Postman and structured for scalability and maintainability."

                image="/placeholder.svg?height=400&width=600"
                link="https://github.com/GARALAJEET/Rio_Writes.git"
                tags={["Spring boot", "JWT", "MySql", "API","JavaMailSender" ]}
              />
            </div>
          </div>
        </section>

        <section id="Tech_stack"className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>

        <section id="LeetCode_Progress"className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              LeetCode Progress
            </h2>
            <LeetCodeStats />
          </div>
        </section>
      </main>

     
    </div>
  )
}
