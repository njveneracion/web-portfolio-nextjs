import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export default function Note() {
  return (
    <Alert className="max-w-sm shadow-lg text-yellow-500">
      <AlertTitle className="font-normal">
        Note: This Website is a Work in Progress
      </AlertTitle>
    </Alert>
  )
}
