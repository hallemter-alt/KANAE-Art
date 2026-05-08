"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Calendar, Building2, Hash } from "lucide-react";

const companyInfo = [
  { label: "会社名", value: "株式会社KANAE", icon: Building2 },
  { label: "代表者", value: "代表取締役 叶維舟", icon: null },
  { label: "設立", value: "令和3年7月5日（2021年7月5日）", icon: Calendar },
  { label: "法人番号", value: "0111-01-095676", icon: Hash },
  { label: "所在地", value: "〒171-0033 東京都豊島区高田3丁目16番4号 Golje Bld. 6F", icon: MapPin },
  { label: "電話番号", value: "03-6914-3633 / 080-4363-2780", icon: Phone },
  { label: "メール", value: "info@kanae-tokyo.com", icon: Mail },
  { label: "営業時間", value: "平日 9:00～18:00 / 土曜 10:00～17:00（日祝休業）", icon: Clock },
];

export default function CompanyOverview() {
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
            COMPANY PROFILE
          </p>
          <h2 className="font-serif-jp text-3xl md:text-4xl font-bold text-charcoal-black mb-4">
            会社概要
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-brick-white rounded shadow-building overflow-hidden">
            {companyInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`flex items-start p-4 md:p-6 ${
                  index !== companyInfo.length - 1 ? "border-b border-concrete-grey" : ""
                }`}
              >
                <div className="w-8 flex-shrink-0 mt-0.5">
                  {item.icon && <item.icon size={18} className="text-light-copper" />}
                </div>
                <div className="flex-1 ml-2">
                  <p className="text-xs text-rust-iron mb-1 font-sans-jp">{item.label}</p>
                  <p className="text-sm md:text-base text-charcoal-black font-sans-jp">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Business License */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 p-6 bg-concrete-grey/30 rounded border-l-4 border-light-copper"
          >
            <h3 className="font-serif-jp text-lg font-bold text-charcoal-black mb-3">
              許認可・加盟団体
            </h3>
            <ul className="space-y-2 text-sm text-rust-iron font-sans-jp">
              <li>宅地建物取引業 東京都知事(1)第107157号</li>
              <li>公益社団法人 全国宅地建物取引業協会連合会</li>
              <li>公益社団法人 東京都宅地建物取引業協会</li>
            </ul>
          </motion.div>

          {/* Business Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 p-6 bg-brick-white rounded"
          >
            <h3 className="font-serif-jp text-lg font-bold text-charcoal-black mb-3">
              事業内容
            </h3>
            <ul className="space-y-2 text-sm text-rust-iron font-sans-jp">
              <li>不動産賃貸仲介</li>
              <li>不動産売買仲介</li>
              <li>賃貸管理</li>
              <li>民泊運営</li>
              <li>不動産コンサルティング</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
