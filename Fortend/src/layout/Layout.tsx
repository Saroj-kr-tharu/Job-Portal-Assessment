
import type { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <>
        {/* <Header /> */}
            <div className="min-h-[80vh]    flex " 
            style={{
                background: "linear-gradient(135deg, #1a2236 0%, #1e2d4a 60%, #162032 100%)",
            }}>
            <div className="w-full">{children}</div>
            </div>
        {/* <Footer /> */}
    </>
  );
}

export default Layout;
