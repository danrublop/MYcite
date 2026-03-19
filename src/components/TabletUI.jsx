import { useState, useEffect, useRef } from 'react'
import {
    Home, User, Briefcase, Mail, Github, Twitter, Linkedin,
    Settings, Camera, MessageCircle, Music, Play, Pause, SkipForward, SkipBack, Volume2, X,
    Wifi, Battery, Search, Layers, Command, ChevronLeft, Send, MoreHorizontal,
    Code, Globe, Cpu, Smartphone, Database, Terminal
} from 'lucide-react'
import Grainient from './Grainient'

const XIconCustom = ({ size = 24, color = 'currentColor', ...props }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 512 462.799" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision" 
        textRendering="geometricPrecision" 
        imageRendering="optimizeQuality" 
        fillRule="evenodd" 
        clipRule="evenodd"
        {...props}
    >
        <path 
            fill={color} 
            fillRule="nonzero" 
            d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
        />
    </svg>
)

const UserCircleIcon = ({ size = 24, color = 'currentColor', ...props }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9ZM12 20.5C13.784 20.5 15.4397 19.9504 16.8069 19.0112C17.4108 18.5964 17.6688 17.8062 17.3178 17.1632C16.59 15.8303 15.0902 15 11.9999 15C8.90969 15 7.40997 15.8302 6.68214 17.1632C6.33105 17.8062 6.5891 18.5963 7.19296 19.0111C8.56018 19.9503 10.2159 20.5 12 20.5Z" 
            fill={color}
        />
    </svg>
)

const MessageIcon = ({ size = 24, color = 'currentColor', ...props }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 -8.5 158 158" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g>
            <path d="M25.3444 106.878C27.7828 108.544 28.102 109.755 26.8285 112.511C24.164 118.28 21.0905 125.117 18.4964 132.108C17.8052 133.97 17.7557 137.607 19.2508 139.067C20.4742 140.262 22.5497 140.426 24.5568 140.584C25.1503 140.631 25.7106 140.675 26.2382 140.744C26.3236 140.756 26.4095 140.761 26.4956 140.761C27.2256 140.692 27.9286 140.45 28.5463 140.056L28.8069 139.92C31.0067 138.785 33.2086 137.654 35.4126 136.526C41.7037 133.301 48.2085 129.963 54.5425 126.559L54.6018 126.528C62.2238 122.434 69.4168 118.566 78.2498 120.266C78.6185 120.325 78.9925 120.34 79.3651 120.309C79.483 120.303 79.6022 120.298 79.7188 120.297C100.703 120.106 116.873 115.762 130.606 106.626C151.64 92.6322 161.084 72.6056 156.517 51.6818C152.289 32.3089 143.953 20.2547 129.488 12.5985C114.782 4.81623 98.2103 0.344555 82.8262 0.00732422C82.8204 0.00829458 82.8145 0.00829458 82.8093 0.00732422C63.8205 0.0820479 47.9564 3.20238 32.8857 9.82936C14.6163 17.8612 4.59895 29.4004 2.26219 45.106C1.2549 51.4949 1.13475 57.9916 1.90517 64.4132C4.43476 83.9408 12.1024 97.831 25.3444 106.878ZM31.7762 122.668C33.0466 118.148 34.2452 113.879 35.7403 109.789C38.0855 103.379 34.6244 99.7777 31.3495 97.356C26.3685 93.6744 21.3302 89.436 18.2123 83.4113C10.1604 67.8526 9.06465 53.2775 14.86 38.8533C18.0032 31.0307 24.3842 25.2225 34.941 20.5741C49.512 14.1583 64.0147 10.9506 78.3527 10.9506C92.628 11.014 106.724 14.1301 119.691 20.088C134.661 26.8151 142.963 37.9101 145.818 55.0055C148.164 69.0345 144.266 80.7193 133.559 91.7764C124.025 101.622 111.17 107.416 93.1042 110.01C83.9989 111.317 73.2291 112.4 62.3899 110.52C61.0369 110.291 59.5235 111.136 58.2995 111.82C50.9622 115.933 43.6939 120.058 35.9996 124.425L30.3717 127.618C30.8629 125.919 31.3254 124.273 31.7762 122.668V122.668Z" fill={color}/>
            <path d="M50.4727 69.7116H50.5632C51.5856 69.7084 52.597 69.5011 53.5381 69.1028C54.4792 68.7038 55.3311 68.1223 56.0439 67.3913C56.6562 66.761 57.1341 66.0131 57.4489 65.1938C57.7636 64.3742 57.9086 63.4996 57.8751 62.6226C57.7597 60.8352 56.9862 59.1535 55.7032 57.9004C54.4202 56.6472 52.7181 55.9107 50.9241 55.833C49.971 55.839 49.0285 56.034 48.1513 56.406C47.2742 56.778 46.4798 57.3195 45.8141 58C45.0885 58.6916 44.507 59.5195 44.1032 60.436C43.6994 61.3525 43.4811 62.34 43.4611 63.3409C43.4557 64.1543 43.6132 64.9604 43.9245 65.7123C44.2357 66.4641 44.6943 67.1457 45.2734 67.7188C46.6738 69.043 48.5435 69.7597 50.4727 69.7116Z" fill={color}/>
            <path d="M81.3262 71.5141H81.3913C83.1594 71.4998 84.8499 70.7896 86.0955 69.5382C87.4055 68.2679 88.1606 66.533 88.1964 64.7109C88.2114 62.8915 87.2016 60.7403 85.5613 59.0997C84.4492 57.855 82.8981 57.0869 81.2317 56.9556H81.2109C77.8461 56.9751 74.4957 60.6551 74.4468 64.3848C74.4299 65.3173 74.5993 66.2438 74.9452 67.11C75.2905 67.9768 75.8051 68.7662 76.4598 69.4323C77.0924 70.0833 77.8481 70.6025 78.6832 70.9599C79.519 71.3172 80.4167 71.5057 81.3262 71.5141Z" fill={color}/>
            <path d="M110.697 70.7603H110.74C112.416 70.6959 114.011 70.0228 115.225 68.8681C116.439 67.7128 117.189 66.1554 117.333 64.4883C117.287 62.8406 116.594 61.2767 115.402 60.1347C113.8 58.3543 111.576 57.2516 109.186 57.0521C108.579 57.0402 107.977 57.1519 107.416 57.3796C106.854 57.6072 106.345 57.9462 105.919 58.3764C105.249 59.0638 104.722 59.8774 104.37 60.7699C104.018 61.6623 103.847 62.6157 103.869 63.5745C103.828 65.4283 104.522 67.2223 105.801 68.5679C107.079 69.913 108.839 70.7018 110.697 70.7603Z" fill={color}/>
        </g>
    </svg>
)

const MusicIconCustom = ({ size = 24, color = 'currentColor', ...props }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 305.499 305.498" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path 
            fill={color}
            d="M57.171,212.603c-34.905,13.926-55.519,44.482-46.035,68.246c9.49,23.752,45.468,31.727,80.381,17.789
            c24.157-9.646,41.449-27.246,46.677-45.048c1.108-2.079,1.737-4.448,1.737-6.957V113.134l127.056-23.538v112.767
            c-15.128-4.248-34.256-3.113-53.066,4.4c-34.912,13.922-55.517,44.479-46.045,68.23c9.481,23.764,45.468,31.723,80.381,17.793
            c24.164-9.654,41.469-27.255,46.69-45.056c1.094-2.076,1.724-4.44,1.724-6.945V60.855c0-0.938-0.093-1.851-0.261-2.747V9.312
            c0-5.142-4.172-9.312-9.306-9.312L119.489,31.042c-5.16,0-9.328,4.166-9.328,9.309v67.247c0,0.261,0.054,0.495,0.076,0.755v99.849
            C95.127,203.958,75.996,205.093,57.171,212.603z"
        />
    </svg>
)

