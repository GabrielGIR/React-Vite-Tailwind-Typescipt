import { useEffect } from "react";
import { Footer } from "./elements/footer";
import { Navbar } from "./elements/navbar";

interface LayoutProps { //
    title: string;
    children: React.ReactNode; //Layout es un componente "envuelto" esto hara que acepte children
}

export const Layout = ({title, children}: LayoutProps) =>{  
    useEffect(() => {// Actualiza el título del documento cuando cambia la prop 'title'


        document.title = title; //Especificamente cuando el titulo cambia
    }, [title]);
    
    return( //Estructura de la página
    <> 
        <Navbar/>
        
        <main className="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden">
            {children}
            </main>

        <Footer />
    </>
    );
}; 