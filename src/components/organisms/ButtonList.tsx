import Button from "@/components/atoms/Button";
import Loading from "@/public/icons/interface/outline/loading.svg";
import Mail from "@/public/icons/communication/outline/mail.svg";
import ChevronsUpDown from "@/public/icons/interface/outline/chevrons-up-down.svg";
import Plus from "@/public/icons/interface/outline/plus.svg";
import NavigationItem from "@/components/atoms/NavigationItem";
import TextArea from "@/components/atoms/TextArea";

export default function ButtonList() {
  return (
    <>
      <nav className="flex flex-center items-center justify-center pt-10 gap-4">
        <NavigationItem href="/" label="Home" type="default" state="default"></NavigationItem>
        <NavigationItem href="/about" label="About" type="default" state="openMenu"/>
        <NavigationItem href="/contact" label="Contact" type="default" state="selected"/> 
      </nav>
      <div className="flex flex-center items-center justify-center pt-10 gap-4">
        <TextArea
          title="Your message"
          placeholder="Type your message here"
          message="Your message will be copied to the support team."
          type="button"
          disabled={true}
        />
      </div>
      <div className="flex flex-center items-center justify-center pt-10 gap-4">
        <TextArea
          title="Your message"
          placeholder="Type your message here"
          message="Your message will be copied to the support team."
        />
      </div>
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
        <Button type="primary with icon">
          <Mail className="w-base h-base stroke-base-white" />
          <span>Login with Email</span>
        </Button>
      </div>
      <div className="flex flex-center items-center justify-center pt-10 gap-4">
        <Button type="outline with icon">
          <span>Cancel</span>
          <ChevronsUpDown className="w-base h-base stroke-base-black" />
        </Button>
      </div>
      <div className="flex flex-center items-center justify-center pt-10 gap-4">
        <Button type="icon">
          <Plus className="w-base h-base stroke-base-black" />
        </Button>
        <Button type="icon round">
          <Plus className="w-base h-base stroke-base-black" />
        </Button>
      </div>
      <div className="flex flex-center items-center justify-center pt-10 gap-4">
        <Button type="loading">
          <Loading className="w-base h-base stroke-base-white" />
          <span>Loading</span>
        </Button>
      </div>
    </>
  );
}
