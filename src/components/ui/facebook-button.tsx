import { Button } from "@/components/ui/button"
import { GrFacebookOption } from "react-icons/gr";

export function FacebookButton() {

  return (
    <a
      href="https://www.facebook.com/njveneracionn"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        variant="outline"
        size="icon"
        aria-label="Submit"
      >
        <GrFacebookOption className="text-blue-600" />
      </Button>
    </a>
  )
}

