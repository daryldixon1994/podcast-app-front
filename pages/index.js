import LandingPage from "@/components/LandingPage";
import tw from "twin.macro";
import PublicLayout from "@/components/layouts/PublicLayout";
const Container = tw.div``;
export default function Home() {
  return (
    <Container>
      <LandingPage />
    </Container>
  );
}
Home.getLayout = function getLayout(page) {
  return <PublicLayout>{page}</PublicLayout>;
};
