/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	  extend: {
		screens: {
		  'ultrawide': '1920px', 
		},
		fontSize:{
			'4.5xl': '2.50rem',
		},
		lineHeight: {
			'4.5': '2.50rem',
		  },
		colors: {
		  primary: '#ee00a7e4',
		  red: '#f02d00',
		  ferozi: '#00ffff',
		  purple:'#A400E8',
		  pink200:'#ff00ff',
		  gray636: '#636363',
		  grayPrimary:'#9E9E9E'
		},
		backgroundImage: {
		  'custom-gradient': 'linear-gradient(to right, #7f7fff, #ff00ff)',
		},
		spacing: {
		  104: '26rem', 
		  128: '32rem', 
		},
		width: {
		  '99': '99%',
		  '98': '98%',
		  '97': '97%',
		  '95': '95%',
		  '90': '90%',
		  '85': '85%',
		  '80': '80%',
		  '60': '60%',
		  '60vw': '60vw',
		  '70vw': '70vw',
		  '80vw': '80vw',
		  '90vw': '90vw'
		},
		height: {
		  '99': '99%',
		  '98': '98%',
		  '97': '97%',
		  '95': '95%',
		  '90': '90%',
		  '85': '85%',
		  '80': '80%',
		  '20vw': '20vw',
		  '30vw': '30vw',
		  '40vw': '40vw',
		  '70vw': '70vw',
		  '80vw': '80vw',
		  '90vw': '90vw'
		},
		keyframes: {
		  marquee: {
			"0%": { transform: "translateX(0)" },
			"100%": { transform: "translateX(calc(-100% - var(--gap)))" },
		  },
		  "marquee-vertical": {
			"0%": { transform: "translateY(0)" },
			"100%": { transform: "translateY(calc(-100% - var(--gap)))" },
		  },
		  glow: {
			'0%, 100%': { 
			  boxShadow: '0 0 13px 3px rgba(255, 0, 255, 0.5)' 
			},
			'25%': { 
			  boxShadow: '0 0 17px 4px rgba(255, 0, 255, 0.6)' 
			},
			'50%': { 
			  boxShadow: '0 0 21px 6px rgba(255, 0, 255, 0.8)' 
			},
			'75%': { 
			  boxShadow: '0 0 17px 4px rgba(255, 0, 255, 0.6)' 
			},
		  },
		  glowRed: {
			'0%, 100%': {
			  boxShadow: '0 0 25px 8px rgba(255, 0, 0, 0.35)',
			},
			'25%': {
			  boxShadow: '0 0 40px 15px rgba(255, 0, 0, 0.45)',
			},
			'50%': {
			  boxShadow: '0 0 55px 20px rgba(255, 0, 0, 0.58)',
			},
			'75%': {
			  boxShadow: '0 0 40px 9px rgba(255, 0, 0, 0.45)',
			},
		  },
		  
		 
		bounceSlow: {
		  '0%, 100%': { transform: 'translateY(0)', animationTimingFunction: 'ease-in-out' },
		  '50%': { transform: 'translateY(-10px)', animationTimingFunction: 'ease-in-out' },
		},
		textGlow: {
		  '0%, 100%': { textShadow: '0 0 15px #ff00ff, 0 0 25px #ff00ff, 0 0 35px #ffffff' },
		  '50%': { textShadow: '0 0 20px #ffffff, 0 0 30px #ffffff, 0 0 40px #ff00ff' },
		}, 
		  
		},
		borderRadius: {
		  'primary': '1.8rem', 
		},
		animation: {
		  'spin-fast': 'spin 0.8s linear infinite',
		  'animate-glow': 'glow 1.85s infinite ease-in-out',
		   bounceSlow: 'bounceSlow 1.58s infinite',
		   glowRed: 'glowRed 2s infinite',
		   textGlow:'textGlow 1.7s infinite ease-in-out',
		   marquee: "marquee 15s linear infinite ",
  
		},
		borderWidth: {
		  '3': '3px',
		},
		boxShadow: {
		  'inner-left-right': 'inset -30px 0 15px rgba(0, 0, 0, 0.40), inset 30px 0 15px rgba(0, 0, 0, 0.40)', 
		},
		
	  },
	},
  plugins: [],
};
