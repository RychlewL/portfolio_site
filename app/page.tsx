import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">Lucas Rychlewski</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#experience" className="transition-colors hover:text-foreground/80">
                Experience
              </Link>
              <Link href="#education" className="transition-colors hover:text-foreground/80">
                Education
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <nav className="flex items-center">
              <Link href="https://github.com" target="_blank" rel="noreferrer" className="w-9 px-0">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/lucas-rychlewski-epitech"
                target="_blank"
                rel="noreferrer"
                className="w-9 px-0"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </nav>
            <Button asChild size="sm">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-10">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 flex flex-col items-center text-center">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4">
            <Avatar className="h-24 w-24 border-4 border-background">
              <AvatarImage src="/images/profile.jpeg" alt="Lucas Rychlewski" />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">Lucas Rychlewski</h1>
            <h2 className="text-xl text-muted-foreground sm:text-2xl">Student at Epitech Paris - Year 3</h2>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>91370 Verrières-le-Buisson, Essonne France</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary">C/C++</Badge>
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">JavaScript</Badge>
              <Badge variant="secondary">Java</Badge>
              <Badge variant="secondary">Shell</Badge>
            </div>
            <p className="text-muted-foreground max-w-[42rem]">
              Software Engineering student with strong skills in Python, and C++. Experienced in Embedded Systems
              Development and problem-solving, seeking opportunities to apply my knowledge in real-world projects and
              grow within a dynamic tech team.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/resume.pdf" target="_blank">
                  Download CV
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 scroll-mt-14">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground mb-4">
                I'm a passionate software engineering student currently in my third year at Epitech Paris, one of the
                leading European IT schools known for its hands-on, project-based learning approach.
              </p>
              <p className="text-lg text-muted-foreground">
                With strong skills in algorithmic problem-solving and programming languages like C++, Python, and
                JavaScript, I'm particularly interested in embedded systems development and graphics programming. I'm
                seeking opportunities to apply my knowledge in real-world projects and grow within a dynamic tech team.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 scroll-mt-14">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Internship</h3>
                      <p className="text-muted-foreground">Schneider Electrics</p>
                    </div>
                    <div className="text-muted-foreground mt-2 md:mt-0">
                      <p>2023 (6 months)</p>
                      <p>Meliana València, Spain</p>
                    </div>
                  </div>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Worked on embedded systems and the centralisation of production data from multiple assembly lines
                    </li>
                    <li>Participated on artificial intelligence projects linked to improving equipment reliability</li>
                    <li>Helped with the creation of the maintenance warehouse inventory management tool</li>
                    <li>All of which helped greatly increasing production productivity</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-12 scroll-mt-14">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Master degree in Computer Sciences & Information Technology</h3>
                      <p className="text-muted-foreground">Epitech, Paris</p>
                    </div>
                    <div className="text-muted-foreground mt-2 md:mt-0">
                      <p>2022 - 2027</p>
                    </div>
                  </div>
                  <p>
                    Studying at one of the leading European IT schools known for its hands-on, project-based learning.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">General Baccalaureate</h3>
                      <p className="text-muted-foreground">Marie Curie High-School, Sceaux 92330 (South of Paris)</p>
                    </div>
                    <div className="text-muted-foreground mt-2 md:mt-0">
                      <p>2022</p>
                    </div>
                  </div>
                  <p>
                    General Baccalaureate diploma with honors and specializations in Physics and Chemistry (PC) and
                    Computer Science (NSI)
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 scroll-mt-14">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Skills & Expertise</h2>
            <div className="max-w-3xl mx-auto">
              <Tabs defaultValue="technical" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="technical">Technical</TabsTrigger>
                  <TabsTrigger value="languages">Languages</TabsTrigger>
                  <TabsTrigger value="soft">Soft Skills</TabsTrigger>
                </TabsList>
                <TabsContent value="technical" className="mt-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center p-4 border rounded-lg">
                      <span className="font-medium">C/C++</span>
                      <span className="text-sm text-muted-foreground">Advanced</span>
                    </div>
                    <div className="flex flex-col items-center p-4 border rounded-lg">
                      <span className="font-medium">Python</span>
                      <span className="text-sm text-muted-foreground">Advanced</span>
                    </div>
                    <div className="flex flex-col items-center p-4 border rounded-lg">
                      <span className="font-medium">JavaScript</span>
                      <span className="text-sm text-muted-foreground">Intermediate</span>
                    </div>
                    <div className="flex flex-col items-center p-4 border rounded-lg">
                      <span className="font-medium">Java</span>
                      <span className="text-sm text-muted-foreground">Intermediate</span>
                    </div>
                    <div className="flex flex-col items-center p-4 border rounded-lg">
                      <span className="font-medium">Shell Scripting</span>
                      <span className="text-sm text-muted-foreground">Intermediate</span>
                    </div>
                    <div className="flex flex-col items-center p-4 border rounded-lg">
                      <span className="font-medium">Git & GitHub</span>
                      <span className="text-sm text-muted-foreground">Advanced</span>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="languages" className="mt-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center p-4 border rounded-lg">
                      <span className="font-medium">French</span>
                      <span className="text-sm text-muted-foreground">Fluent</span>
                    </div>
                    <div className="flex flex-col items-center p-4 border rounded-lg">
                      <span className="font-medium">English</span>
                      <span className="text-sm text-muted-foreground">Fluent</span>
                    </div>
                    <div className="flex flex-col items-center p-4 border rounded-lg">
                      <span className="font-medium">Spanish</span>
                      <span className="text-sm text-muted-foreground">Intermediate</span>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="soft" className="mt-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center p-4 border rounded-lg">
                      <span className="font-medium">Algorithmic</span>
                    </div>
                    <div className="flex flex-col items-center p-4 border rounded-lg">
                      <span className="font-medium">Problem Solving</span>
                    </div>
                    <div className="flex flex-col items-center p-4 border rounded-lg">
                      <span className="font-medium">Strategic Planning</span>
                    </div>
                    <div className="flex flex-col items-center p-4 border rounded-lg">
                      <span className="font-medium">Graphics Programming</span>
                    </div>
                    <div className="flex flex-col items-center p-4 border rounded-lg">
                      <span className="font-medium">Communication</span>
                    </div>
                    <div className="flex flex-col items-center p-4 border rounded-lg">
                      <span className="font-medium">Microsoft Office Tools</span>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 scroll-mt-14">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="overflow-hidden">
                <div className="aspect-video bg-muted">
                  <img
                    src="/images/image-compressor.png"
                    alt="Image Compressor Project"
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Image Compressor</h3>
                  <p className="text-muted-foreground mb-4">
                    Creation of a tool that reduces image file sizes by optimizing data storage while maintaining visual
                    quality.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge>Haskell</Badge>
                    <Badge>Image Processing</Badge>
                    <Badge>Optimization</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://github.com" target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-video bg-muted">
                  <img
                    src="/images/circuit-simulator.png"
                    alt="NanoTekSpice Project"
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">NanoTekSpice</h3>
                  <p className="text-muted-foreground mb-4">
                    Creation of a basic circuit simulator in C++ that simulates logic gates and electronic components
                    based on user input.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge>C++</Badge>
                    <Badge>Circuit Simulation</Badge>
                    <Badge>Logic Gates</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://github.com" target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 scroll-mt-14">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
            <div className="max-w-md mx-auto">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <a href="mailto:lucas.rychlewski@epitech.eu" className="hover:underline">
                        lucas.rychlewski@epitech.eu
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-muted-foreground" />
                      <a href="tel:+33631661528" className="hover:underline">
                        +33 0631661528
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Linkedin className="h-5 w-5 text-muted-foreground" />
                      <a
                        href="https://www.linkedin.com/in/lucas-rychlewski-epitech"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        linkedin.com/in/lucas-rychlewski-epitech
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-muted-foreground" />
                      <span>91370 Verrières-le-Buisson, Essonne France</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* References Section */}
        <section id="references" className="py-12 scroll-mt-14">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">References</h2>
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div>
                      <h3 className="text-xl font-bold">Manuel Moreno González</h3>
                      <p className="text-muted-foreground">Schneider Electric Spain</p>
                      <p className="text-muted-foreground">Industrial Engineer</p>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <p className="text-muted-foreground">References available upon request</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Lucas Rychlewski. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/lucas-rychlewski-epitech"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

