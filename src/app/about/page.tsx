import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CompanyOverview from "@/components/CompanyOverview";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        {/* Page Hero */}
        <section className="py-16 md:py-24 bg-concrete-grey/30">
          <div className="max-w-[1440px] mx-auto px-4 md:px-16 lg:px-16 text-center">
            <p className="text-sm text-decay-wood tracking-[0.2em] mb-3 font-sans-jp">
              ABOUT US
            </p>
            <h1 className="font-serif-jp text-3xl md:text-5xl font-bold text-charcoal-black mb-4">
              会社概要
            </h1>
            <p className="text-rust-iron max-w-xl mx-auto font-sans-jp">
              株式会社KANAEの会社情報をご案内いたします
            </p>
          </div>
        </section>
        <CompanyOverview />
      </main>
      <Footer />
    </>
  );
}
