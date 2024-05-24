import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            {siteConfig.author}.
          </a>
        </p>

        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          © 2024 SCHOLA, Inc. All rights reserved.
        </p>

        <div className="flex space-x-4">
          <a
            href="/privacy-policy"
            className="text-sm font-medium underline underline-offset-4 text-muted-foreground"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="text-sm font-medium underline underline-offset-4 text-muted-foreground"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
