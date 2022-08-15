import Button from "../components/button";

export default function Custom404() {
  return (
    <div className="flex items-center flex-col">
      <h1 className="text-center">
        404 - die gewünschte Seite wurde leider nicht gefunden
      </h1>
      <Button href={"/"} className="text-center mx-auto">
        zurück{" "}
      </Button>
    </div>
  );
}

Custom404.pageClass = "no-curtain";
