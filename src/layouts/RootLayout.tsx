import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InstallPrompt from "../components/InstallPrompt";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <InstallPrompt />
    </div>
  );
}
