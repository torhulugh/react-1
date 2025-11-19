import "./style.css";
import Profile_Intro from "../../components/profileIntro";
import RecentActivities from "../../components/capsuleCard/recentActivities";

export default function Home() {
  return (
    <>
      <Profile_Intro />
      <RecentActivities />
    </>
  );
}
