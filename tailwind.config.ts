import type { Config } from 'tailwindcss';
const config: Config = {content:['./app/**/*.{ts,tsx}','./lib/**/*.{ts,tsx}'],theme:{extend:{fontFamily:{sans:['var(--font-inter)'],display:['var(--font-sora)'],mono:['var(--font-mono)']},colors:{brand:{bg:'hsl(var(--background))',surface:'hsl(var(--surface))',primary:'hsl(var(--primary))',accent:'hsl(var(--accent))',text:'hsl(var(--text))',muted:'hsl(var(--muted))',border:'hsl(var(--border))'}},boxShadow:{glow:'0 0 40px rgba(0,168,255,.35)'}}},plugins:[]};
export default config;
