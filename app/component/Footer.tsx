export default function Footer() {
  return (
    <footer className="w-full py-16 flex flex-col items-center gap-2 " style={{ backgroundColor: '#3A0D08', color: '#E5D5C0' }}>
      <div className="flex gap-8">
        <a href="https://github.com/MissDeborah" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          {/* GitHub SVG */}
          <svg width="34" height="34" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.08.79 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/dibora-dereje-10b360341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          {/* LinkedIn SVG */}
          <svg width="34" height="34" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z" />
          </svg>
        </a>
        <a href="https://t.me/Debbei32" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9.036 15.28l-.376 5.2c.53 0 .76-.23 1.04-.5l2.5-2.38 5.37 3.94c.98.55 1.67.25 1.93-.9l3.5-16.4c.33-1.52-.56-2.1-1.54-1.74L1.53 9.22c-1.46.57-1.44 1.38-.24 1.75l5.5 1.73 12.9-8.1c.62-.38 1.17-.16.7.22l-10.33 9.46z"/>
          </svg>
        </a>
      </div>
      <div className="text-sm text-gray-300 mt-10">
        &copy; {new Date().getFullYear()} Debbie. All rights reserved.
      </div>
    </footer>
  );
}