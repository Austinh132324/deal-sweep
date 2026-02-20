import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InstallPrompt from "../components/InstallPrompt";
import useDeviceProfile from "../hooks/useDeviceProfile";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { preferMobileUI } = useDeviceProfile();

  return (
    <div className="min-h-screen flex flex-col" data-device={preferMobileUI ? "mobile" : "desktop"}>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <InstallPrompt />
    </div>
  );
}
