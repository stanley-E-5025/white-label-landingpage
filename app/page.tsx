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
              href="https://schola-app.vercel.app"
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
                    width="25"
                    height="25"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.8536 1.14645C11.6583 0.951184 11.3417 0.951184 11.1465 1.14645L3.71455 8.57836C3.62459 8.66832 3.55263 8.77461 3.50251 8.89155L2.04044 12.303C1.9599 12.491 2.00189 12.709 2.14646 12.8536C2.29103 12.9981 2.50905 13.0401 2.69697 12.9596L6.10847 11.4975C6.2254 11.4474 6.3317 11.3754 6.42166 11.2855L13.8536 3.85355C14.0488 3.65829 14.0488 3.34171 13.8536 3.14645L11.8536 1.14645ZM4.42166 9.28547L11.5 2.20711L12.7929 3.5L5.71455 10.5784L4.21924 11.2192L3.78081 10.7808L4.42166 9.28547Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
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
                    width="25"
                    height="25"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 2.5C3 2.22386 3.22386 2 3.5 2H9.08579C9.21839 2 9.34557 2.05268 9.43934 2.14645L11.8536 4.56066C11.9473 4.65443 12 4.78161 12 4.91421V12.5C12 12.7761 11.7761 13 11.5 13H3.5C3.22386 13 3 12.7761 3 12.5V2.5ZM3.5 1C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V4.91421C13 4.51639 12.842 4.13486 12.5607 3.85355L10.1464 1.43934C9.86514 1.15804 9.48361 1 9.08579 1H3.5ZM4.5 4C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5H7.5C7.77614 5 8 4.77614 8 4.5C8 4.22386 7.77614 4 7.5 4H4.5ZM4.5 7C4.22386 7 4 7.22386 4 7.5C4 7.77614 4.22386 8 4.5 8H10.5C10.7761 8 11 7.77614 11 7.5C11 7.22386 10.7761 7 10.5 7H4.5ZM4.5 10C4.22386 10 4 10.2239 4 10.5C4 10.7761 4.22386 11 4.5 11H10.5C10.7761 11 11 10.7761 11 10.5C11 10.2239 10.7761 10 10.5 10H4.5Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
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
                    width="25"
                    height="25"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.9 0.499976C13.9 0.279062 13.7209 0.0999756 13.5 0.0999756C13.2791 0.0999756 13.1 0.279062 13.1 0.499976V1.09998H12.5C12.2791 1.09998 12.1 1.27906 12.1 1.49998C12.1 1.72089 12.2791 1.89998 12.5 1.89998H13.1V2.49998C13.1 2.72089 13.2791 2.89998 13.5 2.89998C13.7209 2.89998 13.9 2.72089 13.9 2.49998V1.89998H14.5C14.7209 1.89998 14.9 1.72089 14.9 1.49998C14.9 1.27906 14.7209 1.09998 14.5 1.09998H13.9V0.499976ZM11.8536 3.14642C12.0488 3.34168 12.0488 3.65826 11.8536 3.85353L10.8536 4.85353C10.6583 5.04879 10.3417 5.04879 10.1465 4.85353C9.9512 4.65827 9.9512 4.34169 10.1465 4.14642L11.1464 3.14643C11.3417 2.95116 11.6583 2.95116 11.8536 3.14642ZM9.85357 5.14642C10.0488 5.34168 10.0488 5.65827 9.85357 5.85353L2.85355 12.8535C2.65829 13.0488 2.34171 13.0488 2.14645 12.8535C1.95118 12.6583 1.95118 12.3417 2.14645 12.1464L9.14646 5.14642C9.34172 4.95116 9.65831 4.95116 9.85357 5.14642ZM13.5 5.09998C13.7209 5.09998 13.9 5.27906 13.9 5.49998V6.09998H14.5C14.7209 6.09998 14.9 6.27906 14.9 6.49998C14.9 6.72089 14.7209 6.89998 14.5 6.89998H13.9V7.49998C13.9 7.72089 13.7209 7.89998 13.5 7.89998C13.2791 7.89998 13.1 7.72089 13.1 7.49998V6.89998H12.5C12.2791 6.89998 12.1 6.72089 12.1 6.49998C12.1 6.27906 12.2791 6.09998 12.5 6.09998H13.1V5.49998C13.1 5.27906 13.2791 5.09998 13.5 5.09998ZM8.90002 0.499976C8.90002 0.279062 8.72093 0.0999756 8.50002 0.0999756C8.2791 0.0999756 8.10002 0.279062 8.10002 0.499976V1.09998H7.50002C7.2791 1.09998 7.10002 1.27906 7.10002 1.49998C7.10002 1.72089 7.2791 1.89998 7.50002 1.89998H8.10002V2.49998C8.10002 2.72089 8.2791 2.89998 8.50002 2.89998C8.72093 2.89998 8.90002 2.72089 8.90002 2.49998V1.89998H9.50002C9.72093 1.89998 9.90002 1.72089 9.90002 1.49998C9.90002 1.27906 9.72093 1.09998 9.50002 1.09998H8.90002V0.499976Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
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
                    We continuously push the boundaries of what&apos;s possible,
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
