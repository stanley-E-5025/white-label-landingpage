import * as React from "react";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { TopButton } from "@/components/top-button";

export default function Home() {
  return (
    <>
      <main className="relative flex flex-col p-[10px]">
        <PageHeader>
          <PageHeaderHeading>Enhance Your Learning Journey</PageHeaderHeading>
          <PageHeaderDescription>
            <strong>SCHOLA</strong> provides powerful tools to help teachers and
            students organize and optimize their educational experiences.
            Accessible. Customizable. <strong>Open Source.</strong>
          </PageHeaderDescription>
          <PageActions>
            <Link
              href="/docs"
              className={cn(buttonVariants({ variant: "blue" }))}
            >
              Get Started
            </Link>
            <Link
              href="/contact-sales"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              Contact sales
            </Link>
          </PageActions>
        </PageHeader>

        <section className="overflow-hidden rounded-lg border bg-background shadow-md md:hidden md:shadow-xl">
          <Image
            src="/example_demo_dark.png"
            width={1280}
            height={727}
            alt="Mail"
            className="hidden dark:block"
          />
          <Image
            src="/example_demo.png"
            width={1280}
            height={727}
            alt="Mail"
            className="block dark:hidden"
          />
        </section>

        <section className="hidden md:flex justify-center items-center">
          <div
            className="overflow-hidden rounded-lg border bg-background shadow flex flex-row items-center justify-center"
            style={{ width: "1280px", height: "727px" }}
          >
            <Image
              src="/example_demo_dark.png"
              width={1280}
              height={727}
              alt="Mail"
              className="hidden dark:block"
            />
            <Image
              src="/example_demo.png"
              width={1280}
              height={727}
              alt="Mail"
              className="block dark:hidden"
            />
          </div>
        </section>

        <section
          id="features-section"
          className="bg-white dark:bg-gray-900 py-16 mt-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base text-green-600 dark:text-green-400 font-semibold tracking-wide uppercase">
                Use Cases
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Useful-AI Features
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 mx-auto">
                Discover how our solutions are transforming various industries
                and empowering users across the globe.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mb-4">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 10h16M4 14h16M4 18h16"
                    />
                  </svg>
                </div>
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  Idioms AI-Features
                </h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                  Evaluate your speach and vocabulary with our AI practice
                  tools. Get instant feedback. Just by speaking to your device!
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mb-4">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  Assestment AI-Generation
                </h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                  Drag and drop a documents/recordings to generate assessments.
                  No more manual grading! You can also edit at the end
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mb-4">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm0-6C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  Documents & Audio Proccessing
                </h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                  Trasncribe meetings, chat with PDF files and process adio to
                  text, with our AI tools. No more manual typing!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 overflow-hidden rounded-lg border bg-background shadow-md md:hidden md:shadow-xl">
          <Image
            src="/example_demo_dark.png"
            width={1280}
            height={727}
            alt="Mail"
            className="hidden dark:block"
          />
          <Image
            src="/example_demo.png"
            width={1280}
            height={727}
            alt="Mail"
            className="block dark:hidden"
          />
        </section>

        <section className="mt-8 hidden md:flex justify-center items-center">
          <div
            className="overflow-hidden rounded-lg border bg-background shadow flex flex-row items-center justify-center"
            style={{ width: "1280px", height: "727px" }}
          >
            <Image
              src="/example_demo_dark.png"
              width={1280}
              height={727}
              alt="Mail"
              className="hidden dark:block"
            />
            <Image
              src="/example_demo.png"
              width={1280}
              height={727}
              alt="Mail"
              className="block dark:hidden"
            />
          </div>
        </section>

        <section
          id="about-section"
          className="bg-gray-100 dark:bg-gray-800 py-16 mt-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
                Our Journey
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                From Idea to Vision
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 mx-auto">
                Discover how our journey began and the vision that drives us to
                create innovative solutions.
              </p>
            </div>
            <div className="mt-12">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                      The Beginning
                    </p>
                  </dt>
                  <div className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                    It all started with a simple idea to make technology more
                    accessible and user-friendly. Our founders envisioned a
                    platform that could transform everyday tasks into seamless
                    experiences.
                  </div>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm0-6C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
                        />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                      Our Vision
                    </p>
                  </dt>
                  <div className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                    Our vision is to create a world where technology bridges
                    gaps and brings people closer. We aim to innovate and
                    deliver solutions that empower individuals and communities,
                    fostering growth and collaboration.
                  </div>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 8h10M7 12h8m-8 4h6"
                        />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                      Innovation
                    </p>
                  </dt>
                  <div className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                    We continuously push the boundaries of what's possible,
                    leveraging the latest technologies to create innovative
                    solutions that simplify life and work.
                  </div>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 10h16M4 14h16M4 18h16"
                        />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                      Community
                    </p>
                  </dt>
                  <div className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                    Building a strong, supportive community is at the heart of
                    what we do. We believe in the power of collaboration and aim
                    to create a platform where everyone can thrive.
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section id="demo-section" className="bg-white dark:bg-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
                See it in Action
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                SCHOLA Demo
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 mx-auto">
                Watch our demo video to understand how SCHOLA can enhance your
                learning experience.
              </p>
            </div>
            <div className="mt-12 flex justify-center">
              <video
                className="w-full max-w-4xl"
                controls
                src="/path/to/your-video-file.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="mt-12">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 8h10M7 12h8m-8 4h6"
                        />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                      Idioms AI-Features
                    </p>
                  </dt>
                  <div className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                    Evaluate your speech and vocabulary with our AI practice
                    tools. Get instant feedback just by speaking to your device!
                  </div>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                      Assessment AI-Generation
                    </p>
                  </dt>
                  <div className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                    Drag and drop documents/recordings to generate assessments.
                    No more manual grading! You can also edit at the end.
                  </div>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm0-6C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
                        />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                      Documents & Audio Processing
                    </p>
                  </dt>
                  <div className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                    Transcribe meetings, chat with PDF files, and process audio
                    to text with our AI tools. No more manual typing!
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <TopButton />
      </main>
    </>
  );
}
