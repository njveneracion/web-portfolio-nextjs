import { FiGithub } from "react-icons/fi";
import { Button } from "@/components/ui/button";

export function GithubButton() {
  return (
    <a
      href="https://github.com/njveneracion"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        variant="outline"
        size="icon"
        aria-label="Submit"
      >
        <FiGithub />
      </Button>
    </a>
  )
}
