"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Users, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "安心のライセンス",
    description: "宅地建物取引業 東京都知事(1)第107157号。公益社団法人東京都宅地建物取引業協会に加盟。",
  },
  {
    icon: Zap,
    title: "スピーディな対応",
    description: "お問い合わせから24時間以内にご返答。急なご相談も柔軟に対応いたします。",
  },
  {
    icon: Users,
    title: "専門スタッフ",
    description: "各分野のプロフェッショナルが在籍。投資・管理・民泊など専門知識でサポート。",
  },
  {
    icon: Award,
    title: "実績と信頼",
    description: "設立以来、多くのお客様にご愛顧いただいております。リピート率98%を達成。",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 md:py-32 bg-washi-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-16 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-sm text-decay-wood tracking-[0.2em] mb-3 font-sans-jp">
            WHY CHOOSE US
          </p>
          <h2 className="font-serif-jp text-3xl md:text-4xl font-bold text-charcoal-black mb-4">
            KANAEが選ばれる理由
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-concrete-grey/50 flex items-center justify-center">
                <feature.icon size={28} className="text-light-copper" />
              </div>
              <h3 className="font-serif-jp text-lg font-bold text-charcoal-black mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-rust-iron leading-relaxed font-sans-jp">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
