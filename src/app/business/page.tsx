import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";
import { businesses, pickText } from "@/lib/content";

export default function BusinessPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        <section className="py-16 md:py-24 bg-concrete-grey/30">
          <div className="max-w-[1440px] mx-auto px-4 md:px-16 lg:px-16 text-center">
            <p className="text-sm text-decay-wood tracking-[0.2em] mb-3 font-sans-jp">OUR BUSINESS</p>
            <h1 className="font-serif-jp text-3xl md:text-5xl font-bold text-charcoal-black mb-4">事業内容</h1>
            <p className="text-rust-iron max-w-xl mx-auto font-sans-jp">
              不動産に関わる全てのサービスを、一つの窓口で提供いたします
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-washi-white">
          <div className="max-w-[1440px] mx-auto px-4 md:px-16 lg:px-16">
            <div className="space-y-12">
              {businesses.map((business) => (
                <article
                  key={business.subtitle}
                  className="flex flex-col md:flex-row gap-6 md:gap-10 p-6 md:p-10 rounded border border-charcoal-black/10 bg-brick-white hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 flex items-center justify-center bg-light-copper/10">
                      <business.icon size={32} style={{ color: business.colorHex }} />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="mb-4">
                      <p className="text-xs tracking-wider mb-1 font-sans-jp text-decay-wood">{business.subtitle}</p>
                      <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-charcoal-black mb-1">
                        {pickText(business.title)}
                      </h2>
                      <p className="text-xs text-rust-iron/80 font-sans-jp">{pickText(business.title, "zh")}</p>
                    </div>

                    <p className="text-rust-iron leading-relaxed mb-2 font-sans-jp">{pickText(business.description)}</p>
                    <p className="text-sm text-rust-iron/80 leading-relaxed mb-6 font-sans-jp">
                      {pickText(business.description, "en")}
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {business.features.map((feature) => (
                        <li key={feature.ja} className="flex items-start text-sm text-charcoal-black font-sans-jp">
                          <CheckCircle2 size={16} className="mr-2 mt-0.5 flex-shrink-0" style={{ color: business.colorHex }} />
                          <div>
                            <p>{feature.ja}</p>
                            <p className="text-xs text-rust-iron/80">{feature.en}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
