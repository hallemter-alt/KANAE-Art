import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Home, 
  Building, 
  TrendingUp, 
  ClipboardList, 
  Hotel, 
  Wrench, 
  Package,
  CheckCircle2
} from "lucide-react";

const businesses = [
  {
    icon: Home,
    title: "不動産賃貸仲介",
    subtitle: "Rental Brokerage",
    description: "東京都内の優良物件をご紹介。駅近・新築・ペット可・ファミリー向けなど、ご希望に合わせた物件探しをサポートいたします。",
    features: [
      "豊富な物件データベース",
      "駅徒歩分数の詳細な検索",
      "内見・契約の完全サポート",
      "入居後のトラブル対応"
    ],
    color: "#C9A96E",
    borderColor: "border-[#C9A96E]/30",
    bgColor: "bg-[#C9A96E]/5"
  },
  {
    icon: Building,
    title: "不動産売買仲介",
    subtitle: "Sales Brokerage",
    description: "マンション・戸建・土地の売買を専門スタッフが丁寧にサポート。市場分析から交渉・契約・引渡しまで一貫してご対応いたします。",
    features: [
      "正確な物件価格査定",
      "市場動向分析レポート",
      "交渉・契約のプロサポート",
      "ローン手続き支援"
    ],
    color: "#D4AF37",
    borderColor: "border-[#D4AF37]/30",
    bgColor: "bg-[#D4AF37]/5"
  },
  {
    icon: TrendingUp,
    title: "投資物件提案",
    subtitle: "Investment Properties",
    description: "利回りシミュレーション・キャップレート分析を基に、収益性の高い投資物件をご提案。不動産投資のプロとして資産形成をサポートいたします。",
    features: [
      "利回りシミュレーション",
      "キャップレート分析",
      "リスク評価レポート",
      "ポートフォリオ管理"
    ],
    color: "#C9A96E",
    borderColor: "border-[#C9A96E]/30",
    bgColor: "bg-[#C9A96E]/5"
  },
  {
    icon: ClipboardList,
    title: "賃貸管理",
    subtitle: "Property Management",
    description: "入居者対応・修繕管理・賃料収入管理まで、オーナー様の大切な資産を徹底的に管理いたします。",
    features: [
      "入居者募集・審査",
      "賃料収入管理・報告",
      "修繕・苦情対応",
      "定期巡回・設備点检"
    ],
    color: "#7A9E9F",
    borderColor: "border-[#7A9E9F]/30",
    bgColor: "bg-[#7A9E9F]/5"
  },
  {
    icon: Hotel,
    title: "民泊運営",
    subtitle: "Vacation Rental",
    description: "旅館業法許可申請から運営代行まで、国内外のゲストをおもてなしする民泊運営をトータルサポートいたします。",
    features: [
      "旅館業法許可申請支援",
      "予約管理システム導入",
      "清掃・リネン管理",
      "ゲスト対応・レビュー管理"
    ],
    color: "#D4AF37",
    borderColor: "border-[#D4AF37]/30",
    bgColor: "bg-[#D4AF37]/5"
  },
  {
    icon: Wrench,
    title: "建物維持管理",
    subtitle: "Building Maintenance",
    description: "定期清掃・設備点検・修繕対応。建物の価値を維持し、安心してお住まいいただける環境をご提供いたします。",
    features: [
      "定期清掃・保守点検",
      "修繕工事手配・管理",
      "設備更新計画立案",
      "緊急対応体制"
    ],
    color: "#C9A96E",
    borderColor: "border-[#C9A96E]/30",
    bgColor: "bg-[#C9A96E]/5"
  },
  {
    icon: Package,
    title: "建材貿易",
    subtitle: "Building Materials",
    description: "国内外の高品質建材を取り扱い。リノベーション・修繕に最適な素材をご提案いたします。",
    features: [
      "輸入建材の取り扱い",
      "仕様書作成・見積",
      "納期管理・物流手配",
      "品質保証対応"
    ],
    color: "#8B7355",
    borderColor: "border-[#8B7355]/30",
    bgColor: "bg-[#8B7355]/5"
  },
];

export default function BusinessPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        {/* Page Hero */}
        <section className="py-16 md:py-24 bg-concrete-grey/30">
          <div className="max-w-[1440px] mx-auto px-4 md:px-16 lg:px-16 text-center">
            <p className="text-sm text-decay-wood tracking-[0.2em] mb-3 font-sans-jp">
              OUR BUSINESS
            </p>
            <h1 className="font-serif-jp text-3xl md:text-5xl font-bold text-charcoal-black mb-4">
              事業内容
            </h1>
            <p className="text-rust-iron max-w-xl mx-auto font-sans-jp">
              不動産に関わる全てのサービスを、一つの窓口で提供いたします
            </p>
          </div>
        </section>

        {/* Business Details */}
        <section className="py-16 md:py-24 bg-washi-white">
          <div className="max-w-[1440px] mx-auto px-4 md:px-16 lg:px-16">
            <div className="space-y-12">
              {businesses.map((business, index) => (
                <div
                  key={business.title}
                  className={`flex flex-col md:flex-row gap-6 md:gap-10 p-6 md:p-10 rounded border ${business.borderColor} ${business.bgColor} hover:shadow-card-hover transition-all duration-300`}
                >
                  <div className="flex-shrink-0">
                    <div 
                      className="w-16 h-16 flex items-center justify-center"
                      style={{ backgroundColor: business.color + '15' }}
                    >
                      <business.icon size={32} style={{ color: business.color }} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="mb-4">
                      <p className="text-xs tracking-wider mb-1 font-sans-jp" style={{ color: business.color }}>
                        {business.subtitle}
                      </p>
                      <h2 className="font-serif-jp text-2xl md:text-3xl font-bold text-charcoal-black">
                        {business.title}
                      </h2>
                    </div>
                    <p className="text-rust-iron leading-relaxed mb-6 font-sans-jp">
                      {business.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {business.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-charcoal-black font-sans-jp">
                          <CheckCircle2 size={16} className="mr-2 flex-shrink-0" style={{ color: business.color }} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
