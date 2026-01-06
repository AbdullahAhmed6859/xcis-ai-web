import { Button } from "@/components/ui/button";

function SpeakWithOurTeamButton() {
  return (
    <>
      <Button className="bg-dark-blue sm:hidden block" size="sm">
        Speak WIth Our Team
      </Button>

      <Button className="bg-dark-blue sm:block hidden">
        Speak WIth Our Team
      </Button>
    </>
  );
}

export default SpeakWithOurTeamButton;
