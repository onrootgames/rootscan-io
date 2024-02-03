import { Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import AddToMetamask from "./add-to-metamask"
import { BackToTopButton } from "./back-to-top"
import Container from "./container"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"

export default function SiteFooter() {
  return (
    <div className="flex w-full flex-col rounded-b-2xl bg-white py-4 dark:bg-black/50">
      <Container className="hidden md:block">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 text-sm">
          <div />
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
            {/* <ThemeToggle /> */}
            <BackToTopButton />
          </div>
        </div>
      </Container>
      <div className="hidden h-[1px] w-full border-b md:block" />
      <Container>
        <p className="py-4 text-xs">
          Rootscan is a Block Explorer for The Root Network.
        </p>
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/site-logos/rootscan-logo.png"
                width={190}
                height={190}
                priority
                unoptimized
                className="size-8 rounded-lg invert dark:invert-0"
                alt="rootscan_logo"
              />
              <span className="text-md font-bold">rootscan</span>
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
            <AddToMetamask />
            <Link
              href="https://github.com/rootscan/rootscan-io"
              target="_blank"
            >
              <Button variant="ghost" size="icon">
                <Github />
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </div>
  )
}
