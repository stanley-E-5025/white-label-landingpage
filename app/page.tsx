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
                        width="25"
                        height="25"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
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
                        width="25"
                        height="25"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.85357 3.85355L7.65355 3.05353C8.2981 2.40901 9.42858 1.96172 10.552 1.80125C11.1056 1.72217 11.6291 1.71725 12.0564 1.78124C12.4987 1.84748 12.7698 1.97696 12.8965 2.10357C13.0231 2.23018 13.1526 2.50125 13.2188 2.94357C13.2828 3.37086 13.2779 3.89439 13.1988 4.44801C13.0383 5.57139 12.591 6.70188 11.9464 7.34645L7.49999 11.7929L6.35354 10.6465C6.15827 10.4512 5.84169 10.4512 5.64643 10.6465C5.45117 10.8417 5.45117 11.1583 5.64643 11.3536L7.14644 12.8536C7.34171 13.0488 7.65829 13.0488 7.85355 12.8536L8.40073 12.3064L9.57124 14.2572C9.65046 14.3893 9.78608 14.4774 9.9389 14.4963C10.0917 14.5151 10.2447 14.4624 10.3535 14.3536L12.3535 12.3536C12.4648 12.2423 12.5172 12.0851 12.495 11.9293L12.0303 8.67679L12.6536 8.05355C13.509 7.19808 14.0117 5.82855 14.1887 4.58943C14.2784 3.9618 14.2891 3.33847 14.2078 2.79546C14.1287 2.26748 13.9519 1.74482 13.6035 1.39645C13.2552 1.04809 12.7325 0.871332 12.2045 0.792264C11.6615 0.710945 11.0382 0.721644 10.4105 0.8113C9.17143 0.988306 7.80189 1.491 6.94644 2.34642L6.32322 2.96968L3.07071 2.50504C2.91492 2.48278 2.75773 2.53517 2.64645 2.64646L0.646451 4.64645C0.537579 4.75533 0.484938 4.90829 0.50375 5.0611C0.522563 5.21391 0.61073 5.34954 0.742757 5.42876L2.69364 6.59928L2.14646 7.14645C2.0527 7.24022 2.00002 7.3674 2.00002 7.50001C2.00002 7.63261 2.0527 7.75979 2.14646 7.85356L3.64647 9.35356C3.84173 9.54883 4.15831 9.54883 4.35357 9.35356C4.54884 9.1583 4.54884 8.84172 4.35357 8.64646L3.20712 7.50001L3.85357 6.85356L6.85357 3.85355ZM10.0993 13.1936L9.12959 11.5775L11.1464 9.56067L11.4697 11.8232L10.0993 13.1936ZM3.42251 5.87041L5.43935 3.85356L3.17678 3.53034L1.80638 4.90074L3.42251 5.87041ZM2.35356 10.3535C2.54882 10.1583 2.54882 9.8417 2.35356 9.64644C2.1583 9.45118 1.84171 9.45118 1.64645 9.64644L0.646451 10.6464C0.451188 10.8417 0.451188 11.1583 0.646451 11.3535C0.841713 11.5488 1.1583 11.5488 1.35356 11.3535L2.35356 10.3535ZM3.85358 11.8536C4.04884 11.6583 4.04885 11.3417 3.85359 11.1465C3.65833 10.9512 3.34175 10.9512 3.14648 11.1465L1.14645 13.1464C0.95119 13.3417 0.951187 13.6583 1.14645 13.8535C1.34171 14.0488 1.65829 14.0488 1.85355 13.8536L3.85358 11.8536ZM5.35356 13.3535C5.54882 13.1583 5.54882 12.8417 5.35356 12.6464C5.1583 12.4512 4.84171 12.4512 4.64645 12.6464L3.64645 13.6464C3.45119 13.8417 3.45119 14.1583 3.64645 14.3535C3.84171 14.5488 4.1583 14.5488 4.35356 14.3535L5.35356 13.3535ZM9.49997 6.74881C10.1897 6.74881 10.7488 6.1897 10.7488 5.5C10.7488 4.8103 10.1897 4.25118 9.49997 4.25118C8.81026 4.25118 8.25115 4.8103 8.25115 5.5C8.25115 6.1897 8.81026 6.74881 9.49997 6.74881Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
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
                        width="25"
                        height="25"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.07926 0.222253C7.31275 -0.007434 7.6873 -0.007434 7.92079 0.222253L14.6708 6.86227C14.907 7.09465 14.9101 7.47453 14.6778 7.71076C14.4454 7.947 14.0655 7.95012 13.8293 7.71773L13 6.90201V12.5C13 12.7761 12.7762 13 12.5 13H2.50002C2.22388 13 2.00002 12.7761 2.00002 12.5V6.90201L1.17079 7.71773C0.934558 7.95012 0.554672 7.947 0.32229 7.71076C0.0899079 7.47453 0.0930283 7.09465 0.32926 6.86227L7.07926 0.222253ZM7.50002 1.49163L12 5.91831V12H10V8.49999C10 8.22385 9.77617 7.99999 9.50002 7.99999H6.50002C6.22388 7.99999 6.00002 8.22385 6.00002 8.49999V12H3.00002V5.91831L7.50002 1.49163ZM7.00002 12H9.00002V8.99999H7.00002V12Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
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