const SettingsIconCustom = ({ size = 24, color = 'currentColor', ...props }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path 
            fill={color} 
            d="M30.015 12.97l-2.567-0.569c-0.2-0.64-0.462-1.252-0.762-1.841l1.389-2.313c0.518-0.829 0.78-2.047 0-2.829l-1.415-1.414c-0.78-0.781-2.098-0.64-2.894-0.088l-2.251 1.434c-0.584-0.303-1.195-0.563-1.829-0.768l-0.576-2.598c-0.172-0.953-1.005-1.984-2.11-1.984h-2c-1.104 0-1.781 1.047-2 2l-0.642 2.567c-0.678 0.216-1.328 0.492-1.948 0.819l-2.308-1.47c-0.795-0.552-2.114-0.692-2.894 0.088l-1.415 1.414c-0.781 0.782-0.519 2 0 2.828l1.461 2.435c-0.274 0.552-0.517 1.123-0.705 1.72l-2.566 0.569c-0.953 0.171-1.984 1.005-1.984 2.109v2c0 1.105 1.047 1.782 2 2l2.598 0.649c0.179 0.551 0.404 1.080 0.658 1.593l-1.462 2.438c-0.518 0.828-0.78 2.047 0 2.828l1.415 1.414c0.78 0.782 2.098 0.64 2.894 0.089l2.313-1.474c0.623 0.329 1.277 0.608 1.96 0.823l0.64 2.559c0.219 0.953 0.896 2 2 2h2c1.105 0 1.938-1.032 2.11-1.985l0.577-2.604c0.628-0.203 1.23-0.459 1.808-0.758l2.256 1.438c0.796 0.552 2.114 0.692 2.895-0.089l1.415-1.414c0.78-0.782 0.518-2 0-2.828l-1.39-2.317c0.279-0.549 0.521-1.12 0.716-1.714l2.599-0.649c0.953-0.219 2-0.895 2-2v-2c0-1.104-1.031-1.938-1.985-2.11zM30.001 16.939c-0.085 0.061-0.245 0.145-0.448 0.192l-3.708 0.926-0.344 1.051c-0.155 0.474-0.356 0.954-0.597 1.428l-0.502 0.986 1.959 3.267c0.125 0.2 0.183 0.379 0.201 0.485l-1.316 1.314c-0.127-0.040-0.271-0.092-0.341-0.14l-3.292-2.099-1.023 0.529c-0.493 0.256-0.999 0.468-1.503 0.631l-1.090 0.352-0.824 3.723c-0.038 0.199-0.145 0.36-0.218 0.417h-1.8c-0.061-0.085-0.145-0.245-0.191-0.448l-0.921-3.681-1.066-0.338c-0.549-0.173-1.097-0.404-1.63-0.684l-1.028-0.543-3.293 2.099c-0.135 0.091-0.279 0.143-0.409 0.143l-1.311-1.276c0.018-0.104 0.072-0.274 0.181-0.449l2.045-3.408-0.487-0.98c-0.227-0.462-0.407-0.895-0.547-1.325l-0.343-1.052-3.671-0.918c-0.231-0.052-0.398-0.139-0.485-0.2v-1.86c0.001 0.001 0.002 0.001 0.005 0.001 0.034 0 0.198-0.117 0.335-0.142l3.772-0.835 0.346-1.103c0.141-0.449 0.333-0.917 0.588-1.43l0.487-0.98-2.024-3.373c-0.125-0.201-0.184-0.38-0.201-0.485l1.315-1.314c0.128 0.041 0.271 0.093 0.34 0.14l3.354 2.138 1.027-0.542c0.527-0.278 1.073-0.507 1.622-0.682l1.063-0.338 0.912-3.649c0.053-0.231 0.138-0.398 0.2-0.485h1.859c-0.014 0.020 0.115 0.195 0.142 0.339l0.84 3.794 1.089 0.352c0.511 0.165 1.023 0.38 1.523 0.639l1.023 0.532 3.224-2.053c0.135-0.092 0.279-0.143 0.409-0.143l1.313 1.276c-0.017 0.104-0.072 0.276-0.181 0.45l-1.98 3.296 0.505 0.988c0.273 0.533 0.48 1.033 0.635 1.529l0.346 1.104 3.697 0.82c0.224 0.041 0.398 0.171 0.434 0.241zM16.013 9.99c-3.321 0-6.023 2.697-6.023 6.010s2.702 6.010 6.023 6.010 6.023-2.697 6.023-6.009c0-3.313-2.702-6.010-6.023-6.010zM16 20c-2.205 0-4-1.794-4-4s1.794-4 4-4c2.206 0 4 1.794 4 4s-1.794 4-4 4z"
        />
    </svg>
)

const EcomerseIcon = ({ size = 64 }) => (
    <img 
        src="/ecomerse.svg" 
        alt="ecomerse" 
        style={{ width: size, height: size, objectFit: 'contain' }} 
    />
)

const SwiftlyIcon = ({ size = 64 }) => (
    <img 
        src="/logo.swftly.png" 
        alt="Swiftly" 
        style={{ width: size, height: size, objectFit: 'contain' }} 
    />
)

const FolderIcon = ({ icons = [] }) => {
    return (
        <div style={{ 
            width: '100%', 
            height: '100%', 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            gridTemplateRows: 'repeat(2, 1fr)',
            padding: '48px', 
            gap: '6px',
            background: 'transparent',
        }}>
            {icons.slice(0, 3).map((Icon, idx) => (
                <div key={idx} style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    background: 'rgba(255, 255, 255, 0.15)',
                    borderRadius: '4px',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    aspectRatio: '1/1'
                }}>
                    <Icon size={14} color="white" strokeWidth={1.5} />
                </div>
            ))}
        </div>
    )
}

