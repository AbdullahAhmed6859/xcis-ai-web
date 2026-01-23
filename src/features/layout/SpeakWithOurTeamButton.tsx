import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { InlineWidget } from "react-calendly";

function SpeakWithOurTeamButton({ className }: { className?: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={cn("bg-dark-blue", className)}>
          Speak WIth Our Team
        </Button>
      </DialogTrigger>
      <DialogContent className="flex h-[calc(100vh-5rem)] min-w-[calc(100vw-5rem)] flex-col justify-between gap-0 bg-[#ffff]">
        <InlineWidget
          url="https://calendly.com/ahmer-rafiq/30min?hide_gdpr_banner=1"
          className="h-full rounded-4xl"
        />
      </DialogContent>
    </Dialog>
  );
}

//  <Dialog>
//   <DialogTrigger>Open</DialogTrigger>
//   <DialogContent>
//     <DialogHeader>
//       <DialogTitle>Are you absolutely sure?</DialogTitle>
//       <DialogDescription>
//         This action cannot be undone. This will permanently delete your account
//         and remove your data from our servers.
//       </DialogDescription>
//     </DialogHeader>
//   </DialogContent>
// </Dialog>

export default SpeakWithOurTeamButton;
