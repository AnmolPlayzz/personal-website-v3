import { useState, useEffect } from 'react';

export function useVisibleSection(sectionIds: string[]): string | null {
    const [visibleSectionId, setVisibleSectionId] = useState<string | null>(null);

    useEffect(() => {
        const checkVisibility = () => {
            sectionIds.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                    if (isVisible) {
                        setVisibleSectionId(id);
                    }
                }
            });
        };

        // Check initial visibility
        checkVisibility();

        // Add scroll listener
        window.addEventListener('scroll', checkVisibility);
        // Also listen for resize in case viewport dimensions change
        window.addEventListener('resize', checkVisibility);

        return () => {
            window.removeEventListener('scroll', checkVisibility);
            window.removeEventListener('resize', checkVisibility);
        };
    }, [sectionIds]);

    return visibleSectionId;
}