const ExternalModal = ({ appId, apps, setActiveApp }) => {
    const app = apps.find(a => a.id === appId)
    if (!app) return null

    return (
        <div 
            onClick={() => setActiveApp('home')}
            style={{ 
                position: 'absolute', 
                inset: 0, 
                zIndex: 1000, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                background: 'rgba(0,0,0,0.4)',
                backdropFilter: 'blur(10px)',
                animation: 'fadeIn 0.3s ease-out'
            }}
        >
            <div 
                onClick={(e) => e.stopPropagation()}
                style={{ 
                    width: '340px', 
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)', 
                    backdropFilter: 'blur(50px) saturate(190%)',
                    borderRadius: '32px', 
                    padding: '40px 30px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.35)',
                }}
            >
                <div style={{ 
                    width: '80px', 
                    height: '80px', 
                    borderRadius: '20px', 
                    background: app.color, 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    color: 'white', 
                    marginBottom: '20px',
                    boxShadow: `0 15px 30px ${app.color}44`
                }}>
                    <app.icon size={50} color="white" />
                </div>
                
                <h3 style={{ margin: '0 0 10px 0', fontSize: '24px', fontWeight: '700', color: '#ffffff' }}>
                    {app.title}
                </h3>
                
                <p style={{ margin: '0 0 30px 0', color: 'rgba(255, 255, 255, 0.8)', fontSize: '15px', textAlign: 'center', lineHeight: '1.4' }}>
                    This profile will open in a new browser tab.
                </p>
                
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <button 
                        onClick={() => {
                            window.open(app.url, '_blank')
                            setActiveApp('home')
                        }}
                        style={{ 
                            padding: '16px', 
                            background: '#007AFF', 
                            color: 'white', 
                            borderRadius: '16px', 
                            border: 'none', 
                            fontWeight: '600', 
                            fontSize: '16px',
                            cursor: 'pointer',
                            boxShadow: '0 8px 20px rgba(0,122,255,0.3)'
                        }}
                    >
                        Open Profile
                    </button>
                    <button 
                        onClick={() => setActiveApp('home')}
                        style={{ 
                            padding: '16px', 
                            background: 'rgba(255, 255, 255, 0.15)', 
                            color: '#ffffff', 
                            borderRadius: '16px', 
                            border: 'none', 
                            fontWeight: '600', 
                            fontSize: '16px',
                            cursor: 'pointer'
                        }}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

const StackModal = ({ setActiveApp }) => {
    const stack = {
        languages: ['Java', 'Python', 'Nextjs', 'React'],
        tools: ['Stripe', 'Supabase', 'Cursor', 'Claude Code', 'Ollama']
    }

    return (
        <div 
            onClick={() => setActiveApp('home')}
            style={{ 
                position: 'absolute', 
                inset: 0, 
                zIndex: 1000, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                background: 'rgba(0,0,0,0.4)',
                backdropFilter: 'blur(10px)',
                animation: 'fadeIn 0.3s ease-out'
            }}
        >
            <div 
                onClick={(e) => e.stopPropagation()}
                style={{ 
                    width: '400px', 
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)', 
                    backdropFilter: 'blur(50px) saturate(190%)',
                    borderRadius: '32px', 
                    padding: '40px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.35)',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
                    <div style={{ 
                        width: '60px', 
                        height: '60px', 
                        borderRadius: '16px', 
                        background: '#FF9500', 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        color: 'white',
                        boxShadow: '0 10px 20px rgba(255,149,0,0.3)'
                    }}>
                        <Layers size={36} />
                    </div>
                    <div>
                        <h3 style={{ margin: 0, fontSize: '26px', fontWeight: '800', color: '#ffffff' }}>Tech Stack</h3>
                        <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.6)', fontSize: '15px' }}>Languages & Tools</p>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                    <div>
                        <h4 style={{ margin: '0 0 12px 0', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(255, 255, 255, 0.5)' }}>Languages & Frameworks</h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {stack.languages.map(item => (
                                <span key={item} style={{ 
                                    padding: '8px 16px', 
                                    background: 'rgba(0, 122, 255, 0.25)', 
                                    color: '#ffffff', 
                                    borderRadius: '12px', 
                                    fontSize: '15px', 
                                    fontWeight: '600' 
                                }}>{item}</span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 style={{ margin: '0 0 12px 0', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(255, 255, 255, 0.5)' }}>Modern Stack & Tools</h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {stack.tools.map(item => (
                                <span key={item} style={{ 
                                    padding: '8px 16px', 
                                    background: 'rgba(255, 255, 255, 0.15)', 
                                    color: '#ffffff', 
                                    borderRadius: '12px', 
                                    fontSize: '15px', 
                                    fontWeight: '600' 
                                }}>{item}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <button 
                    onClick={() => setActiveApp('home')}
                    style={{ 
                        marginTop: '40px',
                        padding: '16px', 
                        background: '#ffffff', 
                        color: '#1d1d1f', 
                        borderRadius: '16px', 
                        border: 'none', 
                        fontWeight: '600', 
                        fontSize: '16px',
                        cursor: 'pointer',
                        width: '100%'
                    }}
                >
                    Done
                </button>
            </div>
        </div>
    )
}

const SearchModal = ({ apps, searchQuery, setSearchQuery, setActiveApp }) => {
    const allItems = [
        ...apps.map(a => ({ id: a.id, title: a.title, type: 'App', icon: a.icon, color: a.color })),
        { title: 'Java', type: 'Language', icon: Layers, color: '#FF9500' },
        { title: 'Python', type: 'Language', icon: Layers, color: '#FF9500' },
        { title: 'Nextjs', type: 'Framework', icon: Layers, color: '#FF9500' },
        { title: 'React', type: 'Framework', icon: Layers, color: '#FF9500' },
        { title: 'Stripe', type: 'Tool', icon: Layers, color: '#AF52DE' },
        { title: 'Supabase', type: 'Tool', icon: Layers, color: '#AF52DE' },
        { title: 'Cursor', type: 'AI Tool', icon: Layers, color: '#AF52DE' },
        { title: 'Claude Code', type: 'AI Tool', icon: Layers, color: '#AF52DE' },
        { title: 'Ollama', type: 'AI Tool', icon: Layers, color: '#AF52DE' },
    ]

    const filteredResults = searchQuery.trim() === '' 
        ? [] 
        : allItems.filter(item => 
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.type.toLowerCase().includes(searchQuery.toLowerCase())
        ).slice(0, 5)

    return (
        <div 
            onClick={() => { setActiveApp('home'); setSearchQuery(''); }}
            style={{ 
                position: 'absolute', 
                inset: 0, 
                zIndex: 1000, 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center', 
                paddingTop: '80px',
                background: 'rgba(0,0,0,0.4)',
                backdropFilter: 'blur(10px)',
                animation: 'fadeIn 0.3s ease-out'
            }}
        >
            <div 
                onClick={(e) => e.stopPropagation()}
                style={{ 
                    width: '500px', 
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px'
                }}
            >
                {/* Search Bar */}
                <div style={{ 
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)', 
                    backdropFilter: 'blur(50px) saturate(190%)',
                    borderRadius: '24px', 
                    padding: '16px 24px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '15px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.35)',
                }}>
                    <Search size={24} color="#ffffff" />
                    <input 
                        autoFocus
                        placeholder="Search apps, tools, or languages..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{
                            flex: 1,
                            background: 'none',
                            border: 'none',
                            outline: 'none',
                            fontSize: '20px',
                            fontWeight: '500',
                            color: '#ffffff'
                        }}
                        className="glass-search-input"
                    />
                </div>

                {/* Results Container */}
                {filteredResults.length > 0 && (
                    <div style={{ 
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)', 
                        backdropFilter: 'blur(50px) saturate(190%)',
                        borderRadius: '24px', 
                        padding: '12px', 
                        display: 'flex', 
                        flexDirection: 'column',
                        boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
                        border: '1px solid rgba(255, 255, 255, 0.35)',
                        animation: 'fadeIn 0.2s ease-out'
                    }}>
                        {filteredResults.map((result, idx) => (
                            <div 
                                key={idx}
                                onClick={() => {
                                    if (result.type === 'App') setActiveApp(result.id)
                                    else setActiveApp('stack')
                                    setSearchQuery('')
                                }}
                                style={{
                                    padding: '12px 20px',
                                    borderRadius: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px',
                                    cursor: 'pointer',
                                    transition: 'background 0.2s'
                                }}
                                className="search-result-item"
                                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0, 122, 255, 0.1)'}
                                onMouseLeave={(e) => e.currentTarget.style.background = 'none'}
                            >
                                <div style={{ 
                                    width: '40px', 
                                    height: '40px', 
                                    borderRadius: '10px', 
                                    background: result.color || '#333',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: 'white'
                                }}>
                                    {result.icon ? <result.icon size={24} /> : <Layers size={24} />}
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span style={{ fontSize: '16px', fontWeight: '600', color: '#ffffff' }}>{result.title}</span>
                                    <span style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.6)' }}>{result.type}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

const MusicModal = ({ setActiveApp }) => {
    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [volume, setVolume] = useState(0.7)

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume
        }
    }, [volume])

    useEffect(() => {
        return () => {
            if (audioRef.current) {
                audioRef.current.pause()
            }
        }
    }, [])

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }
        setIsPlaying(!isPlaying)
    }

    const onTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime)
    }

    const onLoadedMetadata = () => {
        setDuration(audioRef.current.duration)
    }

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    }

    const handleVolumeChange = (e) => {
        setVolume(parseFloat(e.target.value))
    }

    return (
        <div 
            onClick={() => setActiveApp('home')}
            style={{ 
                position: 'absolute', 
                inset: 0, 
                zIndex: 1000, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                background: 'rgba(0,0,0,0.4)',
                backdropFilter: 'blur(10px)',
                animation: 'fadeIn 0.3s ease-out'
            }}
        >
            <div 
                onClick={(e) => e.stopPropagation()}
                style={{ 
                    width: '360px', 
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)', 
                    backdropFilter: 'blur(50px) saturate(190%)',
                    borderRadius: '40px', 
                    padding: '30px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.35)',
                }}
            >
                <audio 
                    ref={audioRef} 
                    src="/flashinglights.mp3" 
                    onTimeUpdate={onTimeUpdate}
                    onLoadedMetadata={onLoadedMetadata}
                    onEnded={() => setIsPlaying(false)}
                />

                {/* Album Art */}
                <div style={{ 
                    width: '240px', 
                    height: '240px', 
                    borderRadius: '24px', 
                    background: 'linear-gradient(135deg, #1d1d1f 0%, #3a3a3c 100%)',
                    marginBottom: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <img 
                        src="/album_cover.webp" 
                        alt="Flashing Lights Album Cover" 
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    />
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 60%)'
                    }} />
                </div>

                {/* Track Info */}
                <div style={{ textAlign: 'center', marginBottom: '30px', width: '100%' }}>
                    <h3 style={{ margin: '0 0 8px 0', fontSize: '22px', fontWeight: '800', color: '#ffffff' }}>Flashing Lights</h3>
                    <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.6)', fontSize: '16px', fontWeight: '500' }}>Kanye West</p>
                </div>

                {/* Progress Bar */}
                <div style={{ width: '100%', marginBottom: '30px' }}>
                    <input 
                        type="range"
                        min="0"
                        max={duration || 0}
                        value={currentTime}
                        onChange={(e) => {
                            const time = parseFloat(e.target.value)
                            setCurrentTime(time)
                            audioRef.current.currentTime = time
                        }}
                        style={{
                            width: '100%',
                            accentColor: '#ffffff',
                            cursor: 'pointer',
                            height: '6px',
                            background: 'rgba(255,255,255,0.2)',
                            borderRadius: '3px',
                            outline: 'none',
                            marginBottom: '10px',
                            display: 'block'
                        }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', fontWeight: '600' }}>{formatTime(currentTime)}</span>
                        <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', fontWeight: '600' }}>{formatTime(duration)}</span>
                    </div>
                </div>

                {/* Controls */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '30px', marginBottom: '30px' }}>
                    <SkipBack size={28} color="white" style={{ cursor: 'pointer', opacity: 0.8 }} />
                    <div 
                        onClick={togglePlay}
                        style={{ 
                            width: '70px', 
                            height: '70px', 
                            background: 'white', 
                            borderRadius: '50%', 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center',
                            cursor: 'pointer',
                            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                        }}
                    >
                        {isPlaying ? (
                            <Pause size={32} color="#1d1d1f" fill="#1d1d1f" />
                        ) : (
                            <Play size={32} color="#1d1d1f" fill="#1d1d1f" style={{ marginLeft: '4px' }} />
                        )}
                    </div>
                    <SkipForward size={28} color="white" style={{ cursor: 'pointer', opacity: 0.8 }} />
                </div>

                {/* Volume */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', width: '100%' }}>
                    <Volume2 size={20} color="rgba(255,255,255,0.7)" />
                    <input 
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={handleVolumeChange}
                        style={{
                            flex: 1,
                            accentColor: '#ffffff',
                            cursor: 'pointer',
                            height: '4px',
                            background: 'rgba(255,255,255,0.2)',
                            borderRadius: '2px',
                            outline: 'none'
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

const PhotoBoothModal = ({ setActiveApp }) => {
    const videoRef = useRef(null)
    const [hasStream, setHasStream] = useState(false)
    const [photos, setPhotos] = useState([])
    const [isShuttering, setIsShuttering] = useState(false)
    const [viewMode, setViewMode] = useState('camera') // 'camera' or 'gallery'
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

    useEffect(() => {
        let stream = null
        if (viewMode === 'camera') {
            async function startCamera() {
                try {
                    stream = await navigator.mediaDevices.getUserMedia({ video: true })
                    if (videoRef.current) {
                        videoRef.current.srcObject = stream
                        setHasStream(true)
                    }
                } catch (err) {
                    console.error("Camera access denied:", err)
                }
            }
            startCamera()
        }
        return () => {
            if (stream) {
                stream.getTracks().forEach(track => track.stop())
            }
        }
    }, [viewMode])

    const takePhoto = () => {
        if (!videoRef.current) return
        
        // Trigger shutter effect
        setIsShuttering(true)
        setTimeout(() => setIsShuttering(false), 100)

        const canvas = document.createElement('canvas')
        canvas.width = videoRef.current.videoWidth
        canvas.height = videoRef.current.videoHeight
        const ctx = canvas.getContext('2d')
        
        // Flip horizontally to match the preview
        ctx.translate(canvas.width, 0)
        ctx.scale(-1, 1)
        ctx.drawImage(videoRef.current, 0, 0)
        
        const data = canvas.toDataURL('image/png')
        setPhotos(prev => [data, ...prev])
        setCurrentPhotoIndex(0) // Reset to newest photo
        setViewMode('camera') // Ensure we stay in camera mode
    }

    const nextPhoto = () => {
        if (currentPhotoIndex > 0) {
            setCurrentPhotoIndex(prev => prev - 1)
        }
    }

    const prevPhoto = () => {
        if (currentPhotoIndex < photos.length - 1) {
            setCurrentPhotoIndex(prev => prev + 1)
        }
    }

    return (
        <div 
            onClick={() => setActiveApp('home')}
            style={{ 
                position: 'absolute', 
                inset: 0, 
                zIndex: 1000, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                background: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(10px)',
                animation: 'fadeIn 0.3s ease-out'
            }}
        >
            <div 
                onClick={(e) => e.stopPropagation()}
                style={{ 
                    width: '500px', 
                    height: '620px', // Fixed height to prevent jumping
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)', 
                    backdropFilter: 'blur(50px) saturate(190%)',
                    borderRadius: '40px', 
                    padding: '30px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.35)',
                    position: 'relative',
                }}
            >
                {/* Header with toggle */}
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '20px', alignItems: 'center' }}>
                    <div 
                        onClick={() => {
                            if (viewMode === 'camera' && photos.length === 0) return
                            setViewMode(viewMode === 'camera' ? 'gallery' : 'camera')
                        }}
                        style={{ 
                            color: 'white', 
                            fontSize: '18px', 
                            fontWeight: '600', 
                            cursor: (viewMode === 'camera' && photos.length === 0) ? 'default' : 'pointer', 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '8px',
                            opacity: (viewMode === 'camera' && photos.length === 0) ? 0.5 : 1
                        }}
                    >
                        {viewMode === 'camera' ? (
                            <><Layers size={18} /> Library</>
                        ) : (
                            <><ChevronLeft size={20} /> Camera</>
                        )}
                    </div>
                    <div 
                        onClick={() => setActiveApp('home')}
                        style={{ 
                            width: '32px', 
                            height: '32px', 
                            borderRadius: '50%', 
                            background: 'rgba(255,255,255,0.2)', 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center',
                            cursor: 'pointer'
                        }}
                    >
                        <X size={18} color="white" />
                    </div>
                </div>

                {/* Main Content (Camera or Photo View) */}
                <div style={{ 
                    width: '100%', 
                    aspectRatio: '4/3', 
                    background: '#000', 
                    borderRadius: '24px', 
                    overflow: 'hidden',
                    position: 'relative',
                    boxShadow: 'inset 0 0 20px rgba(255,255,255,0.1)'
                }}>
                    {viewMode === 'camera' ? (
                        <>
                            {!hasStream && (
                                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.5)' }}>
                                    <Camera size={48} />
                                </div>
                            )}
                            <video 
                                ref={videoRef}
                                autoPlay 
                                playsInline 
                                style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scaleX(-1)' }}
                            />
                            {/* Shutter Flash */}
                            {isShuttering && (
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'white',
                                    zIndex: 5,
                                    animation: 'fadeIn 0.05s ease-out'
                                }} />
                            )}
                        </>
                    ) : (
                        /* Individual Photo View with Side Arrows */
                        <div style={{ width: '100%', height: '100%', position: 'relative', animation: 'fadeIn 0.2s ease-out' }}>
                            <div style={{ 
                                width: '100%', 
                                height: '100%', 
                                background: `url(${photos[currentPhotoIndex]}) center/cover no-repeat`
                            }} />
                            
                            {/* Navigation Arrows on sides */}
                            {currentPhotoIndex < photos.length - 1 && (
                                <div 
                                    onClick={prevPhoto}
                                    style={{ 
                                        position: 'absolute',
                                        left: '15px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        width: '44px',
                                        height: '44px',
                                        borderRadius: '50%',
                                        background: 'rgba(0,0,0,0.3)',
                                        backdropFilter: 'blur(10px)',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        cursor: 'pointer',
                                        border: '1px solid rgba(255,255,255,0.2)',
                                        zIndex: 10
                                    }}
                                >
                                    <ChevronLeft size={24} color="white" />
                                </div>
                            )}

                            {currentPhotoIndex > 0 && (
                                <div 
                                    onClick={nextPhoto}
                                    style={{ 
                                        position: 'absolute',
                                        right: '15px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        width: '44px',
                                        height: '44px',
                                        borderRadius: '50%',
                                        background: 'rgba(0,0,0,0.3)',
                                        backdropFilter: 'blur(10px)',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        cursor: 'pointer',
                                        border: '1px solid rgba(255,255,255,0.2)',
                                        zIndex: 10
                                    }}
                                >
                                    <ChevronLeft size={24} color="white" style={{ transform: 'rotate(180deg)' }} />
                                </div>
                            )}

                            {/* Photo Counter Overlay */}
                            <div style={{ 
                                position: 'absolute',
                                bottom: '20px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                padding: '6px 16px',
                                background: 'rgba(0,0,0,0.4)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: '20px',
                                color: 'white',
                                fontSize: '13px',
                                fontWeight: '600',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}>
                                {photos.length - currentPhotoIndex} / {photos.length}
                            </div>
                        </div>
                    )}
                </div>

                {/* Fixed Height Controls Area */}
                <div style={{ 
                    marginTop: '30px', 
                    height: '100px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    width: '100%'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
                        {/* Last Photo Preview - Click to open Gallery */}
                        <div 
                            onClick={() => {
                                if (photos.length > 0) {
                                    setViewMode('gallery')
                                }
                            }}
                            style={{ 
                                width: '44px', 
                                height: '44px', 
                                borderRadius: '8px', 
                                border: '2px solid rgba(255,255,255,0.8)',
                                background: photos.length > 0 ? `url(${photos[0]}) center/cover no-repeat` : 'rgba(255,255,255,0.1)',
                                overflow: 'hidden',
                                cursor: photos.length > 0 ? 'pointer' : 'default',
                                transition: 'transform 0.2s',
                                boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                            }}
                            onMouseEnter={(e) => photos.length > 0 && (e.currentTarget.style.transform = 'scale(1.1)')}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        />

                        <div 
                            onClick={() => {
                                if (viewMode === 'gallery') {
                                    setViewMode('camera')
                                } else {
                                    takePhoto()
                                }
                            }}
                            style={{ 
                                width: '74px', 
                                height: '74px', 
                                borderRadius: '50%', 
                                border: '4px solid white',
                                padding: '5px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                                transition: 'transform 0.1s active',
                            }}
                            onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.92)'}
                            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <div style={{ 
                                width: '100%', 
                                height: '100%', 
                                background: 'white', 
                                borderRadius: '50%',
                                boxShadow: '0 0 15px rgba(255,255,255,0.3)'
                            }} />
                        </div>

                        <div 
                            onClick={() => setViewMode('camera')}
                            style={{ width: '44px', height: '44px', display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: 0.8, cursor: viewMode === 'gallery' ? 'pointer' : 'default' }}>
                            <Camera size={28} color="white" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const MessagesModal = ({ setActiveApp }) => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hey! How's the personal site coming along?", sender: 'other', time: '10:41 AM' },
        { id: 2, text: "Almost done! Just adding the finishing touches to the iMessage interface. 🚀", sender: 'me', time: '10:42 AM' },
        { id: 3, text: "Looking sharp. That glassmorphism effect is really popping! ✨", sender: 'other', time: '10:45 AM' }
    ])
    const [inputValue, setInputValue] = useState('')
    const messageEndRef = useRef(null)

    const scrollToBottom = () => {
        messageEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleSend = () => {
        if (!inputValue.trim()) return
        const newMessage = {
            id: messages.length + 1,
            text: inputValue,
            sender: 'me',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
        setMessages([...messages, newMessage])
        setInputValue('')
        
        // Simulate reply
        setTimeout(() => {
            const reply = {
                id: messages.length + 2,
                text: "Love it! Let's keep building. 🔥",
                sender: 'other',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
            setMessages(prev => [...prev, reply])
        }, 1500)
    }

    return (
        <div 
            onClick={() => setActiveApp('home')}
            style={{ 
                position: 'absolute', 
                inset: 0, 
                zIndex: 1000, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                background: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(10px)',
                animation: 'fadeIn 0.3s ease-out'
            }}
        >
            <div 
                onClick={(e) => e.stopPropagation()}
                style={{ 
                    width: '400px', 
                    height: '600px', 
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)', 
                    backdropFilter: 'blur(50px) saturate(190%)',
                    borderRadius: '40px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.35)',
                    overflow: 'hidden'
                }}
            >
                {/* iMessage Header */}
                <div style={{ 
                    padding: '20px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.1)'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '10px' }}>
                        <div onClick={() => setActiveApp('home')} style={{ cursor: 'pointer', color: '#007AFF' }}>
                            <ChevronLeft size={24} />
                        </div>
                        <div style={{ cursor: 'pointer', color: '#007AFF' }}>
                            <MoreHorizontal size={24} />
                        </div>
                    </div>
                    <div style={{ 
                        width: '48px', 
                        height: '48px', 
                        borderRadius: '50%', 
                        background: 'linear-gradient(135deg, #a2a2a2, #7d7d7d)', 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        color: 'white',
                        fontSize: '20px',
                        fontWeight: '600',
                        marginBottom: '8px'
                    }}>
                        DL
                    </div>
                    <div style={{ color: 'white', fontWeight: '600', fontSize: '14px' }}>Daniel Lopez</div>
                </div>

                {/* Messages Area */}
                <div style={{ 
                    flex: 1, 
                    overflowY: 'auto', 
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                }}>
                    {messages.map((msg) => (
                        <div key={msg.id} style={{
                            alignSelf: msg.sender === 'me' ? 'flex-end' : 'flex-start',
                            maxWidth: '75%',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <div style={{
                                padding: '10px 16px',
                                borderRadius: '20px',
                                fontSize: '14px',
                                lineHeight: '1.4',
                                background: msg.sender === 'me' ? '#007AFF' : 'rgba(255,255,255,0.2)',
                                color: 'white',
                                boxShadow: msg.sender === 'me' ? '0 4px 15px rgba(0,122,255,0.3)' : '0 4px 15px rgba(0,0,0,0.1)',
                                position: 'relative',
                                border: msg.sender === 'me' ? 'none' : '1px solid rgba(255,255,255,0.2)'
                            }}>
                                {msg.text}
                            </div>
                            <div style={{ 
                                fontSize: '10px', 
                                color: 'rgba(255,255,255,0.5)', 
                                marginTop: '4px',
                                alignSelf: msg.sender === 'me' ? 'flex-end' : 'flex-start',
                                padding: '0 4px'
                            }}>
                                {msg.time}
                            </div>
                        </div>
                    ))}
                    <div ref={messageEndRef} />
                </div>

                {/* Input Bar */}
                <div style={{ 
                    padding: '15px 20px 30px', 
                    background: 'rgba(255,255,255,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                }}>
                    <div style={{ 
                        flex: 1, 
                        background: 'rgba(255,255,255,0.2)', 
                        borderRadius: '25px', 
                        padding: '8px 15px',
                        border: '1px solid rgba(255,255,255,0.2)',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <input 
                            type="text" 
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="iMessage"
                            style={{ 
                                background: 'transparent', 
                                border: 'none', 
                                color: 'white', 
                                outline: 'none',
                                width: '100%',
                                fontSize: '14px'
                            }}
                        />
                        <div 
                            onClick={handleSend}
                            style={{ 
                                background: inputValue.trim() ? '#007AFF' : 'rgba(255,255,255,0.3)', 
                                width: '28px', 
                                height: '28px', 
                                borderRadius: '50%', 
                                display: 'flex', 
                                justifyContent: 'center', 
                                alignItems: 'center',
                                transition: 'all 0.2s',
                                cursor: inputValue.trim() ? 'pointer' : 'default'
                            }}
                        >
                            <Send size={16} color="white" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const TabletUI = ({ activeApp, setActiveApp }) => {
    const [currentTime, setCurrentTime] = useState(new Date())
    const [searchQuery, setSearchQuery] = useState('')
    const [openedApps, setOpenedApps] = useState(new Set())
    const [loadingApps, setLoadingApps] = useState(new Set())
    const [showToast, setShowToast] = useState(false)

    const copyEmail = (e) => {
        e.stopPropagation()
        navigator.clipboard.writeText('daniel.lopez.3@stonybrook.edu')
        setShowToast(true)
        setTimeout(() => setShowToast(false), 2000)
    }

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 60000)
        return () => clearInterval(timer)
    }, [])

    const formatTime = (date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    const apps = [
        { id: 'about', title: 'Resume', icon: UserCircleIcon, color: '#007AFF' },
        { id: 'linkedin', title: 'LinkedIn', icon: Linkedin, color: '#0077B5', url: 'https://www.linkedin.com/in/daniel-lopez-009620276' },
        { id: 'music', title: 'Music', icon: MusicIconCustom, color: '#FF3B30' },
        { id: 'messages', title: 'Contact', icon: MessageIcon, color: '#5856D6' },
        { id: 'github', title: 'GitHub', icon: Github, color: '#181717', url: 'https://github.com/danrublop' },
        { id: 'twitter', title: 'X', icon: XIconCustom, color: '#000000', url: 'https://x.com/danrublop' },
        { id: 'ecomerse', title: 'Ecommerce', icon: EcomerseIcon, color: '#FFFFFF', url: 'https://harvell-ml18.vercel.app/' },
        { id: 'swiftly', title: 'Swiftly', icon: SwiftlyIcon, color: '#FFFFFF', url: 'https://www.swftly.app/' },
    ]

    const dockApps = [
        { id: 'search', title: 'Search', icon: Search, color: '#AF52DE' },
        { id: 'stack', title: 'Stack', icon: Layers, color: '#FF9500' },
        { id: 'photos', icon: Camera, color: '#FF2D55' },
    ]

    const openApp = (appId) => {
        setActiveApp(appId)
        // Only trigger background persistence for apps that have a dedicated full-screen view
        if (['about', 'ecomerse', 'swiftly'].includes(appId)) {
            setOpenedApps(prev => new Set(prev).add(appId))
            const app = [...apps, ...dockApps].find(a => a.id === appId)
            if (app?.url) {
                setLoadingApps(prev => new Set(prev).add(appId))
            }
        }
    }

    const renderAppScreen = (appId, isVisible) => {
        // Social and Music apps should only show modals, not persistent background screens
        if (['linkedin', 'github', 'twitter', 'music'].includes(appId)) return null;

        const app = [...apps, ...dockApps].find(a => a.id === appId) || { title: 'App', color: '#333', icon: Layers }
        const isLoading = loadingApps.has(appId)

        return (
            <div key={appId} style={{ 
                position: 'absolute',
                inset: 0,
                display: isVisible ? 'flex' : 'none', 
                flexDirection: 'column', 
                background: '#f5f5f7', 
                zIndex: 5, 
                pointerEvents: isVisible ? 'auto' : 'none' 
            }}>
                <header 
                    onClick={() => setActiveApp('home')}
                    style={{ 
                        height: '60px', 
                        padding: '0 20px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '15px',
                        background: 'white',
                        borderBottom: '1px solid #e5e5e5',
                        cursor: 'pointer',
                        zIndex: 10
                    }}
                >
                    <ChevronLeft size={24} color="#007AFF" />
                    <div style={{ 
                        width: '32px', height: '32px', borderRadius: '8px', 
                        background: app.color, display: 'flex', justifyContent: 'center', 
                        alignItems: 'center', color: 'white' 
                    }}>
                        <app.icon size={20} />
                    </div>
                    <span style={{ fontSize: '18px', fontWeight: '600', color: '#1d1d1f' }}>{app.title}</span>
                </header>
                <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                    {app.id === 'linkedin' ? (
                        <div style={{ 
                            flex: 1, 
                            padding: '40px', 
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            textAlign: 'center',
                            background: 'white',
                            height: '100%'
                        }}>
                             <div style={{ 
                                width: '120px', 
                                height: '120px', 
                                borderRadius: '26px', 
                                background: '#0077B5',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'white',
                                marginBottom: '30px',
                                boxShadow: '0 20px 40px rgba(0,119,181,0.2)'
                            }}>
                                <app.icon size={80} />
                            </div>
                            <h2 style={{ fontSize: '32px', color: '#1d1d1f', marginBottom: '10px' }}>Daniel Lopez</h2>
                            <p style={{ color: '#86868b', fontSize: '18px', marginBottom: '30px' }}>View professional profile on LinkedIn</p>
                            <a 
                                href={app.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{
                                    padding: '16px 40px',
                                    background: '#007AFF',
                                    color: 'white',
                                    borderRadius: '16px',
                                    textDecoration: 'none',
                                    fontWeight: '700',
                                    fontSize: '18px',
                                    boxShadow: '0 8px 25px rgba(0,122,255,0.4)',
                                    transition: 'transform 0.2s'
                                }}
                                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                            >
                                Visit LinkedIn Profile
                            </a>
                        </div>
                    ) : app.url ? (
                        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                            {isLoading && (
                                <div style={{ 
                                    position: 'absolute', 
                                    inset: 0, 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    background: '#fff',
                                    zIndex: 5
                                }}>
                                    <div className="loader"></div>
                                </div>
                            )}
                            <iframe 
                                src={app.url} 
                                style={{ flex: 1, border: 'none', width: '100%', height: '100%' }} 
                                title={app.title}
                                onLoad={() => setLoadingApps(prev => {
                                    const next = new Set(prev)
                                    next.delete(appId)
                                    return next
                                })}
                            />
                            <div style={{ 
                                position: 'absolute', 
                                bottom: '20px', 
                                right: '20px', 
                                zIndex: 10 
                            }}>
                                <a 
                                    href={app.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{
                                        padding: '12px 24px',
                                        background: '#007AFF',
                                        color: 'white',
                                        borderRadius: '12px',
                                        textDecoration: 'none',
                                        fontWeight: '600',
                                        boxShadow: '0 4px 15px rgba(0,122,255,0.3)',
                                        fontSize: '14px'
                                    }}
                                >
                                    Open in New Tab
                                </a>
                            </div>
                        </div>
                    ) : app.id === 'about' ? (
                        <div style={{ 
                            flex: 1, 
                            padding: '60px 80px', 
                            background: 'white', 
                            height: '100%', 
                            overflowY: 'auto',
                            fontFamily: 'Georgia, serif',
                            color: '#1d1d1f'
                        }}>
                            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                                <h1 style={{ fontSize: '36px', marginBottom: '10px' }}>Daniel Lopez</h1>
                                <p style={{ color: '#86868b', fontSize: '18px', marginBottom: '10px' }}>Manhattan, NY</p>
                            </div>

                            <div style={{ marginBottom: '30px' }}>
                                <h3 style={{ fontSize: '14px', textTransform: 'uppercase', color: '#007AFF', borderBottom: '1px solid #e5e5e5', paddingBottom: '5px', marginBottom: '15px' }}>Education</h3>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                                    <span>Stony Brook University</span>
                                    <span>May 2028</span>
                                </div>
                                <div style={{ fontStyle: 'italic', marginBottom: '5px' }}>Bachelor of Science in Computer Science | Stony Brook, NY</div>
                                <p style={{ fontSize: '15px' }}>Relevant Coursework: Applied Linear Algebra, Object-Oriented Programming, Classical Physics</p>
                            </div>

                            <div style={{ marginBottom: '30px' }}>
                                <h3 style={{ fontSize: '14px', textTransform: 'uppercase', color: '#007AFF', borderBottom: '1px solid #e5e5e5', paddingBottom: '5px', marginBottom: '15px' }}>Technical Skills</h3>
                                <p style={{ fontSize: '15px' }}><strong>Computer:</strong> Python, Java, Next.js, Three.js, CSS</p>
                                <p style={{ fontSize: '15px' }}><strong>Tools:</strong> Cursor, Supabase, Claude Code, Stripe, Git, Ollama, React, Adobe Creative Suite</p>
                                <p style={{ fontSize: '15px' }}><strong>Skills:</strong> Machine Learning, AI | <strong>Certificates:</strong> NYC Comptroller Recognition</p>
                            </div>

                            <div style={{ marginBottom: '30px' }}>
                                <h3 style={{ fontSize: '14px', textTransform: 'uppercase', color: '#007AFF', borderBottom: '1px solid #e5e5e5', paddingBottom: '5px', marginBottom: '15px' }}>Experience</h3>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                                    <span>Division of Information Technology</span>
                                    <span>February 2026 – Present</span>
                                </div>
                                <div style={{ fontStyle: 'italic', marginBottom: '5px' }}>Client Support Technician | Stony Brook, NY</div>
                                <ul style={{ fontSize: '15px', paddingLeft: '20px' }}>
                                    <li>Resolve hardware and software issues for faculty, staff, and students across walk-in and remote help desk channels.</li>
                                    <li>Diagnose and repair university computer systems, reducing downtime for end users.</li>
                                </ul>

                                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', marginTop: '15px' }}>
                                    <span>Basics on Broadway</span>
                                    <span>August 2025 – February 2026</span>
                                </div>
                                <div style={{ fontStyle: 'italic', marginBottom: '5px' }}>Stocker/locksmith | Manhattan, NY</div>
                                <ul style={{ fontSize: '15px', paddingLeft: '20px' }}>
                                    <li>Assisted customers with technical product inquiries and key duplication services in a fast-paced retail environment.</li>
                                    <li>Managed inventory intake and shipment processing, maintaining accurate stock levels.</li>
                                </ul>

                                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', marginTop: '15px' }}>
                                    <span>College Soccer Guy</span>
                                    <span>August 2023 – December 2024</span>
                                </div>
                                <div style={{ fontStyle: 'italic', marginBottom: '5px' }}>Editor/Graphic designer (remote) | Los Angeles, CA</div>
                                <ul style={{ fontSize: '15px', paddingLeft: '20px' }}>
                                    <li>Produced and edited video content for 20+ athlete clients using Adobe Premiere Pro and Photoshop.</li>
                                    <li>Designed social media graphics and visual assets, delivering work on tight client timelines.</li>
                                </ul>

                                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', marginTop: '15px' }}>
                                    <span>Riverdale Window Cleaning</span>
                                    <span>June 2023 – October 2023</span>
                                </div>
                                <div style={{ fontStyle: 'italic', marginBottom: '5px' }}>Co-founder | Bronx, NY</div>
                                <ul style={{ fontSize: '15px', paddingLeft: '20px' }}>
                                    <li>Launched and operated a local service business, handling client acquisition, scheduling, and operations.</li>
                                    <li>Acquired 15 clients through door-to-door sales, demonstrating persistence and strong communication.</li>
                                </ul>
                            </div>

                            <div style={{ marginBottom: '30px' }}>
                                <h3 style={{ fontSize: '14px', textTransform: 'uppercase', color: '#007AFF', borderBottom: '1px solid #e5e5e5', paddingBottom: '5px', marginBottom: '15px' }}>Projects & Leadership</h3>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                                    <span>Swiftly App</span>
                                    <span>Present</span>
                                </div>
                                <div style={{ fontSize: '15px', marginBottom: '10px' }}>Building a full-stack POS platform in Python and React with AI-driven sales analytics and Stripe integration.</div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                                    <span>Black Algódon</span>
                                    <span>February 2026</span>
                                </div>
                                <div style={{ fontSize: '15px', marginBottom: '10px' }}>Built a full e-commerce site using Next.js with Three.js 3D elements and custom CSS.</div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                                    <span>Code Assistant</span>
                                    <span>September 2025</span>
                                </div>
                                <div style={{ fontSize: '15px', marginBottom: '10px' }}>Built an Electron/React desktop app for AI-powered code analysis using Ollama.</div>
                            </div>
                        </div>
                    ) : (
                        <div style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', height: '100%' }}>
                            <div style={{ fontSize: '64px', marginBottom: '20px' }}>🚀</div>
                            <h2 style={{ fontSize: '32px', color: '#1d1d1f', marginBottom: '16px' }}>Welcome to {app.title}</h2>
                            <p style={{ color: '#86868b', fontSize: '18px', maxWidth: '400px' }}>This is a premium application environment designed for the ultimate user experience.</p>
                        </div>
                    )}
                </div>
            </div>
        )
    }

    const renderHomeScreen = () => (
        <>
            {/* App Grid */}
            <main style={{ 
                flex: 1, 
                padding: '40px 60px',
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gridTemplateRows: 'repeat(2, 1fr)',
                gap: '40px',
                justifyItems: 'center',
                alignItems: 'start',
                zIndex: 1,
                pointerEvents: 'auto'
            }}>
                {apps.map((app) => (
                    <div 
                        key={app.id} 
                        onClick={(e) => { e.stopPropagation(); openApp(app.id); }}
                        style={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center', 
                            cursor: 'pointer',
                        }}
                        className="app-icon"
                    >
                        <div style={{ 
                            width: '120px', 
                            height: '120px', 
                            borderRadius: '26px', 
                            background: ['github', 'twitter', 'linkedin', 'music', 'about', 'messages', 'ecomerse', 'swiftly'].includes(app.id)
                                ? app.id === 'github' 
                                    ? 'linear-gradient(135deg, rgba(80, 80, 80, 0.85) 0%, rgba(30, 30, 30, 0.95) 100%)'
                                    : app.id === 'twitter'
                                        ? 'linear-gradient(135deg, rgba(50, 50, 50, 0.9) 0%, rgba(10, 10, 10, 0.98) 100%)'
                                        : app.id === 'linkedin'
                                            ? 'linear-gradient(135deg, rgba(0, 150, 230, 0.85) 0%, rgba(0, 100, 190, 0.95) 100%)'
                                            : app.id === 'music'
                                                ? 'linear-gradient(135deg, rgba(255, 80, 100, 0.85) 0%, rgba(255, 40, 80, 0.95) 100%)'
                                                : app.id === 'about'
                                                    ? 'linear-gradient(135deg, rgba(160, 180, 200, 0.85) 0%, rgba(100, 120, 140, 0.95) 100%)'
                                                    : app.id === 'ecomerse'
                                                        ? 'white'
                                                        : app.id === 'swiftly'
                                                            ? 'linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%)'
                                                            : 'linear-gradient(135deg, rgba(90, 235, 125, 0.85) 0%, rgba(65, 210, 100, 0.95) 100%)'
                                : 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(18px) saturate(110%)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: ['github', 'twitter', 'linkedin', 'music', 'about', 'messages'].includes(app.id) ? 'white' : app.color,
                            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                            marginBottom: '10px',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {/* Subtle white sheen/gradient overlay for All Special Icons */}
                            {['github', 'twitter', 'linkedin', 'music', 'about', 'messages'].includes(app.id) && (
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 50%)',
                                    zIndex: 0
                                }} />
                            )}
                            {app.isFolder ? (
                                <FolderIcon icons={app.folderIcons} />
                            ) : (
                                <app.icon 
                                    size={app.id === 'twitter' ? 56 : app.id === 'about' ? 82 : app.id === 'ecomerse' ? 120 : app.id === 'swiftly' ? 100 : 64} 
                                    color={['github', 'twitter', 'linkedin', 'music', 'about', 'messages', 'ecomerse'].includes(app.id) ? 'white' : app.color}
                                    strokeWidth={app.id === 'twitter' ? 0 : 1.5} 
                                    style={{ zIndex: 1 }}
                                />
                            )}
                        </div>
                        <span style={{ 
                            color: '#ffffff', 
                            fontSize: '18px', 
                            fontWeight: '600',
                            textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                        }}>{app.title}</span>
                    </div>
                ))}
            </main>

            {/* Dock */}
            <footer style={{ 
                height: '140px', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'flex-start',
                paddingBottom: '30px',
                zIndex: 10,
                pointerEvents: 'auto'
            }}>
                <div style={{ 
                    background: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(40px) saturate(180%)',
                    borderRadius: '32px',
                    padding: '16px',
                    display: 'flex',
                    gap: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.1)'
                }}>
                    {dockApps.map((app) => (
                        <div 
                            key={app.id} 
                            onClick={(e) => { e.stopPropagation(); openApp(app.id); }}
                            style={{ 
                                width: '100px', 
                                height: '100px', 
                                borderRadius: '22px', 
                                background: 'rgba(255, 255, 255, 0.08)',
                                backdropFilter: 'blur(25px) saturate(110%)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: app.color,
                                cursor: 'pointer',
                            }}
                            className="dock-icon"
                        >
                            <app.icon size={56} color={app.color} />
                        </div>
                    ))}
                </div>
            </footer>
        </>
    )

    const isExternalApp = ['linkedin', 'github', 'twitter', 'stack', 'search', 'music', 'photos', 'messages'].includes(activeApp)

    return (
        <div style={{ 
            width: '100%', 
            height: '100%', 
            background: (activeApp === 'home' || isExternalApp) ? '#000000' : '#f5f5f7',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '32px',
            boxSizing: 'border-box',
            pointerEvents: 'auto'
        }}>
            {/* Status Bar */}
            <header style={{ 
                height: '48px', 
                padding: '0 40px', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                color: (activeApp === 'home' || isExternalApp) ? '#ffffff' : '#1d1d1f',
                fontSize: '16px',
                fontWeight: '600',
                background: (activeApp === 'home' || isExternalApp) 
                    ? 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' 
                    : 'linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.5) 60%, transparent 100%)',
                backdropFilter: 'blur(10px)',
                zIndex: 10,
            }}>
                <div>{formatTime(currentTime)}</div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <Wifi size={16} />
                    <Battery size={20} />
                </div>
            </header>

            {/* Ambient Background for Home & External Apps */}
            {(activeApp === 'home' || isExternalApp) && (
                <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                    <Grainient
                        className="grainient-bg"
                        color1="#1a1a1a"
                        color2="#29a2ff"
                        color3="#B19EEF"
                        timeSpeed={0.05}
                        zoom={0.4}
                    />
                </div>
            )}

            {/* Main Content Layer */}
            <div style={{ flex: 1, position: 'relative', display: 'flex', flexDirection: 'column' }}>
                <div style={{ 
                    flex: 1, 
                    display: (activeApp === 'home' || isExternalApp) ? 'flex' : 'none', 
                    flexDirection: 'column' 
                }}>
                    {renderHomeScreen()}
                </div>
                {Array.from(openedApps).map(appId => (
                    renderAppScreen(appId, activeApp === appId)
                ))}
            </div>

            {/* Modal Layer */}
            {['linkedin', 'github', 'twitter'].includes(activeApp) && <ExternalModal appId={activeApp} apps={apps} setActiveApp={setActiveApp} />}
            {activeApp === 'stack' && <StackModal setActiveApp={setActiveApp} />}
            {activeApp === 'search' && <SearchModal apps={apps} searchQuery={searchQuery} setSearchQuery={setSearchQuery} setActiveApp={setActiveApp} />}
            {activeApp === 'music' && <MusicModal setActiveApp={setActiveApp} />}
            {activeApp === 'photos' && <PhotoBoothModal setActiveApp={setActiveApp} />}
            {activeApp === 'messages' && <MessagesModal setActiveApp={setActiveApp} />}

            {showToast && (
                <div style={{
                    position: 'absolute',
                    bottom: '80px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'rgba(0, 0, 0, 0.8)',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    zIndex: 1000,
                    animation: 'fadeIn 0.3s ease-out'
                }}>
                    Email copied!
                </div>
            )}

            <style>{`
                .app-icon { transition: transform 0.2s; }
                .app-icon:hover { transform: scale(1.08); }
                .dock-icon { transition: transform 0.2s; }
                .dock-icon:hover { transform: scale(1.15); }
                .glass-search-input::placeholder { color: rgba(255, 255, 255, 0.5); }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .loader {
                    width: 40px;
                    height: 40px;
                    border: 3px solid rgba(0, 122, 255, 0.1);
                    border-top: 3px solid #007AFF;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    )
}

