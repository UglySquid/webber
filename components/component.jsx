/**
 * v0 by Vercel.
 * @see https://v0.dev/t/UaR3Qq2e88y
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 md:px-8 lg:px-12">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="text-2xl font-bold" prefetch={false}>
            John Doe
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Projects
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Contact
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Blog
            </Link>
          </nav>
          <Button variant="outline" className="md:hidden">
            <MenuIcon className="w-6 h-6" />
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section id="hero" className="bg-primary py-12 md:py-20 lg:py-32">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fadeIn">Welcome to my Portfolio</h1>
            <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground mb-8 animate-fadeIn delay-200">
              Explore my work and get in touch.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-primary-foreground text-primary hover:bg-primary/90 transition-colors animate-fadeIn delay-400"
              prefetch={false}
            >
              Learn More
            </Link>
          </div>
        </section>
        <section id="about" className="py-12 md:py-20 lg:py-32">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  Hi, I'm John Doe, a passionate web developer with a love for creating beautiful and functional
                  websites. I have experience in a variety of technologies and I'm always eager to learn more.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  In my free time, I enjoy exploring new technologies, reading about the latest industry trends, and
                  working on personal projects. I'm also an avid reader and enjoy hiking in the great outdoors.
                </p>
              </div>
              <div className="flex justify-center animate-fadeIn delay-200">
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={400}
                  alt="John Doe"
                  className="rounded-full"
                  style={{ aspectRatio: "400/400", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="bg-muted py-12 md:py-20 lg:py-32">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center animate-fadeIn">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
              <Card>
                <CardContent>
                  <img
                    src="/placeholder.svg"
                    width={400}
                    height={300}
                    alt="Project 1"
                    className="rounded-t-md animate-fadeInUp"
                    style={{ aspectRatio: "400/300", objectFit: "cover" }}
                  />
                  <div className="p-4 animate-fadeInUp delay-200">
                    <h3 className="text-xl font-bold mb-2">Project 1</h3>
                    <p className="text-muted-foreground mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna vel aliquam lacus, nisl
                      aliquam nisl vel aliquam nisl.
                    </p>
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center h-10 px-4 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors animate-fadeInUp delay-400"
                      prefetch={false}
                    >
                      Learn More
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <img
                    src="/placeholder.svg"
                    width={400}
                    height={300}
                    alt="Project 2"
                    className="rounded-t-md animate-fadeInUp delay-200"
                    style={{ aspectRatio: "400/300", objectFit: "cover" }}
                  />
                  <div className="p-4 animate-fadeInUp delay-400">
                    <h3 className="text-xl font-bold mb-2">Project 2</h3>
                    <p className="text-muted-foreground mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna vel aliquam lacus, nisl
                      aliquam nisl vel aliquam nisl.
                    </p>
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center h-10 px-4 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors animate-fadeInUp delay-600"
                      prefetch={false}
                    >
                      Learn More
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <img
                    src="/placeholder.svg"
                    width={400}
                    height={300}
                    alt="Project 3"
                    className="rounded-t-md animate-fadeInUp delay-400"
                    style={{ aspectRatio: "400/300", objectFit: "cover" }}
                  />
                  <div className="p-4 animate-fadeInUp delay-600">
                    <h3 className="text-xl font-bold mb-2">Project 3</h3>
                    <p className="text-muted-foreground mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna vel aliquam lacus, nisl
                      aliquam nisl vel aliquam nisl.
                    </p>
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center h-10 px-4 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors animate-fadeInUp delay-800"
                      prefetch={false}
                    >
                      Learn More
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="py-12 md:py-20 lg:py-32">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center animate-fadeIn">Get in Touch</h2>
            <div className="max-w-xl mx-auto animate-fadeIn delay-200">
              <form className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" type="text" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" rows={5} required />
                </div>
                <Button type="submit" className="justify-self-end animate-fadeIn delay-400">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <section className="bg-muted py-12 md:py-20 lg:py-32">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center animate-fadeIn">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
            <Card>
              <CardContent>
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={300}
                  alt="Blog Post 1"
                  className="rounded-t-md animate-fadeInUp"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="p-4 animate-fadeInUp delay-200">
                  <h3 className="text-xl font-bold mb-2">
                    <Link href="#" prefetch={false}>
                      Blog Post 1
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna vel aliquam lacus, nisl
                    aliquam nisl vel aliquam nisl.
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <CalendarDaysIcon className="w-4 h-4 mr-2" />
                    April 1, 2023
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={300}
                  alt="Blog Post 2"
                  className="rounded-t-md animate-fadeInUp delay-200"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="p-4 animate-fadeInUp delay-400">
                  <h3 className="text-xl font-bold mb-2">
                    <Link href="#" prefetch={false}>
                      Blog Post 2
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna vel aliquam lacus, nisl
                    aliquam nisl vel aliquam nisl.
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <CalendarDaysIcon className="w-4 h-4 mr-2" />
                    March 15, 2023
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={300}
                  alt="Blog Post 3"
                  className="rounded-t-md animate-fadeInUp delay-400"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="p-4 animate-fadeInUp delay-600">
                  <h3 className="text-xl font-bold mb-2">
                    <Link href="#" prefetch={false}>
                      Blog Post 3
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna vel aliquam lacus, nisl
                    aliquam nisl vel aliquam nisl.
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <CalendarDaysIcon className="w-4 h-4 mr-2" />
                    February 28, 2023
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <footer className="bg-primary text-primary-foreground py-6 px-6 md:px-8 lg:px-12">
        <div className="container mx-auto flex items-center justify-between animate-fadeIn">
          <p className="text-sm">&copy; 2023 John Doe. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function CalendarDaysIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}