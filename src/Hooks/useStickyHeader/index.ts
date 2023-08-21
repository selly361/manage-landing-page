import { useEffect, useRef, useState } from "react";

const useStickyNav = () => {

    const containerRef = useRef<HTMLDivElement | null>(null);
    const [ isIntersecting, setIsIntersecting ] = useState(false);
    const [ isNotIntersecting, setIsNotIntersecting ] = useState(false);
    const transitionDuration = 300;
    let isInitialized = false;
    let timer;

    useEffect(() => {
        if(containerRef.current) {
            navObserver(containerRef.current);
        }
    }, [containerRef]);


    const navObserver = (element: HTMLElement) => {
        if (!element) return false;

        const options = {
            threshold: 0.2
        }

        const observer = new IntersectionObserver((entries) => {
            if (isInitialized) {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        setIsIntersecting(true);
                        setIsNotIntersecting(false);
                    } else {
                        setIsNotIntersecting(true);
                        
                        timer = setTimeout(() => {
                            setIsIntersecting(false);
                            setIsNotIntersecting(false);

                            timer = null;
                        }, transitionDuration)
                    }
                })
            }
            isInitialized = true;
        }, options)
        observer.observe(element);
    }

    return { containerRef, isScrollIn: isIntersecting, isScrollOut: isNotIntersecting }
}
 
export default useStickyNav;