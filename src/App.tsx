import { Check, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#030308] flex flex-col items-center justify-center p-4 font-sans relative overflow-hidden selection:bg-cyan-500/30">
      
      {/* --- FLUID AURORA BACKGROUND --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b14] to-[#030308]"></div>
        
        {/* Animated Fluid Blobs */}
        <motion.div 
          animate={{ 
            x: ['-20%', '20%', '-10%', '-20%'],
            y: ['-10%', '10%', '20%', '-10%'],
            scale: [1, 1.2, 0.9, 1],
            rotate: [0, 90, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-20%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-br from-blue-600/30 to-cyan-400/20 blur-[100px] mix-blend-screen"
        />
        
        <motion.div 
          animate={{ 
            x: ['20%', '-20%', '10%', '20%'],
            y: ['20%', '-10%', '-20%', '20%'],
            scale: [1, 0.9, 1.2, 1],
            rotate: [360, 180, 90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-20%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-gradient-to-bl from-indigo-600/30 to-purple-500/20 blur-[120px] mix-blend-screen"
        />

        <motion.div 
          animate={{ 
            x: ['0%', '10%', '-10%', '0%'],
            y: ['0%', '-20%', '10%', '0%'],
            scale: [0.8, 1.1, 1, 0.8]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] left-[20%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-tr from-teal-500/20 to-blue-500/20 blur-[90px] mix-blend-screen"
        />
      </div>

      {/* Subtle Noise Overlay for Texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2VGaWx0ZXIpIi8+PC9zdmc+')]"></div>

      {/* Header Logos */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-4 mb-8 z-10"
      >
        {/* Feishu Logo Mock */}
        <div className="flex items-center gap-2 drop-shadow-[0_0_15px_rgba(0,214,185,0.3)]">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5 18.5L3.5 10.5L15.5 2.5" fill="#2DE2C5"/>
            <path d="M3.5 10.5L11.5 18.5L21.5 11.5L15.5 2.5L3.5 10.5Z" fill="#00E676"/>
            <path d="M3.5 10.5L11.5 18.5L21.5 11.5L15.5 2.5L3.5 10.5Z" fill="url(#paint0_linear)"/>
            <path d="M11.5 18.5L21.5 11.5L15.5 2.5L11.5 18.5Z" fill="#00B0FF"/>
            <defs>
              <linearGradient id="paint0_linear" x1="3.5" y1="10.5" x2="18.5" y2="15.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00E676"/>
                <stop offset="1" stopColor="#00B0FF"/>
              </linearGradient>
            </defs>
            <g transform="translate(0, 2)">
              <path d="M19.5 7.5C19.5 7.5 15 11.5 11 11.5C7 11.5 3.5 9.5 3.5 9.5L8.5 16.5L19.5 7.5Z" fill="#3370FF"/>
              <path d="M3.5 9.5C3.5 9.5 7 11.5 11 11.5C15 11.5 19.5 7.5 19.5 7.5L14.5 2.5L3.5 9.5Z" fill="#00D6B9"/>
            </g>
          </svg>
          <span className="text-white font-bold text-xl tracking-widest">飞书</span>
        </div>

        <div className="w-[1px] h-5 bg-white/20 mx-1"></div>

        {/* Google Logo Mock */}
        <div className="flex items-center drop-shadow-[0_0_15px_rgba(66,133,244,0.3)] bg-white/5 p-1.5 rounded-full backdrop-blur-md border border-white/10">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.81 15.71 17.59V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4"/>
            <path d="M12 23C14.97 23 17.46 22.02 19.28 20.34L15.71 17.59C14.72 18.25 13.46 18.66 12 18.66C9.17 18.66 6.78 16.75 5.89 14.18H2.22V17.03C4.02 20.61 7.71 23 12 23Z" fill="#34A853"/>
            <path d="M5.89 14.18C5.66 13.5 5.53 12.77 5.53 12C5.53 11.23 5.66 10.5 5.89 9.82V6.97H2.22C1.48 8.44 1.05 10.16 1.05 12C1.05 13.84 1.48 15.56 2.22 17.03L5.89 14.18Z" fill="#FBBC05"/>
            <path d="M12 5.34C13.62 5.34 15.07 5.9 16.21 6.98L19.36 3.83C17.45 2.05 14.97 1 12 1C7.71 1 4.02 3.39 2.22 6.97L5.89 9.82C6.78 7.25 9.17 5.34 12 5.34Z" fill="#EA4335"/>
          </svg>
        </div>
      </motion.div>

      {/* Main Glass Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-white/[0.04] backdrop-blur-3xl rounded-[32px] p-8 w-full max-w-[360px] shadow-[0_24px_80px_-12px_rgba(0,0,0,0.8)] border border-white/[0.08] z-10 overflow-hidden group"
      >
        {/* Card Inner Highlight (Top Edge) */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        
        {/* Subtle inner glow that follows the background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none"></div>

        {/* Title */}
        <h1 className="text-[36px] font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-gray-400 mb-5 tracking-tighter leading-none drop-shadow-sm">
          XXX
        </h1>

        {/* Subtitle */}
        <div className="flex items-center gap-2.5 mb-8">
          <div className="w-1.5 h-[16px] bg-gradient-to-b from-[#00D6B9] to-[#3370FF] rounded-full shadow-[0_0_12px_rgba(0,214,185,0.6)]"></div>
          <span className="text-gray-200 text-[16px] font-bold tracking-wide">谷歌</span>
        </div>

        {/* Quote Box - Dark Glass */}
        <div className="relative bg-white/[0.03] rounded-2xl p-6 mb-10 border border-white/[0.05] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] overflow-hidden">
          {/* Decorative Quote Mark */}
          <Quote className="absolute -top-2 -right-2 w-20 h-20 text-white/[0.03] rotate-12 transition-transform duration-700 group-hover:rotate-6 group-hover:scale-110" />
          
          {/* Left Accent Line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400/40 to-blue-600/40"></div>

          <p className="relative text-gray-300 text-[14px] leading-[1.8] font-medium italic text-justify tracking-wide z-10">
            “锚定AI全域赋能核心赛道，重构业务流程、服务范式与增长逻辑，将AI能力深度注入全价值链各环节，打造面向未来的智能商业新范式，既为客户创造超额价值，也为全行业开辟可复用的智能化升级标杆。”
          </p>
        </div>

        {/* Checklist */}
        <ul className="space-y-5 mb-12 relative z-10">
          {[
            "面向 CEO 及高管的高端 AI 转型培训",
            "专家赋能工作坊 · 组织转型诊断",
            "数字员工实操 · AI 原生组织建设"
          ].map((text, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              className="flex items-start gap-3.5 group/item cursor-default"
            >
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shrink-0 mt-[2px] shadow-[0_0_10px_rgba(56,189,248,0.4)] group-hover/item:scale-110 group-hover/item:shadow-[0_0_15px_rgba(56,189,248,0.6)] transition-all duration-300">
                <Check className="w-3 h-3 text-white" strokeWidth={3.5} />
              </div>
              <span className="text-gray-200 text-[14px] font-medium tracking-wide leading-snug group-hover/item:text-white transition-colors duration-300">
                {text}
              </span>
            </motion.li>
          ))}
        </ul>

        {/* QR Code Section */}
        <div className="flex flex-col items-center mt-6 relative z-10">
          <div className="relative p-3 bg-white/[0.05] backdrop-blur-md rounded-[24px] border border-white/[0.1] mb-4 group/qr hover:bg-white/[0.08] hover:border-white/[0.2] transition-all duration-500 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]">
            
            {/* Animated Corner Accents */}
            <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-cyan-400 rounded-tl-[24px] opacity-0 group-hover/qr:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-cyan-400 rounded-tr-[24px] opacity-0 group-hover/qr:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-blue-500 rounded-bl-[24px] opacity-0 group-hover/qr:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-blue-500 rounded-br-[24px] opacity-0 group-hover/qr:opacity-100 transition-opacity duration-300"></div>
            
            {/* White wrapper for QR code to ensure scannability */}
            <div className="w-[130px] h-[130px] rounded-xl overflow-hidden bg-white p-1.5 shadow-inner">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://feishu.cn&margin=0" 
                alt="QR Code" 
                className="w-full h-full object-contain rounded-lg group-hover/qr:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <p className="text-gray-400 text-[12px] font-medium tracking-[0.2em] uppercase group-hover:text-cyan-300 transition-colors duration-500">
            扫描二维码联系我
          </p>
        </div>

      </motion.div>
    </div>
  );
}
