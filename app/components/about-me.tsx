import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react"

export default function AboutMe() {
  return (
    <div className="container px-4 md:px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">About Me</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Personal Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
              I'm a passionate Full-Stack Developer with a strong interest in building scalable and user-friendly web applications. While I may not have professional experience yet, I've spent countless hours honing my skills by working on personal projects, learning modern development tools, and solving real-world problems through code.
              </p>
              <p className="text-muted-foreground leading-relaxed">
             I enjoy turning ideas into reality using clean, efficient, and maintainable code. From designing responsive frontends to building robust backend systems, I love every part of the development process and strive to continuously improve with each project
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="secondary">Problem Solver</Badge>
                <Badge variant="secondary">Team Player</Badge>
                {/* <Badge variant="secondary">Open Source Contributor</Badge> */}
                {/* <Badge variant="secondary">Continuous Learner</Badge> */}
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h3 className="font-semibold">Bachelor of Computer Science</h3>
                    <p className="text-sm text-muted-foreground">Lj Institute of Engineering and Technology</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      2023 - 2027
                    </div>
                  </div>
                  {/* <Badge variant="outline" className="ml-2">
                   
                  </Badge> */}
                </div>
                <p className="text-sm text-muted-foreground">
                 ’m a passionate Java Developer with a strong foundation in object-oriented programming, data structures, and web development. I recently graduated Magna Cum Laude, where I focused on building backend systems and solving algorithmic problems through clean, efficient Java code.
                </p>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  Certifications
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <a href="https://coursera.org/share/fed81dbeebcab1cec21ee46867c29c94" className="text-sm" target="_black">Introduction to Java</a>
                    <Badge variant="secondary" className="text-xs">
                      2024
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <a href="https://coursera.org/share/28c57b8af87170e7f9ee088c04a74ace" className="text-sm" target="_black">Inheritance and Data Structures in Java</a>
                    <Badge variant="secondary" className="text-xs">
                      2024
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <a href="https://coursera.org/share/df413ae7a3a6db480c3355955e87d639" className="text-sm" target="_black">Introduction to HTML, CSS, & JavaScript</a>
                    <Badge variant="secondary" className="text-xs">
                      2024
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Summary */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Core Competencies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <h4 className="font-semibold mb-2 text-sm">Frontend Development</h4>
                <p className="text-sm text-muted-foreground">
                 I have medium-level front-end skills, using AI tools to speed up UI development. I build responsive, clean interfaces with HTML, CSS, JavaScript, and React, and often integrate APIs efficiently using Axios to connect with backend services.
                </p>
              </div>
              <div></div>
              <div>
                <h4 className="font-semibold mb-2 text-sm">Backend Development</h4>
                <p className="text-sm text-muted-foreground">
                    I'm skilled in backend development, with strong command over Java and Spring Boot. I build secure, scalable APIs, manage databases using JPA and Hibernate, and implement robust authentication, clean architecture, and efficient request handling for high-performance applications.
                </p>
              </div>
              
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
