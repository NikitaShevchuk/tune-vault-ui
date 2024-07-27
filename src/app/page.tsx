import { HomePage } from "src/components/layout/home-page";
import { apiBaseUrl } from "src/constants";

export default async function Home() {
  const analytics = await fetch(`${apiBaseUrl}/analytics`).then((res) =>
    res.json(),
  );

  return <HomePage analytics={analytics} />;
}
