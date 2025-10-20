import { Button } from "@mantine/core";
import Link from "next/link";

function Demo() {
  return (
    <Button
      component={Link}
      href="/login"
      variant="gradient"
      gradient={{ from: "indigo", to: "cyan" }}
      color="pink"
    >
      Welcome
    </Button>
  );
}
export default Demo;
