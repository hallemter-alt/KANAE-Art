"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Home, 
  Building, 
  TrendingUp, 
  ClipboardList, 
  Hotel, 
  Wrench, 
  Package,
  ArrowRight
} from "lucide-react";

const businesses = [
  {
    icon: Home,
    title: "不動産賃貸仲介",
    description: "東京都内の優良物件をご紹介。駅近・新築・ペット可など、ご希望に合わせた物件探しをサポートいたします。",
    color: "light-copper",
  },
  {
    icon: Building,
    title: "不動産売買仲介",
    description: "マンション・戸建・土地の売買を専門スタッフが丁寧にサポート。市場分析から交渉・契約まで一貫してご対応。",
    color: "brass-gold",
  },
  {
    icon: TrendingUp,
    title: "投資物件提案",
    description: "利回りシミュレーション・キャップレート分析を基に、収益性の高い投資物件をご提案いたします。",
    color: "light-copper",
  },
  {
    icon: ClipboardList,
    title: "賃貸管理",
    description: "入居者対応・修繕管理・賃料収入管理まで、オーナー様の資産を徹底的に管理いたします。",
    color: "celadon-blue",
  },
  {
    icon: Hotel,
    title: "民泊運営",
    description: "旅館業法許可申請から運営代行まで。国内外のゲストをおもてなしする民泊運営をサポート。",
    color: "brass-gold",
  },
  {
    icon: Wrench,
    title: "建物維持管理",
    description: "定期清掃・設備点検・修繕対応。建物の価値を維持し、安心してお住まいいただける環境をご提供。",
    color: "light-copper",
  },
  {
    icon: Package,
    title: "建材貿易",
    description: "国内外の高品質建材を取り扱い。リノベーション・修繕に最適な素材をご提案いたします。",
    color: "decay-wood",
  },
];

export default function BusinessSection() {
  return (
    <section className="py-20 md:py-32 bg-concrete-grey/30">
      <div className="max-w-[1440px] mx-auto px-4 md:px-16 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-sm text-decay-wood tracking-[0.2em] mb-3 font-sans-jp">
            OUR BUSINESS
          </p>
          <h2 className="font-serif-jp text-3xl md:text-4xl font-bold text-charcoal-black mb-4">
            事業内容
          </h2>
          <p className="text-rust-iron max-w-xl mx-auto font-sans-jp">
            不動産に関わる全てのサービスを、ワンストップで提供いたします
          </p>
        </motion.div>

        {/* Business Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {businesses.map((business, index) => (
            <motion.div
              key={business.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-washi-white p-6 md:p-8 rounded border border-charcoal-black/8 hover:border-light-copper transition-all duration-300 hover:shadow-card-hover"
            >
              <div className={`w-12 h-12 flex items-center justify-center mb-4 bg-${business.color}/10`}>
                <business.icon 
                  size={24} 
                  className={`text-${business.color}`} 
                  style={{ color: business.color === 'light-copper' ? '#C9A96E' : business.color === 'brass-gold' ? '#D4AF37' : business.color === 'celadon-blue' ? '#7A9E9F' : '#8B7355' }}
                />
              </div>
              <h3 className="font-serif-jp text-xl font-bold text-charcoal-black mb-3 group-hover:text-light-copper transition-colors">
                {business.title}
              </h3>
              <p className="text-sm text-rust-iron leading-relaxed mb-4 font-sans-jp">
                {business.description}
              </p>
              <Link 
                href="/business/"
                className="inline-flex items-center text-sm text-light-copper hover:text-brass-gold transition-colors"
              >
                <span>詳細を見る</span>
                <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
