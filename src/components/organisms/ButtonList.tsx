import Button from "@/components/atoms/Button";

export default function ButtonList() {
  return (
    <>
      <div className="flex flex-center items-center justify-center pt-10 gap-4">
        <Button type="default" size="sm">
          Continue
        </Button>
        <Button type="default" size="default">
          Continue
        </Button>
        <Button type="default" size="lg">
          Continue
        </Button>
      </div>
      <div className="flex flex-center items-center justify-center pt-10 gap-4">
        <Button type="destructive" size="sm">
          Destructive
        </Button>
        <Button type="destructive" size="default">
          Destructive
        </Button>
        <Button type="destructive" size="lg">
          Destructive
        </Button>
      </div>
      <div className="flex flex-center items-center justify-center pt-10 gap-4">
        <Button type="outline" size="sm">
          Cancel
        </Button>
        <Button type="outline" size="default">
          Cancel
        </Button>
        <Button type="outline" size="lg">
          Cancel
        </Button>
      </div>
      <div className="flex flex-center items-center justify-center pt-10 gap-4">
        <Button type="secondary" size="sm">
          Subtle
        </Button>
        <Button type="secondary" size="default">
          Subtle
        </Button>
        <Button type="secondary" size="lg">
          Subtle
        </Button>
      </div>
      <div className="flex flex-center items-center justify-center pt-10 gap-4">
        <Button type="ghost" size="sm">
          Ghost
        </Button>
        <Button type="ghost" size="default">
          Ghost
        </Button>
        <Button type="ghost" size="lg">
          Ghost
        </Button>
      </div>
      <div className="flex flex-center items-center justify-center pt-10 gap-4">
        <Button type="link" size="sm">
          Link
        </Button>
        <Button type="link" size="default">
          Link
        </Button>
        <Button type="link" size="lg">
          Link
        </Button>
      </div>
      <div className="flex flex-center items-center justify-center pt-10 gap-4">
        <Button type="primary with icon">Login with Email</Button>
      </div>
      <div className="flex flex-center items-center justify-center pt-10 gap-4">
        <Button type="outline with icon">Cancel</Button>
      </div>
      <div className="flex flex-center items-center justify-center pt-10 gap-4">
        <Button type="icon">&times;</Button>
        <Button type="icon round">&times;</Button>
      </div>
      <div className="flex flex-center items-center justify-center pt-10 gap-4">
        <Button type="loading">Loading</Button>
      </div>
    </>
  );
}