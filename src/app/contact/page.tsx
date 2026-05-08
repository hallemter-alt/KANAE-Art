import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        {/* Page Hero */}
        <section className="py-16 md:py-24 bg-concrete-grey/30">
          <div className="max-w-[1440px] mx-auto px-4 md:px-16 lg:px-16 text-center">
            <p className="text-sm text-decay-wood tracking-[0.2em] mb-3 font-sans-jp">
              CONTACT US
            </p>
            <h1 className="font-serif-jp text-3xl md:text-5xl font-bold text-charcoal-black mb-4">
              お問い合わせ
            </h1>
            <p className="text-rust-iron max-w-xl mx-auto font-sans-jp">
              不動産に関するご相談・お見積り・物件のご紹介など、お気軽にお問い合わせください
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 md:py-24 bg-washi-white">
          <div className="max-w-[1440px] mx-auto px-4 md:px-16 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Info */}
              <div>
                <h2 className="font-serif-jp text-2xl font-bold text-charcoal-black mb-8">
                  連絡先情報
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-brick-white rounded">
                    <MapPin size={24} className="text-light-copper flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-sans-jp font-bold text-charcoal-black mb-1">所在地</p>
                      <p className="text-sm text-rust-iron font-sans-jp">
                        〒171-0033<br />
                        東京都豊島区高田3丁目16番4号<br />
                        Golje Bld. 6F
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-brick-white rounded">
                    <Phone size={24} className="text-light-copper flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-sans-jp font-bold text-charcoal-black mb-1">電話番号</p>
                      <p className="text-sm text-rust-iron font-sans-jp">
                        03-6914-3633<br />
                        080-4363-2780
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-brick-white rounded">
                    <Mail size={24} className="text-light-copper flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-sans-jp font-bold text-charcoal-black mb-1">メールアドレス</p>
                      <p className="text-sm text-rust-iron font-sans-jp">
                        info@kanae-tokyo.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-brick-white rounded">
                    <Clock size={24} className="text-light-copper flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-sans-jp font-bold text-charcoal-black mb-1">営業時間</p>
                      <p className="text-sm text-rust-iron font-sans-jp">
                        平日 9:00～18:00<br />
                        土曜 10:00～17:00<br />
                        <span className="text-red-copper">（日祝休業）</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="mt-8 p-6 bg-concrete-grey/30 rounded border border-charcoal-black/8 text-center">
                  <MapPin size={32} className="text-light-copper mx-auto mb-2" />
                  <p className="text-sm text-rust-iron font-sans-jp">
                    東京都豊島区高田3丁目16番4号<br />
                    Golje Bld. 6F
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="font-serif-jp text-2xl font-bold text-charcoal-black mb-8">
                  お問い合わせフォーム
                </h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-sans-jp font-bold text-charcoal-black mb-2">
                        お名前 <span className="text-red-copper">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-brick-white border border-charcoal-black/10 text-charcoal-black placeholder-rust-iron/50 focus:border-light-copper focus:outline-none transition-colors font-sans-jp"
                        placeholder="山田 太郎"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-sans-jp font-bold text-charcoal-black mb-2">
                        フリガナ <span className="text-red-copper">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-brick-white border border-charcoal-black/10 text-charcoal-black placeholder-rust-iron/50 focus:border-light-copper focus:outline-none transition-colors font-sans-jp"
                        placeholder="ヤマダ タロウ"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-sans-jp font-bold text-charcoal-black mb-2">
                        電話番号
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-brick-white border border-charcoal-black/10 text-charcoal-black placeholder-rust-iron/50 focus:border-light-copper focus:outline-none transition-colors font-sans-jp"
                        placeholder="03-0000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-sans-jp font-bold text-charcoal-black mb-2">
                        メールアドレス <span className="text-red-copper">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 bg-brick-white border border-charcoal-black/10 text-charcoal-black placeholder-rust-iron/50 focus:border-light-copper focus:outline-none transition-colors font-sans-jp"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-sans-jp font-bold text-charcoal-black mb-2">
                      お問い合わせ種別 <span className="text-red-copper">*</span>
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 bg-brick-white border border-charcoal-black/10 text-charcoal-black focus:border-light-copper focus:outline-none transition-colors font-sans-jp appearance-none cursor-pointer"
                    >
                      <option value="">選択してください</option>
                      <option value="rental">賃貸物件のご相談</option>
                      <option value="sales">売買物件のご相談</option>
                      <option value="investment">投資物件のご相談</option>
                      <option value="management">賃貸管理のご相談</option>
                      <option value="inn">民泊運営のご相談</option>
                      <option value="maintenance">建物維持管理のご相談</option>
                      <option value="materials">建材貿易のご相談</option>
                      <option value="other">その他</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-sans-jp font-bold text-charcoal-black mb-2">
                      お問い合わせ内容 <span className="text-red-copper">*</span>
                    </label>
                    <textarea
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-brick-white border border-charcoal-black/10 text-charcoal-black placeholder-rust-iron/50 focus:border-light-copper focus:outline-none transition-colors resize-y font-sans-jp"
                      placeholder="お問い合わせ内容を詳しくご記入ください。"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-8 py-4 bg-charcoal-black text-washi-white font-sans-jp font-bold text-sm tracking-wider hover:bg-light-copper transition-all duration-300"
                  >
                    <Send size={16} className="mr-2" />
                    送信する
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
