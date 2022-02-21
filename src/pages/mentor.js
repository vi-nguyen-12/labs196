import MainBanner from "../components/Mentor/MainBanner.js";
import MentorSection from "../components/Mentor/Mentors.js";

export default function mentor() {
  return (
    <>
      <MainBanner />
      <div id="mentor">
        <MentorSection />
      </div>
    </>
  );
}
